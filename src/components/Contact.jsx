import React, { useState } from "react";
import jsonData from "./json/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Contact = () => {
  const url = "https://formsubmit.co/" + jsonData.email;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe contener almenos 10 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const form = e.target;
      form.submit();
    }
  };

  return (
    <div className="row mt-2">
      <form className="col col-sm-10 col-md-8 col-lg-6 mx-auto" action={url} method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row my-2">
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre de contacto"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <div className="text-dark-danger my-1 my-1">{errors.name}</div>
              )}
            </div>
            <div className="col-12 col-md-6 mt-2 mt-md-0">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email de contacto"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="text-dark-danger my-1">{errors.email}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-group my-3">
          <textarea
            placeholder="Mensaje..."
            className="form-control"
            name="message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && (
            <div className="text-dark-danger my-1">{errors.message}</div>
          )}
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-lg btn-dark">
          <FontAwesomeIcon icon={faShare} />
          </button>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://nebur342.github.io/portfolio"
        />
      </form>
    </div>
  );
};

export default Contact;
