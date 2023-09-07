import type { PlasmoRender } from "plasmo"
import { createRoot } from "react-dom/client"
import { DisplaySvg } from "~DisplaySvg"

// This function overrides the default `createRootContainer` passed to the render function
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

// This creates the default root container
export const render: PlasmoRender = async ({ createRootContainer }) => {
  const rootContainer = await createRootContainer()
  const root = createRoot(rootContainer)
  root.render(<DisplaySvg />)
}
