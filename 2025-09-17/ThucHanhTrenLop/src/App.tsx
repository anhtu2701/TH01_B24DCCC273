import BaseWrapped from "./components/common/BaseWrapped"
import BaseDivider from "./components/common/BaseDivider"
import Bai_1 from "./components/Bai_1"
import Bai_2 from "./components/Bai_2"
import Bai_3 from "./components/Bai_3"
import Bai_4 from "./components/Bai_4"
import Bai_5 from "./components/Bai_5"
import './App.css'

const App = () => {
  return (
    <BaseWrapped>
      <Bai_1 />
      <BaseDivider />
      <Bai_2 />
      <BaseDivider />
      <Bai_3 />
      <BaseDivider />
      <Bai_4 />
      <BaseDivider />
      <Bai_5 />
    </BaseWrapped>
  )
}

export default App
