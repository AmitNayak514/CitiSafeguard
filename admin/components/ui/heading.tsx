import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col align-start">
      <h2 className="text-black/80 dark:text-white text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground"> {description}</p>
    </div>
  );
};

export default Heading;
