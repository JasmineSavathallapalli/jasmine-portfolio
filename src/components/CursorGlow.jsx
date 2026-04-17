import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* BIG GLOW CIRCLE */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px solid rgba(168,85,247,0.6)",
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
          transition: "transform 0.12s ease-out",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 30px rgba(168,85,247,0.5)",
        }}
      />

      {/* INNER DOT */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "9px",
          height: "9px",
          background: "#c084fc",
          borderRadius: "50%",
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}