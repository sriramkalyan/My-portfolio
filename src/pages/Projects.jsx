import Nav from "../Components/Nav.jsx";
import { motion } from "framer-motion";
import styled from "styled-components";

const projectsData = [
  {
    title: "Churn Rate Detection and Prevention",
    description: `
      Relieve Customer Stress and help them retain in the respective telecom service. 
      - Predict the churning of the customer
      - Find the accuracy of an efficient algorithm
      - Identify pain points and provide solutions to retain customers

      Key Responsibilities:
      - Label Encoding: Converted categorical variables into numerical values to prepare for model training.
      - Data Cleaning: Removed duplicates, handled missing values, and ensured data consistency to improve model accuracy.
      - Standard Scaling: Applied standard scaling techniques to normalize data for equal feature contribution.`,
    link: "#",
  },
  {
    title: "Designer Collaborative Platform",
    description: `
      A platform that brings together designers from all over the world to collaborate, exchange ideas, and provide feedback on each other's work. 
      The community creates a space for designers to connect, learn, and grow by sharing their design process, challenges, and successes.

      Tech Stack:
      - Frontend: React
      - Backend: Node.js
      - Database: MongoDB`,
    link: "#",
  },
  {
    title: "MyPortfolio",
    description: `
      A personal portfolio showcasing projects, skills, and experiences in an organized and visually appealing manner.`,
    link: "https://example.com/portfolio",
  },
];

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background-color: #3a3a3a;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: justify;
  color: #666;
`;

const Projects = () => {
  return (
    <div className="bg-[#292929] min-h-screen">
      <Nav />
      <div className="pt-8">
        <ProjectList projects={projectsData} />
      </div>
    </div>
  );
};

const ProjectList = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ProjectContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
        </Card>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
