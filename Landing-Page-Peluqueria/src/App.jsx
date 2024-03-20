import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Nav from "./components/nav/Nav";
import Testimonios from "./components/Testimonios/Testimonios";
import Carrusel from "./components/Carrusel/Carrusel";
import BackGround from "./components/bck-pic/Background";
import BackgroundImg from "./images/barberia.jpg";

function App() {
  return (
    <div>
      <Nav />

      {/* <BackGround img={BackgroundImg} /> */}
      <Carrusel />

      <Form />

      <Testimonios />
    </div>
  );
}

export default App;
