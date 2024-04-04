import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    // card container
    <div className="w-full max-w-md mb-12 mx-auto rounded-3xl overflow-hidden dark:bg-secondary-dark shadow-xl">
      {children}
    </div>
  );
};

export default CardContainer;
