import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [errorNumeroCaracteres, setErrorNumeroCaracteres] = useState(false);
  const [exito, setExito] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (correo === "" || contraseña === "") {
      setError(true);
    } else {
      setError(false);
    }
    if (contraseña.length < 6) {
      setErrorNumeroCaracteres(true);
    } else {
      setErrorNumeroCaracteres(false);
    }
    if (correo !== "" && contraseña !== "" && contraseña.length >= 6) {
      setExito(true);
    }

    setCorreo("");
    setContraseña("");
  };
  return (
    <div className="login">
        <hr />
      <h2 className="fw-bold mb-4">Login</h2>
      <Form onSubmit={validarDatos}>
        {exito ? (
          <p className="exito">¡Felicidades! Ahora a disfrutar de la mejor pizza</p>
        ) : null}
        {error ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}
        {errorNumeroCaracteres ? (
          <p className="error">
            La contraseña debe tener al menos 6 caracteres
          </p>
        ) : null}
        <Form.Group className="mb-3 fw-semibold" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          />
        </Form.Group>

        <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </Form.Group>
        <p className="text-muted ">
          La contraseña debe tener al menos 6 caracteres.
        </p>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <p className="mt-3">Datos ingresados (solo por test)</p>
      {correo} - {contraseña}
    </div>
  );
}

export default Login;
