import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form/Form";
import BackGround from "./components/bck-pic/Background";
import BackgroundImg from "./images/barberia.jpg";

function App() {
  return (
    <div>
      {/* <BackGround img={BackgroundImg} /> */}
      <Form />
    </div>
  );
}

export default App;
