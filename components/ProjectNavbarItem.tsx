import { FC } from "react";
import { Category } from "../types";

interface Props {
  value: Category | "all";
  active: string;
  handleFilterCategory: (category: Category | "all") => void;
}

const ProjectNavbarItem: FC<Props> = ({
  value,
  active,
  handleFilterCategory,
}) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

export default ProjectNavbarItem;
