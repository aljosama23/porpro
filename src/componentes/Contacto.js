import React from "react";

// Puedes usar iconos de react-icons
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Contacto() {
  return (
    <section
      id="contacto"
      style={{
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#232323",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "30px" }}>Contacto:</h2>
      <div className= "iconos-contacto" style={{ display: "flex", gap: "40px" }}>
        <a
          href="https://www.instagram.com/alejosm_z/"
          target="_blank"
          rel="noopener noreferrer"
          className="icono"
          style={{ color: "#E4405F", fontSize: "3rem", transition: "transform 0.2s, color 0.2s"  }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-mart%C3%ADnez-02886b384/"
          target="_blank"
          rel="noopener noreferrer"
           className="icono"
          style={{ color: "#0077B5", fontSize: "3rem", transition: "transform 0.2s, color 0.2s"  }}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:alejomartiz10@gmail.com"
          className="icono"
          style={{ color: "#D44638", fontSize: "3rem", transition: "transform 0.2s, color 0.2s"  }}
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/aljosama23"
          target="_blank"
          rel="noopener noreferrer"
          className="icono"
          style={{ color: "#fff", fontSize: "3rem", transition: "transform 0.2s, color 0.2s"  }}
        >
          <FaGithub />
        </a>
      </div>
      <style>
        {`
          .iconos-contacto .icono:hover {
            transform: scale(1.2);
          }
        `}
      </style>
    </section>
  );
}

export default Contacto;