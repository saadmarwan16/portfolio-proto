import { FC } from "react";
import { IService } from "../types";

interface Props {
  service: IService;
}

const ServiceCard: FC<Props> = ({ service: { Icon, title, about } }) => {
  const createMarkup = () => ({
    __html: about,
  });

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div className="">
        <h3 className="font-bold">{title}</h3>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
