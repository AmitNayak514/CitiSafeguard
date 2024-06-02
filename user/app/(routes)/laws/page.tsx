import getLaws from "@/actions/get-laws";
import Heading from "@/components/Heading";
import LawsCard from "@/components/LawsCard";
import SearchBar from "@/components/SearchBar";

interface LawsPageProps {}
export const revalidate = 0;
const LawsPage = async () => {
  const laws = await getLaws();
  return (
    <div className="">
      <div className="flex">
        <Heading
          title="Laws"
          description={
            "This page shows a list of traffic laws, fines, and other related information."
          }
        />
      </div>
      <div className="md:px-24 md:py-12 px-12 py-6 bg-gray-50 dark:bg-neutral-950 h-full min-h-screen">
        <div className="grid lg:grid-cols-12 gap-3 md:gap-6 lg:gap-12 ">
          <div className="col-span-12 lg:col-span-3 ">
            <div className="sticky top-4">
              <SearchBar />
            </div>
          </div>
          <div className="col-span-12 mg:col-span-9 w-full lg:col-span-9">
            <LawsCard data={laws} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawsPage;
