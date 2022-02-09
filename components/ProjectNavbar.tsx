import { FC } from "react";
import { Category } from "../types";
import ProjectNavbarItem from "./ProjectNavbarItem";

interface Props {
  handleFilterCategory: (category: Category | "all") => void;
  active: string;
}

const ProjectNavbar: FC<Props> = (props) => {
  return (
    <nav className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ProjectNavbarItem value="all" {...props} />
      <ProjectNavbarItem value="react" {...props} />
      <ProjectNavbarItem value="flutter" {...props} />
      <ProjectNavbarItem value="next" {...props} />
      <ProjectNavbarItem value="firebase" {...props} />
      <ProjectNavbarItem value="material" {...props} />
      <ProjectNavbarItem value="tailwind" {...props} />
    </nav>
  );
};

export default ProjectNavbar;
