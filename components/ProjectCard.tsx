import { FC } from "react";
import { IProject } from "../types";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import {motion} from 'framer-motion';
import {fadeInUp, stagger} from '../animations';

interface Props {
  project: IProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}

const ProjectCard: FC<Props> = ({
  project: {
    name,
    image_path,
    deployed_url,
    github_url,
    description,
    key_techs,
    id,
  },
  setShowDetail,
  showDetail,
}) => {
  return (
    <>
      <Image
        width="300"
        height="150"
        src={image_path}
        layout="responsive"
        alt={name}
        onClick={() => setShowDetail(id)}
        className="cursor-pointer"
      />

      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 rounded-lg md:p-10 bg-dark-100 text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div className="border-4 border-gray-100" variants={fadeInUp}>
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              />
            </motion.div>
            <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
              <a
                href={github_url} target="_blank" rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg rounded-sm bg-dark-500 "
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url} target="_blank" rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg rounded-sm bg-dark-500"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl ">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="my-3 text-base font-medium">{description}</motion.h3>

            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 rounded-sm bg-dark-500"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-dark-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;