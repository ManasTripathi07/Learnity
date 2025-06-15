import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedText = () => {
  useEffect(() => {
    const typed = new Typed(".role", {
      strings: [
        "Online Courses",
        "Educators",
        "Study Resources",
        "Industry Projects",
        "Certification",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typed.destroy(); // Cleanup
    };
  }, []);

  return <span className="role text-yellow-300"></span>;
};

export default TypedText;
