"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import axios from "axios";
import { Laws, Category } from "@prisma/client";
import { useParams } from "next/navigation";
import Heading from "./ui/heading";

interface LawFormProps {
  initialData: Laws | null;
  category: Category;
}

const formSchema = z.object({
  name: z.string().min(1),
  categoryId: z.string().min(1),
  description: z.string().min(1),
  sections: z.string().min(1),
  firstOffenseFine: z.coerce.number().optional().nullable(),
  fine: z.coerce.number().min(1),
  imprisonment: z.string().optional().nullable(),
  applicableTo: z.string().min(1),
});

const LawForm: React.FC<LawFormProps> = ({ initialData, category }) => {
  const params = useParams();
  const title = initialData ? "Edit Law" : "Create Law";
  const description = initialData ? "Edit a Law." : "Add a New Law.";
  const toastMessage = initialData ? "Law Updated." : "Law Created.";
  const action = initialData ? "Save Changes" : "Create";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      categoryId: "",
      description: "",
      sections: "",
      firstOffenseFine: 0 || null,
      fine: 0,
      imprisonment: 0 || null,
      applicableTo: "",
    },
  });

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
    </div>
  );
};

export default LawForm;
