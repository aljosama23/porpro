import React from "react";
import foto from "../img/Reconecta.png";
import foto1 from "../img/landingPageReconecta.jpg";
import foto2 from "../img/loginReconecta.jpg";
import foto6 from "../img/empleosReconecta.jpg";
import foto4 from "../img/ayudaPsicologicaReconecta.jpg";
import foto5 from "../img/ayudaPsicologicaReconecta2.jpg";
import foto3 from "../img/portalReconecta.jpg";
import foto7 from "../img/analisisFODAreconecta.jpg";
import foto8 from "../img/plan1.jpg";
import foto9 from "../img/plan2.jpg";


function ReconectaProyecto() {
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
        Proyecto: RECONECTA
      </h1>

      <img 
        src={foto} 
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

      <p style={{ maxWidth: "800px", fontSize: "1.2rem", textAlign: "justify", lineHeight: "1.8" }}>
        Reconecta es una propuesta de plataforma digital orientada a la reintegración socioeconómica de migrantes hondureños retornados
        y personas en riesgo de migrar. Aunque la aplicación aún no está programada, el proyecto cuenta con una base sólida de negocio 
        que incluye: modelo de base de datos, plan de mercado, plan de organización, plan estratégico, plan operativo, plan financiero y
        mockups. La plataforma busca ser un puente de oportunidades, conectando a los usuarios con:
      </p>

      <ul style={{ maxWidth: "800px", fontSize: "1.2rem", lineHeight: "2", textAlign: "justify" }}>
        <li>Formación y capacitación: cursos certificados diseñados según las demandas reales del mercado laboral.</li>
        <li>Empleo inclusivo: acceso a una bolsa de trabajo que involucra empresas, microempresas y particulares comprometidos con la inclusión.</li>
        <li>Apoyo emocional: mentorías y sesiones básicas de acompañamiento psicológico para fortalecer el bienestar personal.</li>
    </ul>
    
    <p style={{ maxWidth: "800px", fontSize: "1.2rem", textAlign: "justify", lineHeight: "1.8" }}>
        Aunque el proyecto no se programó en su totalidad, el plan de negocio incluyó la conceptualización y desarrollo de la base de datos en MySQL y 
        la selección de tecnologías para una infraestructura escalable y robusta, utilizando servicios en la nube de Microsoft Azure.
        Este proyecto fue desarrollado en colaboración con un compañero, dividiendo el trabajo de manera equitativa entre las distintas fases de la aplicación. 
        El proceso de desarrollo incluyó varias presentaciones y exposiciones del proyecto a lo largo de sus etapas, 
        permitiéndonos recibir feedback continuo y garantizar la calidad final del producto.
    </p>

    <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Analisis FODA
    </h2>

    <img 
        src={foto7} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }}
    />

    <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Planificación del proyecto
    </h2>

    <img 
        src={foto8} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }}
    />

    <img 
        src={foto9} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }}
    />


      <h2 style={{ color: "#61DAFB", fontSize: "2.25rem", marginBottom: "20px" }}>
        Mockups 
      </h2>

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
        src={foto5} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />
      <img 
        src={foto6} 
        alt="Vista previa del proyecto" 
        style={{ 
          width: "800px", 
          maxWidth: "100%", 
          borderRadius: "12px", 
          marginBottom: "20px" 
        }} 
      />

    </div>
  );
}

export default ReconectaProyecto;
