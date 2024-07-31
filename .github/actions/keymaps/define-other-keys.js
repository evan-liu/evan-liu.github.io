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
        { key: '⌃wr', desc: 'Move tab to right split', editors: [ws] },
        { key: '⌃wb', desc: 'Move tab to bottom split', editors: [ws] },
        { key: '⌃wm', desc: 'Move tab to opposite split', editors: [ws] },
        { key: '⌃wx', desc: 'Unsplit', editors: [ws] },
      ],
    },
    {
      group: 'Multiple cursors',
      keymap: [
        { key: '⌘⌥⌃f', desc: 'Add cursor to next occurrence', editors: all },
        { key: '⌘⌥⌃s', desc: 'Skip occurrence', editors: [ws] },
        { key: '⌘⌥⌃x', desc: 'Remove occurrence', editors: [ws] },
        { key: '⌘⌥⌃a', desc: 'Add cursor to all occurrences', editors: [ws] },
      ],
    },
  ]
}
