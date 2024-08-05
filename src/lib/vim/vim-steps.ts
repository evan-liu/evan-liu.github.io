import * as monaco from 'monaco-editor'
import type { Editor } from '@lib/vim/monaco.ts'

export type VimStep = 'hjkl'

class VimSteps {
  private domElement?: HTMLElement
  private step?: VimStep
  private steps = {} as Record<VimStep, (domElement: HTMLElement) => void>

  public initEditor(step: VimStep, domElement: HTMLElement) {
    this.step = step
    this.domElement = domElement
    this.steps[step]?.(domElement)
  }

  public registerStep(
    step: VimStep,
    options?: monaco.editor.IStandaloneEditorConstructionOptions,
    activate?: (editor: Editor, domElement: HTMLElement) => void,
  ) {
    this.steps[step] = (domElement: HTMLElement) => {
      let darkTheme = document.documentElement.dataset.theme == 'dark'
      let editor = monaco.editor.create(domElement, {
        language: 'typescript',
        theme: darkTheme ? 'vs-dark' : 'vs',
        cursorStyle: 'block',
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        ...options,
      })
      editor.focus()
      activate?.(editor, domElement)
    }

    if (this.domElement && this.step == step) {
      this.steps[step](this.domElement)
    }
  }
}

export let vimSteps = new VimSteps()
