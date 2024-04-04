import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: number;
}

const CardContainer = ({ children, id }: Props) => {
  return (
    <li
      className="flex flex-row items-center space-x-4 hover:cursor-pointer hover:font-medium hover hover:scale-110 hover:translate-x-4 transition-all "
      key={id}
    >
      {children}
    </li>
  );
};

export default CardContainer;
