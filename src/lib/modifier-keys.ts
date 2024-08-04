export type ModifierKey = keyof Pick<
  KeyboardEvent,
  'metaKey' | 'ctrlKey' | 'altKey' | 'shiftKey'
>

let allModifierKeys: ModifierKey[] = [
  'metaKey',
  'ctrlKey',
  'altKey',
  'shiftKey',
]

export function modifierKeys(event: KeyboardEvent) {
  return allModifierKeys.filter((x) => event[x])
}
