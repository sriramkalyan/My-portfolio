import { motion } from "framer-motion";
import Nav from "../Components/Nav.jsx";
const arr = [0];

const Experiences = () => {
  return (
    <div className="bg-[#292929] min-h-screen flex flex-col">
      <Nav />

      <motion.div
        className="flex flex-col flex-1 md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Left Section */}
        <motion.div
          className="self-end justify-center hidden w-full h-full p-4 px-4 md:w-1/2 md:px-0 md:flex"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 15,
            duration: 0.8,
          }}
        >
          <Path />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex items-center justify-center w-full h-full px-4 mt-8 md:w-1/2 md:mt-0 md:px-0"
          initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="bg-[#3A3A3A] h-[500px] w-full sm:w-[450px] lg:w-[500px] space-y-6 flex flex-col rounded-lg p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
          >
            <motion.div
              className="pb-2 overflow-hidden text-2xl font-extrabold text-white border-b border-gray-600 sm:text-xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Frontend Developer Intern
            </motion.div>
            <motion.div
              className="overflow-hidden text-lg font-semibold text-gray-300 sm:text-base"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Weboin (May, 2025 - Nov, 2025)
            </motion.div>
            <motion.div
              className="space-y-3 overflow-hidden text-base leading-relaxed text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <div className="break-words">
                • Strong proficiency in JavaScript, including ES6+ features, enabling the development of modern and efficient web applications.
              </div>
              <div className="break-words">
                • Experience with popular React.js workflows, such as Redux and Context API, for effective state management and application scalability.
              </div>
              <div className="break-words">
                • Proficient in web markup languages, including HTML5 and CSS3, ensuring responsive and accessible web designs.
              </div>
              <div className="break-words">
                • Experience with RESTful APIs and asynchronous request handling, enabling seamless communication between frontend and backend systems.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Points = () => {
  return (
    <motion.div
      className="flex items-start gap-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.3,
      }}
    >
      <div className="text-xl font-bold text-white">Weboin</div>
      <motion.div
        className="flex-row place-items-center"
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="h-[15px] w-[15px] bg-[#898989] rounded-full"></div>
        <div className="h-[120px] w-[3px] bg-[#4D4D4D] rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

const Path = () => {
  return (
    <motion.div
      className="flex-row " 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {arr.map((item, index) => (
        <Points key={index} />
      ))}
    </motion.div>
  );
};

export default Experiences;
