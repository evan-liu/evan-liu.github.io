import * as monaco from 'monaco-editor'

export type Editor = monaco.editor.IStandaloneCodeEditor

export function applyFontInfo(
  domNode: HTMLElement,
  fontInfo: monaco.editor.BareFontInfo,
): void {
  domNode.style.fontFamily = fontInfo.fontFamily
  domNode.style.fontWeight = fontInfo.fontWeight
  domNode.style.fontSize = fontInfo.fontSize + 'px'
  domNode.style.fontFeatureSettings = fontInfo.fontFeatureSettings
  domNode.style.fontVariationSettings = fontInfo.fontVariationSettings
  domNode.style.lineHeight = fontInfo.lineHeight + 'px'
  domNode.style.letterSpacing = fontInfo.letterSpacing + 'px'
}
