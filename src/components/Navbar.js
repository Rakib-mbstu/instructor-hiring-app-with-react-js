import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import Search from "./Search";
import logo from "./professor.png";

function Navbars({ originData, viewData, setViewData }) {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-dark sticky-top"
      style={{ backgroundColor: "#382B47",height:"70px" }}
    >
      <Container fluid>
        <Navbar.Brand href="#" id="heading">
          <img src={logo} alt="LOGO" className="logo" style={{height:"50px"}}/>{"  "}
          Find an Instructor
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Search
            originData={originData}
            viewData={viewData}
            setViewData={setViewData}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
