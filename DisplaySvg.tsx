import type { FunctionComponent } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import TwitterSvg from "react:~/assets/svg/twitter.svg"
import HiveSvg from "react:~/assets/svg/hive.svg"
import BlackTwitterSvg from "react:~/assets/svg/black.svg"
import type { LogoType } from "~types"

// Simple record containing the differents logo
const logoTypes: Record<LogoType, FunctionComponent> = {
  original: TwitterSvg,
  black: BlackTwitterSvg,
  hive: HiveSvg
}

// The component that will be mounted on x.com
export const DisplaySvg = () => {
  const [logo] = useStorage<LogoType>("logo", "original")
  const LogoSvg = logoTypes[logo]
  return <LogoSvg />
}
