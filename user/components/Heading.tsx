interface HeadingProps {
  title: string;
  description?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="md:px-24 md:py-12 px-12 py-8 flex flex-col border-b w-full  bg-gray-50/40 dark:bg-black/15 border-gray-400/30 dark:border-gray-50/20">
      <h1 className="text-3xl font-bold mb-1">{title}</h1>
      <p className="text-black dark:text-muted-foreground">{description} </p>
    </div>
  );
};

export default Heading;
