import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Search({ originData ,viewData, setViewData}) {
  const [searchItem, setSearchItem] = useState("");
  useEffect(()=>{
    setViewData(originData);
  })
  const handleInputSearch = (e) => {
    e.preventDefault();
    console.log(searchItem);
     const newDataSet = viewData.filter(
        (data) =>
        data.first_name.toLowerCase().includes(searchItem) !==false ||
        data.description.toLowerCase().includes(searchItem) !==false||
        data.expertise.toLowerCase().includes(searchItem)
     );
     setViewData(newDataSet);
  };
  return (
    <>
      <Form onSubmit={handleInputSearch}>
        <input
          className="mb-2"
          type="search"
          placeholder="Type to Search"
          onChange={(e)=>setSearchItem(e.target.value)}
        ></input>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
}
