import { modifierKeys } from '@lib/modifier-keys.ts'
import { vimSteps } from '@lib/vim/vim-steps.ts'
import { editor, type IKeyboardEvent, KeyCode } from 'monaco-editor'
import { applyFontInfo, type Editor } from './monaco.ts'
import EditorOption = editor.EditorOption

let code = `\
let moveAround = \`
|    k    |        ↑      |
|  h   l  |  ← h j k l →  |
|    j    |      ↓        |
\``
vimSteps.registerStep('hjkl', { value: code }, activate)

function activate(editor: Editor, domElement: HTMLElement) {
  let target = createTarget(domElement, editor)
  placeTarget(target, editor, 1, 5)

  editor.onKeyDown((e) => onKeyDown(e, editor, target))
}

function createTarget(domElement: HTMLElement, editor: Editor) {
  let target = document.createElement('div')
  target.classList.add('cursor')
  target.classList.add('vim-cursor-target')
  target.style.position = 'absolute'

  let fontInfo = editor.getOption(EditorOption.fontInfo)
  applyFontInfo(target, fontInfo)
  target.style.width = fontInfo.typicalHalfwidthCharacterWidth + 'px'
  target.style.height = fontInfo.lineHeight + 'px'

  let cursorsContainer = domElement.querySelector('.cursors-layer')!
  cursorsContainer.append(target)

  return target
}

function placeTarget(
  target: HTMLElement,
  editor: Editor,
  lineNumber?: number,
  column?: number,
) {
  let textModel = editor.getModel()!

  let cursor = editor.getPosition()!
  let lineCount = textModel.getLineCount()
  while (!lineNumber || !column || cursor.equals({ lineNumber, column })) {
    lineNumber = 1 + Math.floor(Math.random() * lineCount)
    column = 1 + Math.floor(Math.random() * textModel.getLineLength(lineNumber))
  }

  target.style.top = `${editor.getTopForLineNumber(lineNumber)}px`
  target.style.left = `${editor.getOffsetForColumn(lineNumber, column)}px`
  target.innerText = textModel.getLineContent(lineNumber)[column - 1]
}

function onKeyDown(e: IKeyboardEvent, editor: Editor, target: HTMLElement) {
  e.preventDefault()
  e.stopPropagation()

  if (modifierKeys(e.browserEvent).length) return

  let position = editor.getPosition()
  let model = editor.getModel()
  if (!position || !model) return

  if (e.keyCode == KeyCode.KeyH) {
    if (position.column > 1) {
      editor.setPosition(position.delta(0, -1))
    }
  } else if (e.keyCode == KeyCode.KeyJ) {
    if (position.lineNumber < model.getLineCount()) {
      let line = position.lineNumber + 1
      let column = Math.min(model.getLineLength(line), position.column)
      editor.setPosition(position.with(line, column))
    }
  } else if (e.keyCode == KeyCode.KeyK) {
    if (position.lineNumber > 1) {
      let line = position.lineNumber - 1
      let column = Math.min(model.getLineLength(line), position.column)
      editor.setPosition(position.with(line, column))
    }
  } else if (e.keyCode == KeyCode.KeyL) {
    if (position.column < model.getLineMaxColumn(position.lineNumber) - 1) {
      editor.setPosition(position.delta(0, 1))
    }
  }
}
