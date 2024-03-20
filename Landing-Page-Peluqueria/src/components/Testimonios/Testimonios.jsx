import img1 from "./img/1.jpeg";
import img2 from "./img/2.jpeg";
import img3 from "./img/3.jpeg";
import img4 from "./img/4.jpeg";
import img5 from "./img/5.jpeg";
import img6 from "./img/6.jpeg";
import "./testimonio.css";

const Testimonios = () => {
  return (
    <div className="testimonios">
      <div className="testimonios-contenedor">
        <div className="card">
          <img src={img1} className="card-img-top" alt="Corte de pelo"></img>
          <div className="card-body">
            <p className="card-text">
              "Después de una mala experiencia en otra peluquería, estaba un
              poco nervioso al probar Cortes Urbanos, pero me sorprendieron
              gratamente. El personal era muy atento y el ambiente era
              relajante. Mi estilista fue muy detallista y tomó el tiempo
              necesario para entender lo que quería. Salí de allí con un corte
              que me hizo sentir renovado y seguro. ¡Definitivamente mi nueva
              peluquería de confianza!"
            </p>
          </div>
        </div>
      </div>
      <div className="testimonios-contenedor">
        <div className="card">
          <img src={img2} className="card-img-top" alt="Corte de pelo"></img>
          <div className="card-body">
            <p className="card-text">
              "¡Increíble experiencia en Cortes Urbanos! Desde que entré por la
              puerta, me sentí bienvenido y cómodo. El personal fue amable y
              profesional, y mi estilista entendió exactamente lo que quería.
              Salí con un corte impecable y me sentí renovado. ¡Definitivamente
              volveré!"
            </p>
          </div>
        </div>
      </div>
      <div className="testimonios-contenedor">
        <div className="card">
          <img src={img3} className="card-img-top" alt="Corte de pelo"></img>
          <div className="card-body">
            <p className="card-text">
              "¡La mejor decisión que he tomado fue ir a Cortes Urbanos para un
              cambio de imagen! Había estado buscando un lugar confiable para
              hacerme un corte moderno y fresco, y este lugar cumplió todas mis
              expectativas. El ambiente era genial y mi estilista tenía un gran
              ojo para el estilo. ¡Me encantó el resultado y recibí muchos
              elogios después!"
            </p>
          </div>
        </div>
      </div>
      <div className="testimonios-contenedor">
        <div className="card">
          <img src={img4} className="card-img-top" alt="Corte de pelo"></img>
          <div className="card-body">
            <p className="card-text">
              "¡No puedo decir suficientes cosas buenas sobre Cortes Urbanos!
              Fui recomendado por un amigo y definitivamente no me decepcionó.
              El ambiente era moderno y acogedor, y mi estilista fue muy hábil.
              Me encantó cómo tomó el tiempo para asesorarme sobre el mejor
              estilo para mi tipo de cabello. ¡Salí de allí sintiéndome como una
              nueva persona!"
            </p>
          </div>
        </div>
      </div>
      <div className="testimonios-contenedor">
        <div className="card">
          <img src={img5} className="card-img-top" alt="Corte de pelo"></img>
          <div className="card-body">
            <p className="card-text">
              "¡Qué gran experiencia en Cortes Urbanos! Programé una cita de
              último minuto y me alegro de haberlo hecho. El personal fue muy
              flexible y pudo acomodarme. Mi estilista fue muy talentoso y me
              dio un corte que superó mis expectativas. ¡Definitivamente
              regresaré para mi próximo corte!".
            </p>
          </div>
        </div>
      </div>
      <div className="testimonios-contenedor">
        <div className="card">
          <img src={img6} className="card-img-top" alt="Corte de pelo"></img>
          <div className="card-body">
            <p className="card-text">
              "Cortes Urbanos es simplemente excepcional. Desde el momento en
              que entré, me trataron con cortesía y profesionalismo. Mi
              estilista fue increíblemente talentoso y pudo crear exactamente el
              estilo que estaba buscando. Además, el ambiente del lugar era muy
              relajante. ¡Sin duda lo recomendaré a todos mis amigos!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
