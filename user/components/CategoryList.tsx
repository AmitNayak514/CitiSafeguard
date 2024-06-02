import { Category } from "@/types";

const CategoryList = ({ data }: { data: any }) => {
  return (
    <div className=" mt-2">
      {data.map((category: Category) => (
        <div
          key={category.id}
          className="font hover:bg-gray-400/10 cursor-pointer dark:hover:bg-gray-400/10 px-4 mb-1 text-gray-800/80 dark:text-white/85 rounded-xl py-3"
        >
          <p className="">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
