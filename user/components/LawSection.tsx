import getLaws from "@/actions/get-laws";
import LawsCard from "./LawsCard";
import SearchBar from "./SearchBar";
import ImageUpload from "./ui/image-upload";

export const revalidate = 0;

const LawSection: React.FC = async () => {
  const laws = await getLaws();

  return (
    <div>
      <div className="grid lg:grid-cols-12 gap-3 md:gap-6 lg:gap-12 ">
        <div className="col-span-12 lg:col-span-3 ">
          <div className="sticky top-6">
            <SearchBar />
          </div>
        </div>
        <div className="col-span-12 mg:col-span-9 w-full lg:col-span-9">
          <LawsCard data={laws} />
        </div>
      </div>
    </div>
  );
};

export default LawSection;
