import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form/Form";

import { Nav } from "./components/nav/Nav";
import { Testimonios } from "./components/Testimonios/Testimonios";

import Carrusel from "./components/Carrusel/Carrusel";
import BackGround from "./components/bck-pic/Background";
import BackgroundImg from "./images/barberia.jpg";
import foto1 from "./images/foto1.jpg";
import foto2 from "./images/foto2.jpg";
import foto3 from "./images/foto3.jpg";


function App() {
  return (
    <div>

      <Nav />
      <Testimonios />

      {/* <BackGround img={BackgroundImg} /> */}

      <Form />
      <Carrusel />
    </div>
  );
}

export default App;
