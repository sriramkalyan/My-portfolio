import { motion } from "framer-motion";
import Nav from "../Components/Nav.jsx";
import {
  FaGit,
  FaReact,
  FaJava,
  FaJsSquare,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

// Skill data
const Data = [
  { name: "Java", level: 3.5 },
  { name: "JavaScript", level: 3.5 },
  { name: "React", level: 4 },
  { name: "MySQL", level: 2.5 },
];

// Skill icons
const skillIcons = [
  <FaGit size={40} />,
  <FaReact size={40} />,
  <FaJava size={40} />,
  <FaJsSquare size={40} />,
  <FaDatabase size={40} />,
  <FaHtml5 size={40} />,
  <FaCss3Alt size={40} />,
  <FaNodeJs size={40} />,
];

function Skills() {
  return (
    <div className="bg-[#292929] min-h-screen">
      <Nav />
      <div className="flex flex-col h-screen p-4 md:flex-row">
        {/* Skills Section */}
        <div className="flex flex-col items-center justify-center w-full space-y-8 md:w-1/2">
          <div className="text-2xl font-bold text-white sm:text-xl">Skills</div>
          {Data.map((item, index) => (
            <EachSkill key={index} skill={item.name} level={item.level} />
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center justify-center w-full mt-8 md:w-1/2 md:mt-0">
          <motion.div
            className="grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {skillIcons.map((icon, index) => (
              <AnimatedWidget key={index} image={icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function EachSkill({ skill, level }) {
  return (
    <div className="flex flex-col space-y-2 text-white">
      <div className="text-lg sm:text-md">{skill}</div>
      <div className="relative w-[300px] max-w-xs h-[10px] border border-[#727272]">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#727272]"
          initial={{ width: "0%" }}
          animate={{ width: `${level * 20}%` }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
    </div>
  );
}


function AnimatedWidget({ image }) {
  return (
    <motion.div
      className="flex justify-center items-center bg-[#898989] h-[60px] w-[60px] rounded-[10%] shadow-lg"
      initial={{ scale: 0, opacity: 0, rotate: -90 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: Math.random() * 0.5, // Add a random delay for staggered animation
      }}
    >
      {image}
    </motion.div>
  );
}

export default Skills;
