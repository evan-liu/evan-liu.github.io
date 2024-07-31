import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export async function readIdeavimrc(rootDir, leaderKeys) {
  console.log('\n> Reading ideavimrc')
  let ideaPath = join(rootDir, 'dotfiles/ideavimrc.vim')
  let ideaSrc = await readFile(ideaPath, 'utf-8')

  ideaSrc.split('\n').forEach((line) => {
    let match = line.match(/^map <leader>(<leader>)?(\w)(\w)? (<.*)$/)
    let [, leaderKey, groupKey, actionKey, action] = match || []
    if (groupKey && (actionKey || leaderKey) && action) {
      let group = leaderKeys.find((v) => v.key == groupKey.toLowerCase())
      let key = actionKey ? `␣${groupKey}${actionKey}` : `␣␣${groupKey}`
      let keymap = group.keymap.find((v) => v.key == key)
      if (keymap) {
        if (!keymap.editors.includes('WebStorm')) {
          keymap.editors.push('WebStorm')
        }
      } else {
        console.log(`Missed: ${key} ${action}`)
      }
    }
  })
}
