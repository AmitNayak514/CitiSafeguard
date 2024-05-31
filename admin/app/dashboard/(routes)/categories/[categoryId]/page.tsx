import CategoryForm from "@/components/CategoryForm";
import prismadb from "@/lib/prismadb";
import { Category } from "@prisma/client";

const Page = async ({ params }: { params: { categoryId: string } }) => {
  let categories: Category | null = null;

  if (params.categoryId !== "new") {
    categories = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-3 p-12 pt-6">
        <CategoryForm initialData={categories} />
      </div>
    </div>
  );
};

export default Page;
