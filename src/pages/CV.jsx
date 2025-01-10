import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Nav from "../Components/Nav"
const resumeData = {
  personalInfo: {
    name: "SRIRAM K",
    email: "sriramkalyan710@gmail.com",
    phone: "+91 9025038755",
    address: "T.K Kabali Street, Taramani, Chennai-600113",
    linkedin: "https://www.linkedin.com/in/sriram-k",
    github: "https://github.com/sriramkalyan",
  },
  education: [
    {
      degree: "BTech Information Technology",
      institution: "ST.JOSEPH'S INSTITUTE OF TECHNOLOGY",
      duration: "2020 – 2024",
      location: "CHENNAI",
      cgpa: "7.93",
    },
    {
      degree: "HSC",
      institution: "SARASWATHI VIDYALAYA HIGHER SECONDARY SCHOOL",
      duration: "2019 – 2020",
      location: "MUTHUPETTAI",
      percentage: "65.3%",
    },
    {
      degree: "SSLC",
      institution: "BRINDHAVAN HIGHER SECONDARY SCHOOL",
      duration: "2017 – 2018",
      location: "PATTUKOTTAI",
      percentage: "77%",
    },
  ],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "WEBOIN",
      duration: "6 Months",
      responsibilities: [
        "Develop and maintain responsive web applications using React.",
        "Integrate RESTful APIs to fetch and manage data.",
        "Ensure cross-browser compatibility and responsiveness.",
        "Participate in code reviews and manage version control using Git.",
      ],
    },
  ],
  workshops: [
    "FullStack (MERN) - Stigmata Techno Solutions, Chennai",
    "UI/UX Kick Starter - Plugin Live Technologies Pvt Ltd, Chennai",
    "Linux Workshop - Redhat Academy, Chennai",
  ],
  certifications: [
    "AWS Academy Cloud Foundation",
    "Red-Hat Open Source Technology",
    "Java React Full Stack Development (Value-added)",
  ],
  skills: [
    "OOPS", "Java", "JavaScript", "React", "MySQL", "Tailwind CSS", "Git",
  ],
  projects: [
    {
      title: "Designer Collaborative Platform",
      description: "A platform that connects designers globally to collaborate and share ideas.",
      stack: "Frontend: React, Backend: Node.js, Database: MongoDB",
    },
    {
      title: "Churn Rate Detection and Prevention",
      description: "A model to predict customer churn and find ways to retain customers in telecom.",
      responsibilities: [
        "Label Encoding: Converted categorical variables to numerical values.",
        "Data Cleaning: Removed duplicates, handled missing values.",
        "Standard Scaling: Applied scaling techniques to normalize data.",
      ],
    },
  ],
};

const Resume = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='bg-[#292929] text-[#898989]'>
      <Nav/>
      {/* Personal Info Section (Centered at the top) */}
      <div className="py-8 text-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold text-white">{resumeData.personalInfo.name}</h1>
          <p className="text-xl">{resumeData.personalInfo.email}</p>
          <p className="text-xl">{resumeData.personalInfo.phone}</p>
          <p className="text-xl">{resumeData.personalInfo.address}</p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition duration-300"
            >
              <FaLinkedin className="inline-block mr-2" />
              LinkedIn
            </a>
            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition duration-300"
            >
              <FaGithub className="inline-block mr-2" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Content Section (Left to Right Layout) */}
      <div className="flex flex-col gap-8 p-8 space-y-8 lg:flex-row">
        {/* Left content */}
        <div className="space-y-8 lg:w-1/2">
          {/* Education */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Education</h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p>{edu.institution} - {edu.location} ({edu.duration})</p>
                {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                {edu.percentage && <p>Percentage: {edu.percentage}</p>}
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Skills</h2>
            <ul className="space-y-2 list-disc list-inside">
              {resumeData.skills.map((skill, idx) => (
                <li key={idx} className="text-lg">{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Projects</h2>
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p>{project.description}</p>
                {project.stack && <p className="italic">{project.stack}</p>}
                {project.responsibilities && (
                  <ul className="pl-6 list-disc">
                    {project.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right content */}
        <div className="space-y-8 lg:w-1/2">
          {/* Experience */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Experience</h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
                <p>{exp.duration}</p>
                <ul className="pl-6 list-disc">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Workshops */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Workshops</h2>
            <ul className="space-y-2 list-disc list-inside">
              {resumeData.workshops.map((workshop, idx) => (
                <li key={idx} className="text-lg">{workshop}</li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Certifications</h2>
            <ul className="space-y-2 list-disc list-inside">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="text-lg">{cert}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
