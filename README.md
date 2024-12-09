<h1 align="center">src/components/Contact.jsx</h1>

```
"https://portfolioraf.lovestoblog.com"
```

<h1 align="center">package.json</h1>

```
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.5.2",
    "@fortawesome/free-brands-svg-icons": "^6.5.2",
    "@fortawesome/free-regular-svg-icons": "^6.5.2",
    "@fortawesome/free-solid-svg-icons": "^6.5.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.3.3",
    "gh-pages": "^6.1.1",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.2",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

<h1 align="center">src/App.js</h1>

```
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import jsonData from "./components/json/data.json";
import cv from "./components/pdf/cv.pdf";
import carta from "./components/pdf/carta_presentacion.pdf";

const Header = () => (
  <header
    className="header bg-dark text-light position-sticky top-0 z-1"
    style={{
      height: "50px",
      padding: "0",
      margin: "0",
    }}>
    <div className="container-fluid h-100">
      <div className="row align-items-center justify-content-between mx-1 h-100">
        <div className="col">
          <h2 className="my-auto">
            <Link to="" className="link-unstyled" aria-label="Home">
              <FontAwesomeIcon icon={faHouse} className="icon-home" />
            </Link>
          </h2>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to="/contact" className="mx-1">
            <button className="btn btn-info">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

const Main = () => (
  <main className="container-fluid main-content fondogradiente py-1 flex-grow-1">
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="" element={<Home />} />
    </Routes>
  </main>
);

const Footer = ({ redesSociales }) => (
  <footer className="bg-dark text-white">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6 col-lg-3">
          <h5>Contacto</h5>
          <p>Teléfono: {jsonData.telefono}</p>
          <p>Email: {jsonData.email}</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h5>Redes Sociales</h5>
          <ul className="list-unstyled d-flex">
            {redesSociales.map((redSocial) => (
              <li key={redSocial.id} className="me-3">
                <a
                  href={redSocial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white">
                  <img
                    src={redSocial.simbolo}
                    alt={redSocial.name}
                    className="rounded-circle"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 col-lg-3">
          <h5>Proyectos</h5>
          <p>
            <a
              href={jsonData.proyectos}
              target="_blank"
              rel="noopener noreferrer">
              GITHUB
            </a>
          </p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h5>Documentos</h5>
          <p>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </p>
          <p>
            <a href={carta} target="_blank" rel="noopener noreferrer">
              Carta de presentación
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [redesSociales, setRedesSociales] = useState([]);

  useEffect(() => {
    setRedesSociales(jsonData.redes);
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Main />
        <Footer redesSociales={redesSociales} />
      </div>
    </Router>
  );
};

export default App;
```

<h1 align="center">public/index.html</h1>

```
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href="/build/images/user.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#3498db" />
    <meta
      name="description"
      content="Portfolio personal creado con React"
    />
    <link rel="apple-touch-icon" href="/build/images/user.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Portfolio</title>
  </head>
  <body>
    <noscript>Debes habilitar JavaScript para usar esta app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
