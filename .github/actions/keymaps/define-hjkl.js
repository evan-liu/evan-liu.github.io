export function defineHjkl() {
  let editors = ['WebStorm']
  let notZed = ['⌃⇧j', '⌃⇧k', '⌃⇧h', '⌃⇧l', '⌘⌥j', '⌘⌥k', '⌘⌃h', '⌘⌃l']
  let notVSCode = ['⌃⇧j', '⌃⇧k', '⌃⇧h', '⌃⇧l', '⌘⌥j', '⌘⌥k', '⌘⌃h', '⌘⌃l']
  let hjkl = [
    {
      group: 'Scroll up/down in file',
      desc: 'In Vim `⇧ + j` join lines. I remapped `⌃ + y` for it instead.',
      keymap: [
        { key: '⇧j', desc: 'Scroll down by one line', editors },
        { key: '⇧k', desc: 'Scroll up by one line', editors },
      ],
    },
    {
      group: 'Move cursor up/down in window',
      desc: 'Via Vim. Also `⇧ + m` for moving cursor to the middle.',
      keymap: [
        { key: '⇧h', desc: 'Move cursor to window top', editors },
        { key: '⇧l', desc: 'Move cursor to window bottom', editors },
      ],
    },
    {
      group: 'Move cursor up/down in file',
      keymap: [
        { key: '⌃j', desc: 'Move cursor down by 5 lines', editors },
        { key: '⌃k', desc: 'Move cursor up by 5 lines', editors },
      ],
    },
    {
      group: 'Go back/forward in history',
      keymap: [
        { key: '⌃h', desc: 'Go back', editors },
        { key: '⌃l', desc: 'Go forward', editors },
      ],
    },
    {
      group: 'Find/Select word under cursor',
      keymap: [
        { key: '⌘j', desc: 'Find next word under cursor', editors },
        { key: '⌘k', desc: 'Find previous word under cursor', editors },
      ],
    },
    {
      group: 'Expand/Shrink selection',
      keymap: [
        { key: '⌥j', desc: 'Shrink selection', editors },
        { key: '⌥k', desc: 'Expand selection', editors },
      ],
    },
    {
      group: 'Previous/Next tab',
      keymap: [
        { key: '⌥h', desc: 'Previous tab', editors },
        { key: '⌥l', desc: 'Next tab', editors },
      ],
    },
    {
      group: 'Move line up/down',
      keymap: [
        { key: '⌘⇧j', desc: 'Move line down', editors },
        { key: '⌘⇧k', desc: 'Move line up', editors },
      ],
    },
    {
      group: 'Move statement up/down/left/right',
      keymap: [
        { key: '⌃⇧j', desc: 'Move statement down', editors },
        { key: '⌃⇧k', desc: 'Move statement up', editors },
        { key: '⌃⇧h', desc: 'Move statement left', editors },
        { key: '⌃⇧l', desc: 'Move statement right', editors },
      ],
    },
    {
      group: 'Go to next/previous error in file',
      keymap: [
        { key: '⌥⌃j', desc: 'Go to next error in file', editors },
        { key: '⌥⌃k', desc: 'Go to previous error in file', editors },
      ],
    },
    {
      group: 'Go to next/previous method in file',
      keymap: [
        { key: '⌘⌥j', desc: 'Go to next method in file', editors },
        { key: '⌘⌥k', desc: 'Go to previous method in file', editors },
      ],
    },
    {
      group: 'Go to next/previous change in file/diff',
      keymap: [
        { key: '⌘⌃j', desc: 'Go to next change in file', editors },
        { key: '⌘⌃k', desc: 'Go to previous change in file', editors },
      ],
    },
    {
      group: 'Go to next/previous file in diff',
      keymap: [
        { key: '⌘⌃h', desc: 'Go to next file in diff', editors },
        { key: '⌘⌃l', desc: 'Go to previous file in diff', editors },
      ],
    },
    {
      group: 'Add cursor below/above',
      desc: `:::tip[Duo-Modifiers]
I map \`z_v\` (pressed and held at the same time) to \`⌘⌥⌃\`
[via Karabiner-Elements](https://github.com/evan-liu/karabiner-config/blob/fab052dc5e738c91adfae46aabeb17b38f4959fe/karabiner-config.ts#L522)
:::

:::tip[Multiple cursors]
See below for more \`⌘⌥⌃\` keybings for [Multiple cursors](#multiple-cursors)
:::`,
      keymap: [
        { key: '⌘⌥⌃j', desc: 'Add cursor below', editors },
        { key: '⌘⌥⌃k', desc: 'Add cursor above', editors },
      ],
    },
    {
      group: 'Tab switcher',
      keymap: [
        { key: '⌘⌥⌃h', desc: 'Tab switcher backward', editors },
        { key: '⌘⌥⌃l', desc: 'Tab switcher forward', editors },
      ],
    },
  ]
  hjkl.forEach((v) => {
    v.keymap.forEach((k) => {
      if (!notZed.includes(k.key)) {
        k.editors = [...k.editors, 'Zed']
      }
      if (!notVSCode.includes(k.key)) {
        k.editors = [...k.editors, 'VSCode']
      }
    })
  })
  return hjkl
}
