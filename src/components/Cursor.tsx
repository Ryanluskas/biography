"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverableElement = target.closest('[data-cursor]');
      
      if (hoverableElement) {
        setIsHovering(true);
        setHoverText(hoverableElement.getAttribute('data-cursor') || "");
      } else if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main tiny dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* Outer circle / Hover state */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[99] hidden md:flex mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering && hoverText ? 40 : isHovering ? 20 : 16),
          y: mousePosition.y - (isHovering && hoverText ? 40 : isHovering ? 20 : 16),
          width: isHovering && hoverText ? 80 : isHovering ? 40 : 32,
          height: isHovering && hoverText ? 80 : isHovering ? 40 : 32,
          backgroundColor: isHovering && hoverText ? "white" : "transparent",
          border: isHovering && hoverText ? "none" : "1px solid rgba(255,255,255,0.5)",
          borderRadius: "50%",
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
      >
        {hoverText && (
          <span className="text-black text-[10px] font-mono uppercase tracking-widest font-bold mix-blend-normal">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}
