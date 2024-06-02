"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import axios from "axios";
import { Laws, Category } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import Heading from "./ui/heading";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import toast from "react-hot-toast";

interface CategoryFormProps {
  initialData: Category | null;
}

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

const CategoryForm: React.FC<CategoryFormProps> = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const title = initialData ? "Edit Category." : "Create Category.";
  const description = initialData ? "Edit a Category." : "Add a New Category.";
  const toastMessage = initialData ? "Category Updated." : "Category Created.";
  const action = initialData ? "Save Changes" : "Create";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
    },
  });
  const loading = form.formState.isLoading;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        await axios.patch(`/api/categories/${params.categoryId}`, data);
      } else {
        await axios.post(`/api/categories`, data);
      }
      router.push(`/dashboard/categories`);
      router.refresh();
      toast.success(toastMessage);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setOpen(false);
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(`/api/categories/${params.categoryId}`);
      router.push(`/dashboard/categories`);
      router.refresh();
      toast.success("Category Deleted.");
    } catch (error) {
      toast.error("Remove all laws using this categories first.");
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-3">
        <Heading title={title} description={description} />
        {true && (
          <Button
            variant="destructive"
            size={"sm"}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash className="h-4 w-4 " />
          </Button>
        )}
      </div>
      <Separator className="mb-2" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className=" mb-5">
                <FormLabel className="">Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder={"Name of the Category"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel className="">Description</FormLabel>
                <FormControl className="">
                  <Input
                    disabled={loading}
                    placeholder="Description for the law"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CategoryForm;
