import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import Search from "./Search";

function Navbars({originData,viewData,setViewData}) {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-dark"
      style={{ backgroundColor: "#382B47" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">Find an Instructor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Search originData={originData} viewData={viewData} setViewData={setViewData} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
