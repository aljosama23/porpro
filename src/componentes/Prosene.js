import React from "react";
import foto1 from "../img/prosene.png";
import foto2 from "../img/listaUsuarioProsene.jpg";
import foto3 from "../img/ListaSolicitudesProsene.jpg";
import foto4 from "../img/usuarioProsene.jpg"
import foto5 from "../img/solicitudesProsene.jpg";
 



function Prosene() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#18191a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Proyecto: PROSENE
      </h1>

      <img 
        src={foto1} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />

      <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Descripción de proyecto 
      </h2>

      <p
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          textAlign: "justify",
          lineHeight: "1.8",
        }}
      >
        El proyecto consiste en el desarrollo de un aplicativo web para el Programa de Servicios a Estudiantes con Necesidades Especiales (PROSENE) 
        de la UNAH. Su objetivo principal es digitalizar la gestión de solicitudes realizadas por estudiantes con discapacidad, 
        garantizando accesibilidad, seguridad y un seguimiento eficiente de cada caso.
        Permite a los estudiantes registrar solicitudes, darles seguimiento y recibir notificaciones de cambios en su estado, 
        mientras que el personal de PROSENE podrá gestionar, asignar y administrar dichas solicitudes de manera centralizada.
      </p>
      <p
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          textAlign: "justify",
          lineHeight: "1.8",
        }}
      >
        El sistema tiene como restricciones principales que solo podrán acceder usuarios autenticados y autorizados por PROSENE, 
        la aplicación deberá cumplir con estándares de accesibilidad para personas con discapacidad y se 
        garantizará en todo momento la seguridad y confidencialidad de los datos personales, ajustándose a los recursos de infraestructura disponibles en la UNAH.
      </p>

       <p
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          textAlign: "justify",
          lineHeight: "1.8",
        }}
      >
       Este proyecto fue desarrollado en colaboración con un equipo de compañeros. Trabajamos bajo metodologías ágiles, 
       utilizando sprints y demos para entregar el proyecto por etapas, lo que nos permitió mantener un flujo de trabajo organizado y eficiente. 
       Yo me integré al equipo del Frontend, donde colaboré activamente en la creación de componentes y la estructura de la interfaz,
       garantizando que el diseño fuera consistente y la aplicación funcionara correctamente.


      </p>

    <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Imagenes del proyecto
    </h2>     

    <img 
        src={foto2} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />
      <img 
        src={foto4} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />
      <img 
        src={foto3} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />
      <img 
        src={foto5} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />

      <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Tecnologias implementadas
      </h2>

  
    <ul style={{ fontSize: "1.25rem", lineHeight: "2" }}>
        <li>Vue.js v3 (Composition API)</li>
        <li>FastAPI</li>
        <li>PostgreSQL</li>
    </ul>

    <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Repositorio del proyecto
      </h2>

      <div
  className="skill-links-container"
  style={{
    display: 'flex',       
    gap: '20px',           
    marginBottom: '40px',  
    padding: '10px 0',
  }}
>
 
  <a 
    href= "https://github.com/MartinezJ10/Frontend_PROSENE/tree/main"
    className="skill-link"
    style={{
      padding: '10px 25px',
      borderRadius: '25px',       
      textDecoration: 'none',     
      color: 'white',
      border: '2px solid #61DAFB', 
      backgroundColor: 'transparent',
      transition: 'all 0.3s ease', 
      fontWeight: '600',
      fontSize: '1.2rem',
    }}
  >
    💻 Frontend
  </a>

  <a 
    href="https://github.com/ricjpg/prosene-backend"
    className="skill-link"
    style={{
      padding: '10px 25px',
      borderRadius: '25px',
      textDecoration: 'none',
      color: 'white',
      border: '2px solid #61DAFB',
      backgroundColor: 'transparent',
      transition: 'all 0.3s ease',
      fontWeight: '600',
      fontSize: '1.2rem',
    }}
  >
    ⚙️ Backend
  </a>
</div>


    </div>
  );
}

export default Prosene;
