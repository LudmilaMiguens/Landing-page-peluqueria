import "./App.css";
import Form from "./components/Form/Form";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Testimonios from "./components/Testimonios/Testimonios";

import Carrusel from "./components/Carrusel/Carrusel";
import BackGround from "./components/bck-pic/Background";
import BackgroundImg from "./images/barberia.jpg";
import { Nosotros } from "./components/Nosotros/Nosotros";

function App() {
  return (
    <div className="bck">
      <Nav />
      <Nosotros />

      {/* <BackGround img={BackgroundImg} /> */}
      <div className="container">
        <div className="row">
          <div className=".col-9 w-75">
            <Carrusel />
          </div>
          <div className=".col-3 w-25 position-relative">
            <div className="position-absolute top-50 start-100 translate-middle">
              <Form />
            </div>
          </div>
        </div>
      </div>

      <Testimonios />
      <Footer />
    </div>
  );
}
export default App;
