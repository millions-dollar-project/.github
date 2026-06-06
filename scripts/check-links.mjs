#!/usr/bin/env node
// scripts/check-links.mjs — verify that every internal markdown link in
// profile/ points to a file that exists. Catches broken cross-refs.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join, dirname, relative, resolve, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(import.meta.url), '../..')

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry === '.git' || entry === 'node_modules') continue
    const p = join(dir, entry)
    const s = statSync(p)
    if (s.isDirectory()) yield* walk(p)
    else if (extname(p) === '.md') yield p
  }
}

const linkRe = /(?<!!)\[([^\]]+)\]\(([^)]+)\)/g
let bad = 0
let checked = 0

for (const file of walk(ROOT)) {
  const text = readFileSync(file, 'utf8')
  const rel = relative(ROOT, file)
  for (const m of text.matchAll(linkRe)) {
    const target = m[2]
    if (/^(https?:|mailto:|#|http:)/.test(target)) continue
    const [pathPart] = target.split('#')
    if (!pathPart) continue
    checked++
    const base = pathPart.startsWith('/')
      ? join(ROOT, pathPart)
      : resolve(dirname(file), pathPart)
    const candidates = [base, `${base}.md`, join(base, 'index.md')]
    if (candidates.some(existsSync)) continue
    console.error(`broken link: ${rel} -> ${target}`)
    bad++
  }
}

console.log(`checked ${checked} internal links, ${bad} broken`)
process.exit(bad === 0 ? 0 : 1)
