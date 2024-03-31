import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Search({ originData, viewData, setViewData }) {
  const [searchItem, setSearchItem] = useState("");

  const handleInputSearch = (e) => {
    e.preventDefault();
    const newDataSet = originData.filter(
      (data) =>
        data.name.toLowerCase().includes(searchItem) !== false ||
        data.description.toLowerCase().includes(searchItem) !== false ||
        data.expertise.toLowerCase().includes(searchItem)
    );
    setViewData(newDataSet);
  };
  const inputText = (e) => {
    const item = e.target.value;
    if (item === "") {
      setViewData(originData);
    }
    setSearchItem(item);
  };
  return (
    <>
      <Form onSubmit={handleInputSearch}>
        <input
          className="mb-2"
          type="search"
          placeholder="Type to Search"
          onChange={inputText}
        ></input>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
}
