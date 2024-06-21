import { useColorMode } from '@docusaurus/theme-common'
import type { WrapperProps } from '@docusaurus/types'
import Giscus from '@giscus/react'
import Footer from '@theme-original/DocItem/Footer'
import type FooterType from '@theme/DocItem/Footer'

export default function FooterWrapper(props: WrapperProps<typeof FooterType>) {
  let { colorMode } = useColorMode()

  return (
    <>
      <Footer {...props} />

      <div className="h-14" />
      <Giscus
        theme={colorMode}
        id="giscus"
        repo="evan-liu/evan-liu.github.io"
        repoId="R_kgDOMD_nTg"
        category="giscus"
        categoryId="DIC_kwDOMD_nTs4CgPLE"
        mapping="pathname"
        reactionsEnabled="1"
        inputPosition="bottom"
        lang="en"
        loading="lazy"
      />
    </>
  )
}
