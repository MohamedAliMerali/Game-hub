import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    // card container
    <div className="w-full max-w-[23rem] mb-12 mx-auto rounded-3xl overflow-hidden dark:bg-secondary-dark shadow-xl hover:cursor-pointer hover:scale-105 transition-transform- duration-200 ease-in-out">
      {children}
    </div>
  );
};

export default CardContainer;
