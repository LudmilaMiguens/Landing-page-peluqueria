import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form/Form";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <div>
      <Nav/>
      <Form />
    </div>
  );
}

export default App;
