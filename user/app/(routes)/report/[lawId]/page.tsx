"use client";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ui/image-upload";
import Container from "@/components/ui/container";
import Heading from "@/components/Heading";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth, useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";

const formSchema = z.object({
  description: z.string().min(1),
  images: z.object({ url: z.string() }).array(),
  vehicleNumber: z.string().optional().nullable(),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      images: [],
      vehicleNumber: "" || null,
    },
  });

  const params = useParams();
  const { user } = useUser();

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const data = {
            ...formData,
            latitude: latitude,
            longitude: longitude,
            userId: user?.id,
            lawId: params.lawId,
            userName: user?.fullName,
          };
          console.log(data);
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/report`, data);
          toast.success("Report ticket raised successfully");
        },
        async () => {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/report`, {
            ...formData,
            userId: user?.id,
            lawId: params.lawId,
            userName: user?.fullName,
          });
          toast.success("Report ticket raised successfully");
        }
      );
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const loading = form.formState.isSubmitting;

  return (
    <div>
      <Heading
        title="Report a Violation"
        description="Please provide the details of the violation or crime you witnessed. Your report helps us keep our roads safer."
      />
      <Container>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Describe the event..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="images"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel className="m-0 p-0">
                      Images or Video for the observed crime
                    </FormLabel>
                    <FormControl className="p-0 m-0">
                      <ImageUpload
                        disabled={loading}
                        onRemove={(url) =>
                          field.onChange([
                            ...field.value.filter(
                              (current) => current.url !== url
                            ),
                          ])
                        }
                        onChange={(url) =>
                          field.onChange([...field.value, { url }])
                        }
                        value={field.value.map((image) => image.url)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="vehicleNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>
                      Vehicle Number{" "}
                      <span className="text-muted-foreground">{`(optional)`}</span>
                    </FormLabel>
                    <FormControl>
                      {
                        //@ts-ignore
                        <Input
                          disabled={loading}
                          placeholder="Number of the vehicle (optional)...."
                          {...field}
                        />
                      }
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading}>
                Create
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Page;
