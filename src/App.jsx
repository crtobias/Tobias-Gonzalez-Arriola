import Navbar from "./components/Navbar";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import { Element } from 'react-scroll';

export default function App() {
  return (
    <div className="font-prop text-gris bg-white  ">
      <Navbar></Navbar>


      <Element name="screen1">
        <Screen1 />
      </Element>
      <Element name="screen2">
        <Screen2 />
      </Element>
      <Element name="screen3">
        <Screen3 />
      </Element>
      <Element name="screen4">
        <Screen4 />
      </Element>

    </div>
  )
}

