import React, { useState } from "react";
import foto from "../img/FotoCV.jpeg";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <section
      className="header-section"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        padding: "0 3% 0 10%",
        color: "white"
      }}
    >
      {/* Barra de navegación */}
      <div className="header-menu-bar" style={{ width: "100%", position: "relative" }}>
        <button
          className="menu-hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
          style={{
            display: "none",
            position: "absolute",
            top: 30,
            right: 30,
            background: "none",
            border: "none",
            fontSize: "2.2rem",
            color: "#61DAFB",
            zIndex: 20,
            cursor: "pointer"
          }}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <nav
          className={`header-nav ${menuAbierto ? "abierto" : ""}`}
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "40%",
            position: "static",
            top: "auto",
            left: "auto",
            marginTop: "32px"
          }}
          onClick={() => setMenuAbierto(!menuAbierto)}

        >
          <a href="#home" className="header-link" style={{ textDecoration: "none", fontSize: "1.3rem" }}>
            <span style={{ color: "#3B8985" }}>01.</span>
            <span style={{ color: "white" }}> Sobre mi</span>
          </a>
          <a href="#habilidades" className="header-link" style={{ textDecoration: "none", fontSize: "1.3rem" }}>
            <span style={{ color: "#3B8985" }}>02.</span>
            <span style={{ color: "white" }}> Habilidades</span>
          </a>
          <a href="#proyectos" className="header-link" style={{ textDecoration: "none", fontSize: "1.3rem" }}>
            <span style={{ color: "#3B8985" }}>03.</span>
            <span style={{ color: "white" }}> Proyectos</span>
          </a>
          <a href="#contacto" className="header-link" style={{ textDecoration: "none", fontSize: "1.3rem" }}>
            <span style={{ color: "#3B8985" }}>04.</span>
            <span style={{ color: "white" }}> Contacto</span>
          </a>
        </nav>
      </div>

      {/* Contenido principal */}
      <div
        className="header-content"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row", // Fila en escritorio
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
          gap: "40px"
        }}
      >
        <div
          id="header-texto"
          style={{
            padding: "0 25px",
            width: "100%",
            boxSizing: "border-box",
            flex: 1.15,
            marginTop: "50px"
          }}
        >
          <h1 style={{ fontSize: "5rem", marginBottom: "20px" }}>Alejandro Martínez</h1>
          <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>Ingeniero en sistemas</h3>
          <p style={{ fontSize: "1.43rem", lineHeight: "1.5", color: "#B5B5B3" }}>
            Soy un apasionado del desarrollo de software, con un enfoque especial en el frontend, 
            donde mi fortaleza está en la creación de interfaces claras, funcionales y atractivas. 
            Destaco por mi atención al detalle y por el compromiso de construir soluciones web que ofrezcan 
            una experiencia de usuario eficiente y de valor. 
            Me considero una persona proactiva, con facilidad para trabajar en equipo y con el deseo
            constante de aprender y crecer profesionalmente, buscando siempre aportar al éxito de los
            proyectos en los que participo.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
          <img
            src={foto}
            alt="Foto de perfil"
            className="header-img"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 15px rgba(0,0,0,0.4)"
            }}
          />
        </div>
      </div>

      {/* Estilos SOLO para móvil/tablet */}
      <style>
        {`
          @media (max-width: 900px) {
            .header-section {
              flex-direction: column !important;
              align-items: flex-start !important;
              padding: 0 2% !important;
              height: auto !important;
            }
            .header-menu-bar {
              width: 100%;
              position: relative;
              min-height: 70px;
            }
            .menu-hamburguesa {
              display: block !important;
              right: 20px !important;
              left: auto !important;
            }
            .header-nav {
              display: none !important;
              flex-direction: column !important;
              background: #232323;
              position: absolute !important;
              top: 70px !important;
              right: 20px !important;
              left: auto !important;
              gap: 18px !important;
              padding: 25px 30px;
              border-radius: 12px;
              box-shadow: 0 4px 24px rgba(0,0,0,0.2);
              z-index: 10;
            }
            .header-nav.abierto {
              display: flex !important;
            }
            .header-content {
              flex-direction: column !important;
              gap: 0 !important;
              margin-top: 20px !important;
            }
            #header-texto {
              padding: 0 10px !important;
            }
            .header-img {
              width: 180px !important;
              height: 180px !important;
              margin-top: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Header;