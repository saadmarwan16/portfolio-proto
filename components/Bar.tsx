import { FC } from "react";
import { ISkill } from "../types";

interface Props {
  value: ISkill;
}

const Bar: FC<Props> = ({ value: { Icon, level, name } }) => {
  const bar_width = `${level}%`;

  return (
    <div className="my-2 text-white rounded-full bg-dark-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
        style={{ width: bar_width }}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};

export default Bar;
