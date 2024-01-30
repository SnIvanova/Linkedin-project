
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {BellFill,Briefcase,Bullseye,ChatDots,Compass,GraphUp,Grid3x3Gap,HouseAddFill,PeopleFill,PersonCheckFill,Plus,Search,X,Youtube,} from "react-bootstrap-icons";
import {Col,Container,Nav,Navbar,Row,} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/linkedin.svg";
import SearchComponent from "./Search"; 

  function NavbarL() {
    const [searchUs, setsearchUs] = useState("");
    const [userData, setUserData] = useState([]);
    const [showPerLeAziende, setShowPerLeAziende] = useState(false);
    const user = useSelector((state) => state.user);
  
    const searchList = () => {
      fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDYxNzcxNDksImV4cCI6MTcwNzM4Njc0OX0.PHLuYb8nvyemb5r429V2sTosQ-mV9fJXAWr1yyjVp3g",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching data`);
          }
          return response.json();
        })
        .then((data) => setUserData(data))
        .catch((error) => console.error(error));
    };
  
    useEffect(() => {
      searchList();
    }, [searchUs]);


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary position-sticky top-0 z-3 d-flex justify-content-center"
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand className="text-center">
          <Link to="/">
            <img src={logo} alt="" width="40" height="40" />
          </Link>
        </Navbar.Brand>
        <SearchComponent
          searchUs={searchUs}
          setsearchUs={setsearchUs}
          userData={userData}
        />
        <Nav className="m-auto">
          <Row className="align-items-center justify-content-around">
            <Col>
              {" "}
              <Link className="text-center nav-link" to={"/"}>
                <HouseAddFill className="fs-4" /> <br />
                <span
                  style={{ fontSize: "14px" }}
                  className="d-none d-xl-inline"
                >
                  Home
                </span>
              </Link>
            </Col>
            <Col>
              {" "}
              <Nav.Link className="text-center" href="#pricing ">
                <PeopleFill className="fs-4" /> <br />
                <span
                  style={{ fontSize: "14px" }}
                  className="d-none d-xl-inline"
                >
                  Rete
                </span>
              </Nav.Link>
            </Col>
            <Col>
              {" "}
              <Link className="text-center nav-link" to={"/Jobs"}>
                <Briefcase className="fs-4" /> <br />
                <span
                  style={{ fontSize: "14px" }}
                  className="d-none d-xl-inline"
                >
                  Lavoro
                </span>
              </Link>
            </Col>
            <Col>
              {" "}
              <Nav.Link className="text-center" href="#pricing ">
                <ChatDots className="fs-4" /> <br />
                <span
                  style={{ fontSize: "14px" }}
                  className="d-none d-xl-inline"
                >
                  Messaggistica
                </span>
              </Nav.Link>
            </Col>
            <Col>
              {" "}
              <Nav.Link className="text-center" href="#pricing ">
                <BellFill className="fs-4" /> <br />
                <span
                  style={{ fontSize: "14px" }}
                  className="d-none d-xl-inline"
                >
                  Notifiche
                </span>
              </Nav.Link>
            </Col>
            <Col>
              {" "}
              <Link className="text-center nav-link" to={"/profile/me"}>
                <img
                  src={user.image}
                  alt="user"
                  className="rounded-circle"
                  style={{ width: "24px", height: "24px" }}
                />
                <span
                  style={{ fontSize: "14px" }}
                  className="d-none d-xl-inline"
                >
                  Tu
                </span>
              </Link>
            </Col>
            <Col className="border-start d-none d-sm-block">
              <Nav.Link
                className="text-center"
                href="#pricing "
                onClick={() => setShowPerLeAziende(!showPerLeAziende)}
              >
                <Grid3x3Gap className="fs-4" /> <br />
                <span
                  style={{ fontSize: "14px" }}
                  className="d-none d-xl-inline text-nowrap"
                >
                  Per le aziende
                </span>
              </Nav.Link>
              {showPerLeAziende && (
                <div
                  style={{
                    position: "absolute",
                    right: "0vw",
                    width: "25em",
                    height: "90vh",
                    border: "1px black",
                    overflowY: "scroll",
                  }}
                  className={` per-le-aziende-content ${
                    showPerLeAziende ? "play-animation" : ""
                  }`}
                >
                  <div
                    className=" z-3 border"
                    style={{
                      backgroundColor: "white",
                      height: "200%",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="ms-3 mt-2" style={{ fontWeight: "400" }}>
                        Per le aziende
                      </h3>
                      <X
                        fontSize={"2rem"}
                        cursor={"pointer"}
                        onClick={() => setShowPerLeAziende(!showPerLeAziende)}
                      />
                    </div>
                    <div
                      className="m-4 mt-2 border border-3  "
                      style={{ borderRadius: "20px" }}
                    >
                      <h4 className="m-2">Scopri altri prodotti di LinkedIn</h4>
                      <hr />
                      {/* ICONE */}
                      <Container className="d-flex flex-wrap p-2 wi">
                        <Row>
                          <Col className=" col-xs-1 col-sm-6 col-md-3 ">
                            <NavLink className="m-2 text-decoration-none">
                              <Youtube
                                className=" fs-4"
                                style={{ color: "#0e76a8" }}
                              />
                              <br />
                              <p
                                className="m-0 "
                                style={{ fontSize: "0.8rem" }}
                              >
                                Learning
                              </p>
                            </NavLink>
                          </Col>
                          <Col className=" col-xs-1 col-sm-6 col-md-3 ">
                            <NavLink className="m-2 text-decoration-none">
                              <GraphUp
                                className=" fs-4"
                                style={{ color: "#0e76a8" }}
                              />
                              <br />
                              <p
                                className="m-0 "
                                style={{ fontSize: "0.8rem" }}
                              >
                                Talent
                                <br />
                                insight
                              </p>
                            </NavLink>
                          </Col>
                          <Col className=" col-xs-1 col-sm-6 col-md-3 ">
                            <NavLink className="m-2 text-decoration-none">
                              <Briefcase
                                className=" fs-4"
                                style={{ color: "#0e76a8" }}
                              />
                              <br />
                              <p
                                className="m-0 "
                                style={{ fontSize: "0.8rem" }}
                              >
                                Pubblica <br /> un' offerta di <br />
                                lavoro
                              </p>
                            </NavLink>
                          </Col>
                          <Col className=" col-xs-1 col-sm-6 col-md-3 ">
                            <NavLink className="m-2 text-decoration-none">
                              <Bullseye
                                className=" fs-4"
                                style={{ color: "#0e76a8" }}
                              />{" "}
                              <br />
                              <p
                                className="m-0 "
                                style={{ fontSize: "0.8rem" }}
                              >
                                Pubblicizza
                              </p>
                            </NavLink>
                          </Col>
                          <Col className=" col-xs-1 col-sm-6 col-md-3 ">
                            <NavLink className="m-2 text-decoration-none">
                              <Compass
                                className=" fs-4"
                                style={{ color: "#0e76a8" }}
                              />{" "}
                              <br />
                              <p
                                className="m-0 "
                                style={{ fontSize: "0.8rem" }}
                              >
                                Trova lead
                              </p>
                            </NavLink>
                          </Col>
                          <Col className=" col-xs-1 col-sm-6 col-md-3 ">
                            <NavLink className="m-2 text-decoration-none">
                              <PeopleFill
                                className=" fs-4"
                                style={{ color: "#0e76a8" }}
                              />{" "}
                              <br />
                              <p
                                className="m-0 "
                                style={{ fontSize: "0.8rem" }}
                              >
                                Gruppi
                              </p>
                            </NavLink>
                          </Col>
                          <Col className=" col-xs-1 col-sm-6 col-md-3 ">
                            <NavLink className="m-2 text-decoration-none">
                              <PersonCheckFill
                                className=" fs-4"
                                style={{ color: "#0e76a8" }}
                              />{" "}
                              <br />
                              <p
                                className="m-0 "
                                style={{ fontSize: "0.8rem" }}
                              >
                                Marketplace <br />
                                dei servizi
                              </p>
                            </NavLink>
                          </Col>
                        </Row>
                      </Container>
                      {/* ICONE SU */}
                    </div>
                    <div
                      className="m-4 border border-3  "
                      style={{ borderRadius: "20px" }}
                    >
                      <h4 className="m-2">Scopri altro per il business</h4>
                      <hr />
                      <div className="py-3">
                        <NavLink
                          style={{ color: "black" }}
                          className="text-start text-decoration-none"
                        >
                          <h5 className="mx-4">Assumi su linkedIn</h5>
                          <p className="mb-3 ms-4">Trova, attrai e assumi</p>
                        </NavLink>
                        <NavLink
                          style={{ color: "black" }}
                          className="text-start   text-decoration-none"
                        >
                          <h5 className="mx-4">Vendi con LinkedIn</h5>
                          <p className="mb-3 ms-4">
                            Costruisci relazioni con i buyer
                          </p>
                        </NavLink>
                        <NavLink
                          style={{ color: "black" }}
                          className="text-start   text-decoration-none"
                        >
                          <h5 className="mx-4">Offerta di lavoro gratuita</h5>
                          <p className="mb-3 ms-4">
                            Trova candidati di qualità
                          </p>
                        </NavLink>
                        <NavLink
                          style={{ color: "black" }}
                          className="text-start   text-decoration-none"
                        >
                          <h5 className="mx-4">Fai pubblicità su LinkedIn</h5>
                          <p className="mb-3 ms-4">
                            Acquisisci clienti e fai crescere la tua azienda
                          </p>
                        </NavLink>
                        <NavLink
                          style={{ color: "black" }}
                          className="text-start   text-decoration-none"
                        >
                          <h5 className="mx-4">Impara con LinkedIn</h5>
                          <p className="mb-3 ms-4">
                            Corsi per fornare i tuoi dipendenti
                          </p>
                        </NavLink>
                        <NavLink
                          style={{ color: "black" }}
                          className="text-start   text-decoration-none"
                        >
                          <h5 className="mx-4">Centro amministrazione</h5>
                          <p className="mb-3 ms-4">
                            Gestisci i dettagli di fatturazione e account
                          </p>
                        </NavLink>
                        <hr />
                        <NavLink
                          style={{ color: "black" }}
                          className="text-start   text-decoration-none "
                        >
                          <h5 className=" ms-4 d-flex  align-items-center">
                            Crea una pagina aziendale
                            <Plus className="ms-2" />{" "}
                          </h5>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col className="d-none d-xl-block">
              <Nav.Link className="text-center" href="#pricing ">
                <span
                  style={{ fontSize: " 14px" }}
                  className="d-none d-md-inline text-nowrap text-decoration-underline"
                >
                  Prova premium gratis
                </span>
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Container>
    </Navbar>
  )
} 

export default NavbarL