import React from "react";
import { Button } from "react-bootstrap";

const SideDiv = () => {
  return (
    <div>
      <h2>Expertise </h2>
      <input type="checkbox" value={"one"} /> <label>Jaa</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>JavaScript</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>Spring Boot</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>C++</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>Rust</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>Python</label>
      <br />
      <br></br>
      <h2>Price</h2>
      <input type="number" style={{ width: "90px" }} placeholder="Min" /> -{" "}
      <input type="number" style={{ width: "90px" }} placeholder="Max" />{" "}
      <Button variant="primary">Apply</Button>
      <br></br>
      <br></br>
      <h2>Search By Rating</h2>
      <h4>★★★★★</h4>
    </div>
  );
};

export default SideDiv;
