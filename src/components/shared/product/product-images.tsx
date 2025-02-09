"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductImagesProps = {
  images: string[];
};

const ProductImages = ({ images }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={image}
              width={100}
              height={100}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "border mr-2 cursor-pointer hover:border-orange-600 transition-all duration-300",
                currentImage === index && "border-orange-500"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
