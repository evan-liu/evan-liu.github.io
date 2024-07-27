import { copyFile, mkdir, rm } from 'node:fs/promises'
import { basename, dirname, join, resolve } from 'node:path'
import { homedir } from 'node:os'

let osHome = homedir()
let rootDir = resolve(dirname(new URL(import.meta.url).pathname), '..')
let distDir = join(rootDir, 'src/editors')

let files = {
  jetbrains: ['.ideavimrc'],
  vscode: [
    'Library/Application Support/Code/User/settings.json',
    'Library/Application Support/Code/User/keybindings.json',
    'Library/Application Support/Code/User/snippets/snippets.code-snippets',
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
  await rm(distDir, { force: true, recursive: true })
  await mkdir(distDir)

  for (let [editor, list] of Object.entries(files)) {
    let dir = join(distDir, editor)
    await mkdir(dir)
    for (let file of list) {
      let filePath = join(osHome, file)
      let fileName = basename(filePath)
      await copyFile(filePath, join(dir, fileName))
    }
  }
}
