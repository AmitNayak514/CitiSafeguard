import prismadb from "@/lib/prismadb";
import { Laws } from "@prisma/client";

const Page = async ({ params }: { params: { lawId: string } }) => {
  let law: Laws | null = null;

  if (params.lawId !== "new") {
    law = await prismadb.laws.findUnique({
      where: {
        id: params.lawId,
      },
    });
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-3 p-12 pt-6">
        <LawForm laws={laws} />
      </div>
    </div>
  );
};

export default Page;
