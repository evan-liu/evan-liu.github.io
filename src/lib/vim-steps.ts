import * as monaco from 'monaco-editor'

export type VimStep = 'hjkl'

class VimSteps {
  private domElement?: HTMLElement
  private step?: VimStep
  private steps = {} as Record<VimStep, () => void>

  public initEditor(step: VimStep, domElement: HTMLElement) {
    this.step = step
    this.domElement = domElement
    this.steps[step]?.()
  }

  public registerStep(
    step: VimStep,
    options?: monaco.editor.IStandaloneEditorConstructionOptions,
    activate?: (editor: monaco.editor.IStandaloneCodeEditor) => void,
  ) {
    this.steps[step] = () => {
      let darkTheme = document.documentElement.dataset.theme == 'dark'
      let editor = monaco.editor.create(this.domElement!, {
        language: 'typescript',
        theme: darkTheme ? 'vs-dark' : 'vs',
        cursorStyle: 'block',
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        ...options,
      })
      editor.focus()
      activate?.(editor)
    }

    if (this.domElement && this.step == step) {
      this.steps[step]()
    }
  }
}

export let vimSteps = new VimSteps()
