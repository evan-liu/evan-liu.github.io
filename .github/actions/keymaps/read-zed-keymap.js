import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export async function readZedKeymap(rootDir, leaderKeys) {
  console.log(`\n> Reading Zed keymap`)
  let keymapPath = join(rootDir, 'dotfiles/zed-keymap.json')
  let keymapCode = await readFile(keymapPath, 'utf8')
  let keymapJson = JSON.parse(keymapCode.replace(/\/\/.*?$/gm, ''))
  for (let { bindings } of keymapJson) {
    for (let keys of Object.keys(bindings)) {
      if (/^space /.test(keys)) {
        addKey(mapLeaderKey(keys.split(' ')), leaderKeys)
      }
    }
  }
}

function mapLeaderKey(keys) {
  if (keys.length != 3) return null
  return keys.map((v) => (v == 'space' ? '␣' : v)).join('')
}

function addKey(key, map) {
  if (!key) return

  for (let { keymap } of map) {
    for (let v of keymap) {
      if (v.key == key) {
        if (!v.editors.includes('Zed')) {
          v.editors = [...v.editors, 'Zed']
        }
        return
      }
    }
  }
  console.log(`Missed: ${key}`)
}
