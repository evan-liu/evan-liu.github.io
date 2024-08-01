export function defineOtherKeys() {
  let ws = 'WebStorm'
  let vs = 'VSCode'
  let zed = 'Zed'
  let all = [ws, vs, zed]
  return [
    {
      group: 'Quick editor actions',
      keymap: [
        { key: '␣w', desc: 'Write / Save all', editors: all },
        {
          key: '␣⏎',
          desc: 'Show intention actions or quick fix',
          editors: [ws, vs],
        },
        { key: 'gs', desc: 'Select file in project view', editors: [ws, vs] },
        { key: 'gS', desc: 'Select in popup', editors: [ws] },
        { key: '⌥w', desc: 'Close other tabs', editors: all },
      ],
    },
    {
      group: 'Back to the editor',
      desc: 'To use the Vim (leader) key bindings, it is crucial to focus back on the editor.',
      keymap: [
        {
          key: '⌘⎋',
          desc: 'Close all tool windows / panels',
          editors: all,
        },
        { key: '⌃⎋', desc: 'Focus the editor', editors: [ws, vs] },
      ],
    },
    {
      group: 'Window managment',
      keymap: [
        { key: '⌃wb', desc: 'Move tab to bottom split', editors: [ws] },
        { key: '⌃wm', desc: 'Move tab to opposite split', editors: [ws] },
        { key: '⌃wr', desc: 'Move tab to right split', editors: [ws] },
        { key: '⌃wx', desc: 'Unsplit', editors: [ws] },
      ],
    },
    {
      group: 'Multiple cursors',
      keymap: [
        {
          key: '⌘⌥⌃a',
          desc: 'Add cursors to all whole occurrences',
          editors: [ws],
        },
        { key: '⌘⌥⌃b', desc: 'Add cursors to all occurrences', editors: [ws] },
        {
          key: '⌘⌥⌃e',
          desc: 'Add cursors to ends of selected lines',
          editors: [ws, vs],
        },
        {
          key: '⌘⌥⌃f',
          desc: 'Add cursor to next whole occurrence',
          editors: all,
        },
        { key: '⌘⌥⌃g', desc: 'Add cursor to next occurrence', editors: all },
        {
          key: '⌘⌥⌃p',
          desc: 'Add cursor to previous whole occurrence',
          editors: [vs],
        },
        { key: '⌘⌥⌃s', desc: 'Skip occurrence', editors: [ws] },
        { key: '⌘⌥⌃x', desc: 'Remove occurrence', editors: [ws] },
      ],
    },
  ]
}
