import "./App.css";
import Form from "./components/Form/Form";
import { Nav } from "./components/nav/Nav";
import { Testimonios } from "./components/Testimonios/Testimonios";
import Carrusel from "./components/Carrusel/Carrusel";

function App() {
  return (
    <div>
      <Nav />
      <Testimonios />
      <Form />
      <Carrusel />
    </div>
  );
}
export default App;
