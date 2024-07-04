import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBriefcase,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import jsonData from "./json/data.json";
import "../App.css";

const About = () => {
  const [data, setData] = useState({
    experiencias: [],
    voluntariados: [],
    estudios: [],
    idiomas: [],
    lenguajes: [],
    frameworks: [],
    tecnologias: [],
    aptitudes: [],
    detallesAdicionales: []
  });

  useEffect(() => {
    setData(jsonData);
  }, []);

  const renderListSection = (
    title,
    items,
    renderItem,
    animationClass = "fade-in"
  ) => (
    <div className="col-12 col-md-6 my-3">
      <CSSTransition timeout={500} classNames={animationClass}>
        <div className="card shadow-lg rounded-lg">
          <div className="card-header bg-primary text-white text-center">
            <h3 className="mb-0">{title}</h3>
          </div>
          <div className="card-body p-4 rounded-5">
            <ul className="list-group list-group-flush">
              {(items || []).map(renderItem)}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </div>
  );

  const renderAptitudes = () =>
    renderListSection("Aptitudes", data.aptitudes, (aptitud) => (
      <li key={aptitud.id} className="list-group-item my-2">
        <h4>{aptitud.nombre}</h4>
      </li>
    ));

  const renderDetallesAdicionales = () =>
    renderListSection(
      "Detalles Adicionales",
      data.detallesAdicionales,
      (detalle) => (
        <li key={detalle.id} className="list-group-item my-2">
          <h4>{detalle.nombre}</h4>
        </li>
      )
    );

  const renderExperiencias = () =>
    renderListSection("Experiencias", data.experiencias, (experiencia) => (
      <li key={experiencia.id} className="list-group-item my-2">
        <h4>
          <FontAwesomeIcon icon={faBuilding} className="me-2" />
          {experiencia.nombreEmpresa}
        </h4>
        <h5>
          <FontAwesomeIcon icon={faBriefcase} className="me-2" />
          {experiencia.nombrePuesto}
        </h5>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          {experiencia.lugar}
        </p>
        <p>
          {experiencia.fechaInicio} - {experiencia.fechaFin}
        </p>
        <p>{experiencia.descripcion}</p>
      </li>
    ));

  const renderVoluntariados = () =>
    renderListSection("Voluntariados", data.voluntariados, (voluntariado) => (
      <li key={voluntariado.id} className="list-group-item my-2">
        <h4>
          <FontAwesomeIcon icon={faBuilding} className="me-2" />
          {voluntariado.nombreEmpresa}
        </h4>
        <h5>
          <FontAwesomeIcon icon={faBriefcase} className="me-2" />
          {voluntariado.nombrePuesto}
        </h5>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          {voluntariado.lugar}
        </p>
        <p>
          {voluntariado.fechaInicio} - {voluntariado.fechaFin}
        </p>
        <p>{voluntariado.descripcion}</p>
      </li>
    ));

  const renderEstudios = () =>
    renderListSection("Estudios", data.estudios, (estudio) => (
      <li key={estudio.id} className="list-group-item my-2">
        <h4>
          <FontAwesomeIcon icon={faBuilding} className="me-2" />
          {estudio.centro}
        </h4>
        <h5>
          <FontAwesomeIcon icon={faBriefcase} className="me-2" />
          {estudio.nombreCurso}
        </h5>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} classame="me-2" />
          {estudio.lugar}
        </p>
        <p>
          {estudio.fechaInicio} - {estudio.fechaFin}
        </p>
      </li>
    ));

  const renderIdiomas = () =>
    renderListSection("Idiomas", data.idiomas, (idioma) => (
      <li key={idioma.id} className="list-group-item my-2">
        <h4>
          {idioma.nombre}: {idioma.nivel}
        </h4>
      </li>
    ));

  const renderLenguajes = () =>
    renderListSection("Lenguajes", data.lenguajes, (lenguaje) => (
      <li key={lenguaje.id} className="list-group-item my-2">
        <h4>{lenguaje.nombre}</h4>
        <p>{lenguaje.descripcion}</p>
      </li>
    ));

  const renderFrameworks = () =>
    renderListSection("Frameworks", data.frameworks, (framework) => (
      <li key={framework.id} className="list-group-item my-2">
        <h4>{framework.nombre}</h4>
        <p>{framework.descripcion}</p>
      </li>
    ));

  const renderTecnologias = () =>
    renderListSection("Tecnologías", data.tecnologias, (tecnologia) => (
      <li key={tecnologia.id} className="list-group-item my-2">
        <h4>{tecnologia.nombre}</h4>
        <p>{tecnologia.descripcion}</p>
      </li>
    ));

  return (
    <div className="container-fluid">
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade">
          <>
            <div className="row justify-content-center">
              {renderExperiencias()}
              {renderVoluntariados()}
            </div>
            <div className="row justify-content-center">
              {renderEstudios()}
              {renderIdiomas()}
            </div>
            <div className="row justify-content-center">
              {renderLenguajes()}
              {renderFrameworks()}
              {renderTecnologias()}
            </div>
            <div className="row justify-content-center">
              {renderAptitudes()}
              {renderDetallesAdicionales()}
            </div>
          </>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default About;
