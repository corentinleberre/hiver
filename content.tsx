import type { PlasmoRender } from "plasmo"
import { createRoot } from "react-dom/client"
import { useStorage } from "@plasmohq/storage/hook"
import TwitterSvg from "react:~/assets/svg/twitter.svg"
import HiveSvg from "react:~/assets/svg/hive.svg"
import BlackTwitterSvg from "react:~/assets/svg/black.svg"

const TwitterLogo = (props: { logo: string }) => {
  switch (props.logo) {
    case "original":
      return <TwitterSvg />
    case "black":
      return <BlackTwitterSvg />
    case "hive":
      return <HiveSvg />
  }
}

const DisplaySvg = () => {
  const [logo] = useStorage("logo", "original")
  return <TwitterLogo logo={logo} />
}

// This function overrides the default `createRootContainer`
export const getRootContainer = (): Promise<Element> =>
  new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const rootContainer = document.querySelector('[aria-label="X"]')
      if (rootContainer && rootContainer.children[0]) {
        clearInterval(checkInterval)
        resolve(rootContainer.children[0])
      }
    })
  })

export const render: PlasmoRender = async ({
  createRootContainer // This creates the default root container
}) => {
  const rootContainer = await createRootContainer()
  const root = createRoot(rootContainer)
  root.render(<DisplaySvg />)
}
