import "./Form.css";
import { useState } from "react";

export const Form = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();

    const clientData = {
      name,
      phone,
      email,
    };

    onConfirm(clientData);
  };

  return (
    <div>
      <form className="form" onSubmit={handleConfirm}>
        <label>
          Nombre:
          <input
            className="name"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Telefono:
          <input
            className="phone"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label>
          Email:
          <input
            className="email"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <button>Confirmar</button>
      </form>
    </div>
  );
};

export default Form;
