import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./ItemFilter.css";
import { useState } from "react";
export default function ItemFilter({
  originalData,
  viewData,
  setViewData,
  consultation_fee,
}) {
  const [radioSet, setRadioSet] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const changeView = (changedArr) => {
    if (changedArr.length === 0) {
      setViewData(originalData);
    } else {
      const newViewData = originalData.filter((data) =>
        data.expertise.some((x) => changedArr.includes(x))
      );
      setViewData(newViewData);
    }
    setRadioSet(changedArr);
  };
  const handleradioSet = (e) => {
    const change = e.target.value;
    if (radioSet.includes(change)) {
      changeView(radioSet.filter((data) => data !== change));
    } else {
      changeView([...radioSet, change]);
    }
  };
  const handleMinMax = (e) => {
    const newViewData = originalData.filter((data) => {
      return data.consultation_fee >= min && data.consultation_fee <= max;
    });
    setViewData(newViewData);
  };
  return (
    <>
      <div className="d-none d-lg-block">
        <h3 id="headings">Expertise:</h3>
        <Form className="form-container" onChange={handleradioSet}>
          <input type="checkbox" value={"Java"} />{" "}
          <label className="ltext">Java</label>
          <br />
          <input type="checkbox" value={"JavaScript"} />{" "}
          <label className="ltext">JavaScript</label>
          <br />
          <input type="checkbox" value={"Boot"} />{" "}
          <label className="ltext">Spring Boot</label>
          <br />
          <input type="checkbox" value={"Cpp"} />{" "}
          <label className="ltext">C++</label>
          <br />
          <input type="checkbox" value={"Rust"} />{" "}
          <label className="ltext">Rust</label>
          <br />
          <input type="checkbox" value={"Python"} />{" "}
          <label className="ltext">Python</label>
        </Form>
        <h3 id="headings">Price:</h3>
        <div style={{ marginLeft: "10px" }}>
          <Form onClick={handleMinMax}>
            <input
              type="number"
              style={{ width: "90px" }}
              placeholder="Min"
              onChange={(e) => {
                setMin(e.target.value);
              }}
            />{" "}
            -{" "}
            <input
              type="number"
              style={{ width: "90px" }}
              placeholder="Max"
              onChange={(e) => {
                setMax(e.target.value);
              }}
            />{" "}
            <br></br>
            <Button variant="primary">Apply</Button>
          </Form>
        </div>
        <div style={{ height: "300px" }}>
          {/* <Form>
          <FormLabel>Search By Rating</FormLabel>

          <select id="ratings">
            <option value="5">★★★★★</option>
            <option value="4">★★★★</option>
            <option value="3">★★★</option>
            <option value="2">★★</option>
            <option value="1">★</option>
          </select>
        </Form> */}
        </div>
      </div>
    </>
  );
}
