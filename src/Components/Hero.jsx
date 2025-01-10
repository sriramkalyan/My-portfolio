import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP TextPlugin
gsap.registerPlugin(TextPlugin);

const RadarCircles = () => {
  const textRef = useRef();

  useEffect(() => {
    // GSAP typing effect
    const text = "SOFTWARE ENGINEER";
    gsap.fromTo(
      textRef.current,
      { text: "" }, // Initial state: empty text
      {
        duration: text.length * 0.1, // Adjust typing speed here
        text: text, // Target text
        ease: "none",
        delay: 0.5, // Delay before typing starts
      }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start h-screen overflow-hidden">
      {/* Profile Image and Text */}
      <div className="z-10 flex flex-col items-center justify-center mt-10">
        <img
          src="src/assets/My.jpg" // Replace with the actual path to your image
          alt="Center Image"
          className="h-[250px] w-[250px] object-cover rounded-full sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px]"
        />
        <div
          ref={textRef}
          className="text-xl tracking-[8px] text-[#898989] mt-4 sm:text-lg md:text-xl"
        />
        <div className="text-4xl font-bold p-2 font-sans tracking-[2px] text-white sm:text-3xl md:text-4xl">
          SRIRAM
        </div>
      </div>

      {/* Animated Radar Circles */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute top-0 rounded-full border-2 border-[#4D4D4D]"
          initial={{
            scale: 0,
            opacity: 0.5,
          }}
          animate={{
            scale: [0, 2.2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2, // How long each animation lasts
            repeat: Infinity, // Infinite loop
            repeatDelay: 0.5, // Delay before restarting animation
            delay: index * 0.7, // Staggered delay for each circle
          }}
          style={{
            width: "350px",
            height: "350px",
            maxWidth: "80vw", // Set a max width relative to the viewport size
            maxHeight: "80vw", // Set a max height relative to the viewport size
          }}
        />
      ))}

      {/* Add VS Editor Below */}
      <VSEditor />
    </div>
  );
};

const VSEditor = () => {
  const [content, setContent] = useState(
    "I am excited to join a dynamic team where I can continue to grow, learn, and contribute to innovative software solutions. If you're looking for a motivated, team-oriented individual, feel free to reach out to me!"
  );

  const handleChange = (e) => {
    setContent(e.target.innerText);
  };

  return (
    <div className="relative bg-[#1e1e1e] text-white font-mono p-4 rounded-md shadow-lg w-full max-w-2xl mx-auto mt-8">
      <div className="absolute top-0 left-0 p-2 text-xs text-gray-500">
        {/* Simulating VS Code title bar */}
        <span>index.js - Visual Studio Code</span>
      </div>
      <div
        contentEditable
        onInput={handleChange}
        className="pt-8 px-4 pb-8 text-lg leading-relaxed outline-none bg-[#1e1e1e] caret-white"
      >
        {content}
      </div>
    </div>
  );
};

export default RadarCircles;
