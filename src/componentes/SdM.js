import React from "react";
import foto1 from "../img/ProMatricula.jpeg"; 
import foto2 from "../img/matricula2.jpg"; 

function SdM() {
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
        Proyecto: Sistema de matrícula
      </h1>

      <img 
        src={foto1} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "600px", 
          maxWidth: "90%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />

      <img 
        src={foto2} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "600px", 
          maxWidth: "90%", 
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
        Este proyecto se centra en el desarrollo de un sistema de matrícula para una institución educativa, 
        con el objetivo de gestionar eficientemente el proceso de inscripción de alumnos en diferentes clases y secciones, 
        así como el manejo de información relevante sobre docentes, carreras y departamentos.
        El sistema contará con un conjunto de funcionalidades principales que abarcan un módulo de administración, 
        un área para docentes y un espacio dedicado a los alumnos, cada uno con opciones específicas según su rol.
      </p>
      <p
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          textAlign: "justify",
          lineHeight: "1.8",
        }}
      >
        Los alumnos tienen acceso a un área de matrícula donde podrán inscribirse en clases y secciones disponibles. 
        El sistema simula un proceso de matrícula basado en criterios establecidos, como el promedio del alumno y el periodo actual. 
        Dependiendo de estos criterios, se asignará a cada alumno un día específico para su matriculación (primer día o segundo día).
        El sistema también cuenta con un sistema de inicio de sesión que permitirá a los usuarios acceder a sus respectivas áreas con
        credenciales únicas. Habrá tres tipos de inicio de sesión: alumno, docente y administrador, cada uno con permisos y opciones 
        adaptadas a sus roles específicos dentro del sistema.
      </p>

       <p
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          textAlign: "justify",
          lineHeight: "1.8",
        }}
      >
        Mi rol se centró en el desarrollo del backend. Diseñé la arquitectura de las rutas API y fui responsable de la 
        implementación de la mayoría de los endpoints, gestionando peticiones HTTP (GET, POST, PUT, DELETE) y 
        asegurando la manipulación correcta de los datos.
      </p>

     
      <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Tecnologias implementadas
      </h2>

  
    <ul style={{ fontSize: "1.2rem", lineHeight: "2" }}>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Java</li>
        <li>Spring Boot</li>
      </ul>     
    </div>
  );
}

export default SdM;
