import React from "react";
import { Button } from "react-bootstrap";

const SideDiv = () => {
  return (
    <div>
      <h2>Category</h2>
      <hr />
      <h3>Compact</h3>
      <h3>Compact</h3>
      <h3>Compact</h3>
      <h3>Compact</h3>
      <h3>Compact</h3>
      <h3>Compact</h3>
      <hr />
      <h2>Brand</h2>
      <input type="checkbox" value={"one"} /> <label>okay</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>okay</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>okay</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>okay</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>okay</label>
      <br />
      <input type="checkbox" value={"one"} /> <label>okay</label>
      <br />
      <br></br>
      <h2>Price</h2>
      <input type="number" style={{width:'90px'}} placeholder="Min" /> -{" "}
      <input type="number" style={{width:'90px'}} placeholder="Max" />{" "}
      <Button variant="primary">Apply</Button>
      <br></br>
      <br></br>
      <h2>Search By Rating</h2>
      <h4>five or above</h4>
      <h4>four or above</h4>
      <h4>three or above</h4>
      <h4>two or above</h4>
      <h4>one or above</h4>
    </div>
  );
};

export default SideDiv;
