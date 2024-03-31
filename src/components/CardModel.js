// CardModel.js
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import InputModal from "./InputModal";
import "./CardModel.css";

export default function CardModel({ name, description,additional_description, expertise, consultation_fee }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card-div"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card style={{ width: "18rem", height: "500px" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src="/img/businessman-black-suit-holding-his-tasklist-makes-thumb-up.jpg" 
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className={`card-hover-text ${isHovered ? "" : "hidden"}`}>
           { additional_description}
          </div>
        </Card.Body>
        <div className={`list-group-flush ${isHovered ? "hidden" : ""}`}>
          <ListGroup>
            {expertise &&
              expertise.map((sub, i) => (
                <ListGroup.Item key={i}>{sub}</ListGroup.Item>
              ))}
          </ListGroup>
        </div>
        <Card.Footer>
          <div>
            Charge: ${consultation_fee}
          </div>
          <InputModal name={name}/>
        </Card.Footer>
      </Card>
    </div>
  );
}
