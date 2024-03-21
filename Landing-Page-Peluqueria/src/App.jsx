import "./App.css";
import Form from "./components/Form/Form";

import { Nav } from "./components/nav/Nav";
import { Testimonios } from "./components/Testimonios/Testimonios";

import Carrusel from "./components/Carrusel/Carrusel";
import BackGround from "./components/bck-pic/Background";
import BackgroundImg from "./images/barberia.jpg";
import { Nosotros } from "./components/Nosotros/Nosotros";


function App() {
  return (
    <div>
      <Nav />
      <Testimonios />

      {/* <BackGround img={BackgroundImg} /> */}

      <Form />
      
      <Nosotros />

      <Testimonios />
    </div>
  );
}
export default App;
