import puppeteer from 'puppeteer'
import { visit } from 'unist-util-visit'

let mermaidUrl = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js'

/** @type {import('unified').Plugin} */
export default function mermaidToSvg() {
  return async (tree) => {
    let browser = await puppeteer.launch({ headless: 'new' })

    let page = await browser.newPage()
    await page.goto('about:blank')
    await page.addScriptTag({ url: mermaidUrl })

    await page.evaluate(() => {
      window.renderMermaid = async function (theme, code, id) {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: theme == 'light' ? 'default' : 'dark',
        })
        let { svg } = await window.mermaid.render(`m${id}${theme}`, code)
        return `<svg class="${theme}-only" ${svg.slice(4)}`
      }
    })

    let renders = []
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang != 'mermaid') return
      renders.push(
        page
          .evaluate(renderMermaid, node.value)
          .then((value) => (parent.children[index] = { type: 'html', value })),
      )
    })
    await Promise.all(renders)

    await browser.close()
  }
}

async function renderMermaid(code) {
  let id = (window.mermaidId = (window.mermaidId || 0) + 1)
  return `\
<div class="mermaid">
  ${await window.renderMermaid('light', code, id)}
  ${await window.renderMermaid('dark', code, id)}
</div>`
}
