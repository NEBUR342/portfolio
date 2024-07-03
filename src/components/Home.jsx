import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import jsonData from "./json/data.json";
import imagen from "./images/fotoPerfil.jpeg";
import About from "./About";
import "../App.css";

const Home = () => {
  return (
    <div>
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade">
          <div className="row py-3 text-center text-white align-items-center justify-content-center">
            <div className="col-12 col-md-6 my-auto">
              <h1>{jsonData.nombre}</h1>
              <h3>{jsonData.profesion}</h3>
              <p className="lead">{jsonData.descripcionPersonal}</p>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={imagen}
                alt="Foto perfil"
                className="rounded-circle img-thumbnail"
                style={{ maxWidth: "60%", height: "auto" }}
              />
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <About />
    </div>
  );
};

export default Home;
