import { Link } from "react-router-dom"; 
import foto from "../img/prosene.png";
import foto2 from "../img/ProMatricula.jpeg";
import foto3 from "../img/Reconecta.png";

function Proyectos() {
  return (
    <section
      id="proyectos"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "30px",
          fontSize: "2rem",
          borderRadius: "12px",
          padding: "10px 40px",
          display: "inline-block",
          border: "2px solid #61DAFB",
        }}
      >
        Proyectos
      </h2>

      <>
        {/* Fila 1 */}
        <div className="proyectos-fila">
          {/* Contenedor 1 */}
          <Link to="/prosene" className="link-reset">
          <div
            className="proyecto-contenedor"
            style={{
              background: "#232323",
              borderRadius: "16px",
              padding: "30px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ color: "#61DAFB", marginBottom: "10px" }}>PROSENE</h2>
            <div
              style={{
                width: "650px",
                height: "280px",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={foto}
                alt="Proyecto Prosene"
                style={{
                  width: "95%",
                  height: "95%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div
              style={{
                color: "white",
                fontSize: "1.1rem",
                textAlign: "center",
                padding: "5px"
              }}
            >
              PROSENE es un sitio web desarrollado para facilitar la gestión de solicitudes
              de servicios y apoyos que los estudiantes con discapacidad necesitan agilizando
              la comunicación con la institución.
            </div>
          </div>
          </Link>

          {/* Contenedor 2 */}
          <Link to="/matricula" className="link-reset">
          <div
            className="proyecto-contenedor"
            style={{
              background: "#232323",
              borderRadius: "16px",
              padding: "30px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ color: "#61DAFB" }}>Sistema de matrícula</h2>
            <div
              style={{
                width: "650px",
                height: "280px",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={foto2}
                alt="Proyecto 2"
                style={{
                  width: "95%",
                  height: "95%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div
              style={{
                color: "white",
                fontSize: "1.1rem",
                textAlign: "center",
                padding: "5px"
              }}
            >
              Plataforma de inscripción de alumnos en diferentes clases y secciones.
              El sistema cuenta con un módulo de administración, docentes y alumnos.
            </div>
          </div>
          </Link>
        </div>

        {/* Fila 2 */}
        <div className="proyectos-fila">
          {/* Contenedor Reconecta */}
          <Link to="/reconecta" className="link-reset">
            <div
              className="proyecto-contenedor"
              style={{
                background: "#232323",
                borderRadius: "16px",
                padding: "30px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <h2 style={{ color: "#61DAFB" }}>RECONECTA</h2>
              <div
                style={{
                  width: "650px",
                  height: "280px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={foto3}
                  alt="Proyecto Reconecta"
                  style={{
                    width: "95%",
                    height: "95%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  textAlign: "center",
                  padding: "5px"
                }}
              >
                Reconecta es una propuesta de plataforma digital orientada a la reintegración
                socioeconómica de migrantes hondureños retornados y personas en riesgo de migrar.
              </div>
            </div>
          </Link>
        </div>
      </>

      <style>
        {`
          .proyecto-contenedor {
            transition: transform 0.25s cubic-bezier(.4,2,.6,1);
            will-change: transform;
          }
          .proyecto-contenedor:hover {
            transform: scale(1.04);
            box-shadow: 0 8px 32px 0 rgba(97,218,251,0.18);
            z-index: 2;
          }
        `}
      </style>
    </section>
  );
}

export default Proyectos;
