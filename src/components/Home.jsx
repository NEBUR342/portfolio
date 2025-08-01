import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import jsonData from "./json/data.json";
import imagen from "./images/fotoPerfil.jpeg";
import About from "./About";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Home = () => {
  return (
    <Container fluid>
      <TransitionGroup className="full-height-container">
        <CSSTransition timeout={500} classNames="fade">
          <Row className="full-height-container text-center text-white align-items-center justify-content-center">
            <Col>
              <h1 className="mb-3">{jsonData.nombre}</h1>
              {jsonData.profesiones.map((prof) => (
                <h3 key={prof.id}>{prof.nombre}</h3>
              ))}
              <p className="lead">{jsonData.descripcionPersonal}</p>
            </Col>
            <Col md={6} className="margen-bottom">
              <img
                src={imagen}
                alt="Foto perfil"
                className="rounded-circle img-thumbnail"
                style={{ maxWidth: "60%", height: "auto" }}
              />
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
      <About />
    </Container>
  );
};

export default Home;
