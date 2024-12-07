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
    detallesAdicionales: [],
    certificados: [],
  });

  useEffect(() => {
    setData(jsonData);
  }, []);

  const renderListSection = (
    title,
    items,
    color,
    renderItem,
    animationClass = "fade-in"
  ) => (
    <div className="col-12 col-md-6 my-3">
      <CSSTransition timeout={500} classNames={animationClass}>
        <div className="card shadow-lg rounded-lg">
          <div className={`card-header bg-${color} text-white text-center`}>
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

  const renderExperiencias = () =>
    renderListSection(
      "Experiencias",
      [...data.experiencias].reverse(),
      "bloque1",
      (experiencia) => (
        <li key={experiencia.id} className="list-group-item my-2">
          <h4>
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            {experiencia.nombrePuesto}
          </h4>
          <h5>
            <FontAwesomeIcon icon={faBuilding} className="me-2" />
            {experiencia.nombreEmpresa}
          </h5>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            {" " + experiencia.lugar}
          </p>
          <p>
            {experiencia.fechaInicio} - {experiencia.fechaFin}
          </p>
          <p>{experiencia.descripcion}</p>
        </li>
      )
    );

  const renderVoluntariados = () =>
    renderListSection(
      "Voluntariados",
      [...data.voluntariados].reverse(),
      "bloque1",
      (voluntariado) => (
        <li key={voluntariado.id} className="list-group-item my-2">
          <h4>
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            {voluntariado.nombrePuesto}
          </h4>
          <h5>
            <FontAwesomeIcon icon={faBuilding} className="me-2" />
            {voluntariado.nombreEmpresa}
          </h5>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            {" " + voluntariado.lugar}
          </p>
          <p>
            {voluntariado.fechaInicio} - {voluntariado.fechaFin}
          </p>
          <p>{voluntariado.descripcion}</p>
        </li>
      )
    );

  const renderEstudios = () =>
    renderListSection(
      "Estudios",
      [...data.estudios].reverse(),
      "bloque2",
      (estudio) => (
        <li key={estudio.id} className="list-group-item my-2">
          <h4>
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            {estudio.nombreCurso}
          </h4>
          <h5>
            <FontAwesomeIcon icon={faBuilding} className="me-2" />
            {estudio.centro}
          </h5>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            {" " + estudio.lugar}
          </p>
          <p>
            {estudio.fechaInicio} - {estudio.fechaFin}
          </p>
        </li>
      )
    );

  const renderCertificados = () =>
    renderListSection(
      "Certificados",
      [...data.certificados].reverse(),
      "bloque2",
      (certificado) => (
        <li key={certificado.id} className="list-group-item my-2">
          <h4>
            <FontAwesomeIcon icon={faBriefcase} className="me-2 b-5" />
            {certificado.nombreCurso}
          </h4>
          <h5>
            <FontAwesomeIcon icon={faBuilding} className="me-2" />
            {certificado.centro}
          </h5>
          <div class="d-flex flex-row-reverse">
            <a
              href={certificado.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              Ver certificado
            </a>
          </div>
        </li>
      )
    );

  const renderIdiomas = () =>
    renderListSection("Idiomas", data.idiomas, "bloque2", (idioma) => (
      <li key={idioma.id} className="list-group-item my-2">
        <h4>
          {idioma.nombre}: {idioma.nivel}
        </h4>
      </li>
    ));

  const renderLenguajes = () =>
    renderListSection("Lenguajes", data.lenguajes, "bloque3", (lenguaje) => (
      <li key={lenguaje.id} className="list-group-item my-2">
        <a href={lenguaje.url} target="_blank" rel="noopener noreferrer">
          {lenguaje.nombre}
        </a>
        <p>{lenguaje.descripcion}</p>
      </li>
    ));

  const renderFrameworks = () =>
    renderListSection("Frameworks", data.frameworks, "bloque3", (framework) => (
      <li key={framework.id} className="list-group-item my-2">
        <a href={framework.url} target="_blank" rel="noopener noreferrer">
          {framework.nombre}
        </a>
        <p>{framework.descripcion}</p>
      </li>
    ));

  const renderTecnologias = () =>
    renderListSection(
      "Tecnologías",
      data.tecnologias,
      "bloque3",
      (tecnologia) => (
        <li key={tecnologia.id} className="list-group-item my-2">
          <a href={tecnologia.url} target="_blank" rel="noopener noreferrer">
            {tecnologia.nombre}
          </a>
          <p>{tecnologia.descripcion}</p>
        </li>
      )
    );

  const renderAptitudes = () =>
    renderListSection("Aptitudes", data.aptitudes, "bloque4", (aptitud) => (
      <li key={aptitud.id} className="list-group-item my-2">
        <h4>{aptitud.nombre}</h4>
      </li>
    ));

  const renderDetallesAdicionales = () =>
    renderListSection(
      "Detalles Adicionales",
      data.detallesAdicionales,
      "bloque4",
      (detalle) => (
        <li key={detalle.id} className="list-group-item my-2">
          <h4>{detalle.nombre}</h4>
        </li>
      )
    );

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
              {renderCertificados()}
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
