import { useStorage } from "@plasmohq/storage/hook"
import "./popup.css"
import TwitterSvg from "react:~/assets/svg/twitter.svg"
import HiveSvg from "react:~/assets/svg/hive.svg"
import BlackTwitterSvg from "react:~/assets/svg/black.svg"

const IndexPopup = () => {
  const [logo, setLogo] = useStorage("logo", "original")

  const onOptionChange = (e) => setLogo(e.target.value)

  return (
    <div className="radio-container">
      <label
        className={`radio-button ${logo === "original" ? "selected" : ""}`}>
        <input
          type="radio"
          value="original"
          id="original"
          checked={logo === "original"}
          onChange={onOptionChange}
        />
        <TwitterSvg />
      </label>
      <label className={`radio-button ${logo === "black" ? "selected" : ""}`}>
        <input
          type="radio"
          value="black"
          id="black"
          checked={logo === "black"}
          onChange={onOptionChange}
        />
        <BlackTwitterSvg />
      </label>
      <label className={`radio-button ${logo === "hive" ? "selected" : ""}`}>
        <input
          type="radio"
          value="hive"
          id="hive"
          checked={logo === "hive"}
          onChange={onOptionChange}
        />
        <HiveSvg />
      </label>
    </div>
  )
}

export default IndexPopup
