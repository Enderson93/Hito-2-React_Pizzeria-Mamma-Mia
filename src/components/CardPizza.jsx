import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <Card className="card" style={{ width: "25%" }}>
      <Card.Img variant="top p-2" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{ingredients}</Card.Text>
        <hr />
        <Card.Title>Precio: ${price.toLocaleString("es-CL")}</Card.Title>
        <hr />
        <Button variant="outline-dark me-4">Ver más</Button>
        <Button variant="dark">Añadir</Button>
      </Card.Body>
    </Card>
  );
}
