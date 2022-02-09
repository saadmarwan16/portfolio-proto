import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <>
      <Image
        width="150"
        height="200"
        src="/images/profile-picture.jpg"
        alt="avatar"
        className="w-32 h-32 mx-auto border rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Marwan</span> Sa-ad
      </h3>
      <p className="px-2 py-1 my-3 rounded-full bg-dark-200">
        Web & Mobile Developer
      </p>
      <a
        href="/assets/marwan_resume.pdf"
        download="Marwan Sa-ad's Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 rounded-full cursor-pointer bg-dark-200"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 cursor-pointer hover:border-green hover:border-2"
        >
          <AiFillYoutube aria-label="Youtube logo" className="w-full h-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/marwan-abdul-rahman-sa-ad-ab9a141bb"
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 cursor-pointer hover:border-green hover:border-2"
        >
          <AiFillLinkedin
            aria-label="Linkedin logo"
            className="w-full h-full"
          />
        </a>
        <a
          href="https://github.com/saadmarwan16"
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 cursor-pointer hover:border-green hover:border-2"
        >
          <AiFillGithub aria-label="Github logo" className="w-full h-full" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Denizli, Turkey</span>
        </div>
        <p className="my-2">saadmarwan16@gmail.com</p>
        <p className="my-2">(+90) 5389316741</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 mb-4 text-white rounded-full cursor-pointer bg-dark bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:saadmarwan16@gmail.com")}
      >
        Email me
      </button>
    </>
  );
};

export default Sidebar;
