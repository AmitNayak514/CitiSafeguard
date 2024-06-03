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
import { Report } from "@/types";
import { useState } from "react";

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
  var data: any;
  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      await navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        data = { ...formData, latitude: latitude, longitude: longitude };
      });
      if (data) {
        console.log("Data");
        console.log(data);
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/report`, data);
        toast.success("Report ticket raised successfully");
      } else {
        console.log("Form Data");
        console.log(formData);
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/report`, formData);
        toast.success("Report ticket raised successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  // const getReadableAddress = async (latitude: number, longitude: number) => {
  //   try {
  //     const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     return null;
  //   }
  // };

  const loading = form.formState.isLoading;
  return (
    <div>
      <Heading
        title={`Report a Violation`}
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
