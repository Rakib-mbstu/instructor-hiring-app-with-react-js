// CardModel.js

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Cards from "../Cards";
import "./CardModel.css";
import { ListGroupItem } from "react-bootstrap";

export default function CardModel({ name, description, expertise }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card-div"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card style={{ width: "18rem",height:"500px" }}>
        <Card.Img
          className="img-fluid round"
          variant="top"
          src="https://picsum.photos/300/200"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className={`card-hover-text ${isHovered ? "" : "hidden"}`}>
            some additional information that would not display until hovered!!!
          </div>
        </Card.Body>
         <div className={`list-group-flush ${isHovered ? "hidden" : ""}`}>
          <ListGroup>
            {expertise &&
              expertise.map((sub) => 
                <ListGroupItem>{sub}</ListGroupItem>
              )}
          </ListGroup>
        </div>
       <Card.Footer>
        <Cards/>
       </Card.Footer>
      </Card>
    </div>
  );
}
