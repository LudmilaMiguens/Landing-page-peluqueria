import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Carrusel from "./components/Form/carrusel"
function App() {
  return (
    <div>
      <Form />
      <Carrusel />
    </div>
  );
}

export default App;
