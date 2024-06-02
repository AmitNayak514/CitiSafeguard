import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="md:px-24 md:py-12 px-12 py-6 bg-gray-50 dark:bg-neutral-950 h-full min-h-screen">
      {children}
    </div>
  );
};

export default Container;
