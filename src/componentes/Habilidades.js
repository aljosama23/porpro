import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaLaravel, FaPhp, FaVuejs } from "react-icons/fa";
import { SiCplusplus, SiSpringboot, SiTypescript, SiMongodb, SiMysql, SiPostgresql} from "react-icons/si";

const habilidades = [
  { icon: <SiCplusplus className="icono-habilidad" size={70} color="#00599C" />, nombre: "C++" },
  { icon: <FaPython className="icono-habilidad" size={70} color="#3776AB" />, nombre: "Python" },
  { icon: <FaPhp  className="icono-habilidad" size={70} color="#00599C" />, nombre: "PHP" },
  { icon: <SiTypescript className="icono-habilidad" size={70} color="#00599C" />, nombre: "TypeScript" },
  { icon: <FaReact  className="icono-habilidad" size={70} color="#61DAFB" />, nombre: "React JS" },
  { icon: <FaVuejs className="icono-habilidad" size={70} color="#3B8985" />, nombre: "Vue.js" },
  { icon: <FaHtml5 className="icono-habilidad" size={70} color="#E34F26" />, nombre: "HTML5" },
  { icon: <FaCss3Alt className="icono-habilidad" size={70} color="#1572B6" />, nombre: "CSS3" },
  { icon: <FaJs className="icono-habilidad" size={70} color="#F7DF1E" />, nombre: "JavaScript" },
  { icon: <FaNodeJs className="icono-habilidad" size={70} color="#3C873A" />, nombre: "Node.js" },
  { icon: <SiSpringboot className="icono-habilidad" size={70} color="#3C873A" />, nombre: "SpringBoot" },
  { icon: <FaLaravel className="icono-habilidad" size={70} color="#F05032" />, nombre: "Laravel" },
  { icon: <SiMongodb className="icono-habilidad" size={70} color="#4DB33D" />, nombre: "MongoDB" },
  { icon: <SiMysql className="icono-habilidad" size={70} color="#00599C" />, nombre: "MySQL" },
  { icon: <SiPostgresql className="icono-habilidad" size={70} color="#00599C" />, nombre: "PostgresSQL" },
];

function Habilidades() {
  return (
    <section
      id="habilidades"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //background: "#181818",
        padding: "40px 0",
        margin: "40px"
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
        }}>
            Habilidades
        </h2>
     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "40px",
          background: "#232323",
          padding: "40px",
          borderRadius: "20px"
        }}
      >
        {habilidades.map((hab, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white"
            }}
          >
            {hab.icon}
            <span style={{ marginTop: "10px", fontSize: "1.2rem" }}>{hab.nombre}</span>
          </div>
          
        ))}
        </div>
        <style>
        {`
          .icono-habilidad {
            transition: transform 0.2s;
            cursor: pointer;
          }
          .icono-habilidad:hover {
            transform: scale(1.2);
          }
        `}
      </style>
    </section>
  );
}

export default Habilidades;