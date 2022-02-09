import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./types";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projectsData: IProject[] = [
  {
    id: 0,
    name: "Portfolio",
    description:
      "A website to showcase myself, my software development journey as well as the projects I have done along the way",
    image_path: "/images/portfolio.png",
    deployed_url: "https://google.com",
    github_url: "https://github.com/saadmarwan16/portfolio",
    category: ["next", "tailwind"],
    key_techs: ["HTML", "CSS3", "Typescript", "Next.js", "Tailwind css", "Framer motion"],
  },
  {
    id: 1,
    name: "Passwordio",
    image_path: "/images/passwordio.png",
    deployed_url: "https://loving-wescoff-2d4891.netlify.app/",
    github_url: "https://github.com/saadmarwan16/passwordio",
    category: ["react", "material"],
    description:
      "Passwordio is a web app that allows individuals to generate secure passwords",
    key_techs: ["HTML", "CSS3", "Typescript", "React", "Material UI"],
  },

  {
    id: 2,
    name: "Calculatezen",
    image_path: "/images/calculatezen.png",
    deployed_url: "https://vigilant-curie-e0f7e7.netlify.app/",
    github_url: "https://github.com/saadmarwan16/calculatezen",
    category: ["react", "material"],
    description:
      "Calculatezen is a web app that users can use to do all their basic calculation needs",
    key_techs: ["HTML", "CSS3", "Typescript", "React", "Material UI"],
  },
];
