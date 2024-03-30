import { Button, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./ItemFilter.css";
export default function ItemFilter({
  originalData,
  viewData,
  setViewData,
  filterBase,
}) {
  return (
    <>
      <div>
        <h3>Expertise:</h3>
        <Form>
          <input type="checkbox" value={"java"} />{" "}
          <label className="ltext">Java</label>
          <br />
          <input type="checkbox" value={"JavaScript"} />{" "}
          <label className="ltext">JavaScript</label>
          <br />
          <input type="checkbox" value={"boot"} />{" "}
          <label className="ltext">Spring Boot</label>
          <br />
          <input type="checkbox" value={"C++"} />{" "}
          <label className="ltext">C++</label>
          <br />
          <input type="checkbox" value={"Rust"} />{" "}
          <label className="ltext">Rust</label>
          <br />
          <input type="checkbox" value={"Python"} />{" "}
          <label className="ltext">Python</label>
        </Form>
      </div>
      <div>
        <h2>Price</h2>
        <input
          type="number"
          style={{ width: "90px" }}
          placeholder="Min"
        /> - <input type="number" style={{ width: "90px" }} placeholder="Max" />{" "}
        <Button variant="primary">Apply</Button>
      </div>
      <div>
        <Form>
          <FormLabel>Search By Rating</FormLabel>

          <select id="ratings">
            <option value="5">★★★★★</option>
            <option value="4">★★★★</option>
            <option value="3">★★★</option>
            <option value="2">★★</option>
            <option value="1">★</option>
          </select>
        </Form>
      </div>
    </>
  );
}
