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

interface LawFormProps {
  initialData: Laws | null;
  categories: Category[];
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

const LawForm: React.FC<LawFormProps> = ({ initialData, categories }) => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();

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
      imprisonment: "" || null,
      applicableTo: "",
    },
  });
  const loading = form.formState.isLoading;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        await axios.patch(`/api/laws/${params.lawId}`, data);
      } else {
        await axios.post(`/api/laws`, data);
      }
      router.push(`/dashboard/laws`);
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
      await axios.delete(`/api/laws/${params.lawId}`);
      router.push(`/dashboard/laws`);
      router.refresh();
      toast.success("Law Deleted.");
    } catch (error) {
      toast.error("Something went wrong.");
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
                    placeholder={"Name of the Law"}
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
          <FormField
            control={form.control}
            name="sections"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>Sections</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Section" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>Category</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a billboard"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem value={category.id} key={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstOffenseFine"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>First Offense Fine</FormLabel>
                <FormControl>
                  {
                    //@ts-ignore
                    <Input
                      type="number"
                      required={false}
                      disabled={loading}
                      placeholder="Fine for the first time offense"
                      {...field}
                    />
                  }
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imprisonment"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>Imprisonment</FormLabel>
                <FormControl>
                  {
                    //@ts-ignore
                    <Input
                      required={false}
                      disabled={loading}
                      placeholder="Information Related to Imprisonment"
                      {...field}
                    />
                  }
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="applicableTo"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>Applicable For</FormLabel>
                <FormControl>
                  {
                    <Input
                      disabled={loading}
                      placeholder="Whom are these laws applicable to"
                      {...field}
                    />
                  }
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

export default LawForm;
