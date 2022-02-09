import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projectsData } from "../data";
import { Category } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animations";

const projects: NextPage = () => {
  const [projectsList, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<null | Number>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ maxHeight: "100vh" }}
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Projects - Marwan Sa-ad | Portfolio</title>
      </Head>
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-4 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projectsList.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.id}
            className="col-span-4 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-2"
          >
            <ProjectCard
              project={project}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default projects;
