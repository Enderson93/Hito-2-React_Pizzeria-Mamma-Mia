import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState(false);
  const [errorConfirmacion, setErrorConfirmacion] = useState(false);
  const [errorNumeroCaracteres, setErrorNumeroCaracteres] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (correo === "" || contraseña === "" || confirmarContraseña === "") {
      setError(true);
    } else {
      setError(false);
    }
    if (contraseña !== confirmarContraseña) {
      setErrorConfirmacion(true);
    } else {
      setErrorConfirmacion(false);
    }
    if (contraseña.length < 6) {
      setErrorNumeroCaracteres(true);
    } else {
      setErrorNumeroCaracteres(false);
    }

    setCorreo("");
    setContraseña("");
    setConfirmarContraseña("");
  };
  return (
    <div className="register">
      <h2 className="fw-bold mb-4">Formulario de Registro</h2>
      <Form onSubmit={validarDatos}>
        {error ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}
        {errorConfirmacion ? (
          <p className="error">Las contraseñas no coinciden</p>
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
        <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmar Contraseña"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </Form.Group>
        <p className="text-muted">
          Las contraseñas deben coincidir.
        </p>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <p className="mt-3">Datos ingresados (solo por test)</p>
      {correo} - {contraseña} - {confirmarContraseña}
    </div>
  );
}

export default Register;
