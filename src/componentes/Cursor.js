import React, { useEffect, useRef } from "react";

function FondoDinamico() {
  const fondoRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const hoveringHeader = useRef(false);
  const hoveringLinks = useRef([false, false, false, false]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };

      // Header texto
      const headerTexto = document.getElementById("header-texto");
      if (headerTexto) {
        const rect = headerTexto.getBoundingClientRect();
        hoveringHeader.current =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
      }

      // Enlaces
      const links = document.querySelectorAll(".header-link");
      links.forEach((link, idx) => {
        const rect = link.getBoundingClientRect();
        hoveringLinks.current[idx] =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
      });
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (fondoRef.current) {
        fondoRef.current.style.background = `
          radial-gradient(220px circle at ${pos.current.x}px ${pos.current.y}px, rgba(97,218,251,0.10) 0%, rgba(97,218,251,0.04) 60%, transparent 100%)
        `;
      }

      // Zoom header texto
      const headerTexto = document.getElementById("header-texto");
      if (headerTexto) {
        let zoom = 1;
        if (hoveringHeader.current) zoom = 1.08;
        const currentZoom = Number(headerTexto.style.transform.replace(/[^0-9.]/g, "")) || 1;
        const newZoom = currentZoom + (zoom - currentZoom) * 0.2;
        headerTexto.style.transform = `scale(${newZoom})`;
        headerTexto.style.transition = "transform 0.2s";
        headerTexto.style.transformOrigin = "center center";
      }

      // Zoom enlaces
      const links = document.querySelectorAll(".header-link");
      links.forEach((link, idx) => {
        let zoom = 1;
        if (hoveringLinks.current[idx]) zoom = 1.15;
        const currentZoom = Number(link.style.transform.replace(/[^0-9.]/g, "")) || 1;
        const newZoom = currentZoom + (zoom - currentZoom) * 0.2;
        link.style.transform = `scale(${newZoom})`;
        link.style.transition = "transform 0.2s";
        link.style.transformOrigin = "center center";
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={fondoRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        transition: "background 0.2s",
      }}
    />
  );
}

export default FondoDinamico;