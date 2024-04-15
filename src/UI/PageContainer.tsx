import { ReactNode } from "react";

interface Props {
  darkMode: boolean;
  children: ReactNode;
}

const PageContainer = ({ darkMode, children }: Props) => {
  return (
    // Container: page background + dark class
    <div
      className={
        "min-h-screen bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark " +
        (darkMode ? " dark" : "")
      }
    >
      {/* Content Container */}
      <div className="container mx-auto px-8 pb-16">{children}</div>
    </div>
  );
};

export default PageContainer;
