import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export async function readVSCodeKeymap(rootDir, leaderKeys) {
  console.log(`\n> Reading VSCode keymap`)

  let settingsPath = join(rootDir, 'dotfiles/vscode-settings.json')
  let settingsCode = await readFile(settingsPath, 'utf8')
  let settingsJson = JSON.parse(settingsCode.replace(/\/\/.*?$/gm, ''))

  let keymap = [
    ...settingsJson['vim.normalModeKeyBindingsNonRecursive'],
    ...settingsJson['vim.visualModeKeyBindingsNonRecursive'],
    ...settingsJson['vim.insertModeKeyBindingsNonRecursive'],
  ]

  for (let { before } of keymap) {
    if (before[0] == '<leader>') {
      addKey(mapLeaderKey(before), leaderKeys)
    }
  }
}

function mapLeaderKey(keys) {
  if (keys.length != 3) return null
  return keys.map((v) => (v == '<leader>' ? '␣' : v)).join('')
}

function addKey(key, map) {
  if (!key) return

  for (let { keymap } of map) {
    for (let v of keymap) {
      if (v.key == key) {
        if (!v.editors.includes('VSCode')) {
          v.editors = [...v.editors, 'VSCode']
        }
        return
      }
    }
  }
  console.log(`Missed: ${key}`)
}
