import { copyFile, mkdir, rm } from 'node:fs/promises'
import { basename, dirname, join, resolve } from 'node:path'
import { homedir } from 'node:os'
import { execSync } from 'node:child_process'

let osHome = homedir()
let localRoot = resolve(dirname(new URL(import.meta.url).pathname), '..')
let localPublicEditorsDir = join(localRoot, 'public/editors')

let files = {
  jetbrains: ['.ideavimrc'],
  vscode: [
    'Library/Application Support/Code/User/settings.json',
    'Library/Application Support/Code/User/keybindings.json',
  ],
  zed: [
    '.config/zed/settings.json',
    '.config/zed/keymap.json',
    '.config/zed/tasks.json',
  ],
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

async function main() {
  await rm(localPublicEditorsDir, { force: true, recursive: true })
  await mkdir(localPublicEditorsDir)

  for (let [editor, list] of Object.entries(files)) {
    let dir = join(localPublicEditorsDir, editor)
    await mkdir(dir)
    for (let file of list) {
      let filePath = join(osHome, file)
      let fileName = basename(filePath)
      await copyFile(filePath, join(dir, fileName))
    }
  }
}
