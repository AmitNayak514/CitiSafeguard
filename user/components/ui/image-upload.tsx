"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  const isVideo = (url: string) => {
    const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "mkv"];
    const extension = url.split(".").pop();
    return videoExtensions.includes(extension?.toLowerCase() || "");
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className=" flex items-center gap-4 ">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
            {isVideo(url) ? (
              <video className="object-cover w-full h-full" autoPlay>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image fill className="object-cover" alt="Image" src={url} />
            )}
          </div>
        ))}
      </div>
      <div className="">
        <CldUploadWidget onUpload={onUpload} uploadPreset="bfpineag">
          {({ open }) => {
            const onClick = () => {
              open();
            };

            return (
              <Button
                type="button"
                disabled={disabled}
                variant={"secondary"}
                onClick={onClick}
              >
                <ImagePlus className="h-4 w-4 mr-2" />
                Upload an Image or Video
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>
    </>
  );
};

export default ImageUpload;
