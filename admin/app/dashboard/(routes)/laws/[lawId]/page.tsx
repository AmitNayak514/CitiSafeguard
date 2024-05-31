import LawForm from "@/components/LawForm";
import prismadb from "@/lib/prismadb";
import { Laws } from "@prisma/client";

const Page = async ({ params }: { params: { lawId: string } }) => {
  let laws: Laws | null = null;

  if (params.lawId !== "new") {
    laws = await prismadb.laws.findUnique({
      where: {
        id: params.lawId,
      },
    });
  }

  const categories = await prismadb.category.findMany({});

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-3 p-12 pt-6">
        <LawForm initialData={laws} categories={categories} />
      </div>
    </div>
  );
};

export default Page;
