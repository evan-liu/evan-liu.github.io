import { readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineHjkl } from './define-hjkl.js'
import { defineLeaderKeys } from './define-leader-keys.js'
import { readIdeavimrc } from './read-ideavimrc.js'
import { readZedKeymap } from './read-zed-keymap.js'
import { readVSCodeKeymap } from './read-vscode-keymap.js'
import { defineOtherKeys } from './define-other-keys.js'

let hjkl = defineHjkl()
let leaderKeys = defineLeaderKeys()
let otherKeys = defineOtherKeys()

let rootDir = resolve(fileURLToPath(import.meta.url), '../../../..')

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

async function main() {
  await readIdeavimrc(rootDir, leaderKeys)
  await readVSCodeKeymap(rootDir, leaderKeys)
  await readZedKeymap(rootDir, leaderKeys)

  await writeMdx()
}

async function writeMdx() {
  let mdxFile = join(
    rootDir,
    'src/content/docs/productivity/editor-keymaps.mdx',
  )
  let mdxCode = await readFile(mdxFile, 'utf-8')
  let result = mdxCode
    .replace(
      /^(## .*h ?j ?k ?l.*?$)([\s\S]*?)^### [\s\S]*?^## /im,
      (_, heading, overview) => `${heading}${overview}${hjklMdx()}\n\n## `,
    )
    .replace(
      /^(## .*leader key.*?$)([\s\S]*?)^### [\s\S]*?^## /im,
      (_, heading, overview) =>
        `${heading}${overview}${leaderKeysMdx()}\n\n## `,
    )
    .replace(
      /^(## .*other key.*?$)([\s\S]*?)^### [\s\S]*$/im,
      (_, heading, overview) => `${heading}${overview}${otherKeysMdx()}\n`,
    )

  await writeFile(mdxFile, result)
}

function hjklMdx() {
  return hjkl
    .map(
      (v) => `\
### ${v.group}
${v.desc ? `\n${v.desc}\n` : ''}
${keymapTable(v.keymap)}`,
    )
    .join('\n\n')
}

function leaderKeysMdx() {
  return leaderKeys
    .map(
      (v) => `\
### ${v.key} - ${v.group}
${v.desc ? `\n${v.desc}\n` : ''}
${keymapTable(v.keymap)}`,
    )
    .join('\n\n')
}

function otherKeysMdx() {
  return otherKeys
    .map(
      (v) => `\
### ${v.group}
${v.desc ? `\n${v.desc}\n` : ''}
${keymapTable(v.keymap)}`,
    )
    .join('\n\n')
}

function keymapTable(keymap) {
  return `\
<div class="not-content grid grid-cols-[auto_1fr_auto] gap-x-5 border-t border-sl-gray-4">
${keymap
  .map(
    ({ key, desc, editors }) => `\
  <div class="col-span-3 grid grid-cols-subgrid items-center border-b border-sl-gray-4 py-1">
    <BindingKeys keys="${key}" />
    <span class="flex-1">${desc}</span>
    <EditorsSupport${editors.length ? ` ${editors.join(' ')}` : ''} />
  </div>`,
  )
  .join('\n')}
</div>`
}
