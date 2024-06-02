import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import getCategories from "@/actions/get-categories";
import CategoryList from "./CategoryList";

const SearchBar = async () => {
  const categories = await getCategories();
  return (
    <div className="">
      <div className="w-full  mb-10 h-10 hover:shadow-2xl hover:shadow-black/5 transition duration-700 dark:shadow-neutral-600/10">
        <div className="flex border bg-white flex-shrink dark:bg-black/15 border-gray-400/30 dark:border-gray-50/20 rounded-md items-center w-full h-full">
          <SearchIcon className="ml-2 w-5 h-5 bg-none  text-gray-400 " />
          <Input
            placeholder="Search..."
            className="border-none h-full  w-full bg-transparent focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
          />
        </div>
      </div>
      <h3 className="text-lg tracking-wide font-semibold">Categories</h3>
      <CategoryList data={categories} />
    </div>
  );
};

export default SearchBar;
