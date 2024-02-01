import LeftHorizontalScroll from "@/components/LeftHorizontalScroll";
import RightHorizontalScroll from "@/components/RightHorizontalScroll";
import { leftTestimonials, rightTestimonials } from "@/data/testimonials";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden  bg-zinc-900  py-12 antialiased">
      <div className="mx-auto w-full pb-10 text-center sm:w-4/5 lg:w-1/2">
        <h1 className="text-4xl font-semibold leading-tight text-white antialiased">
          Loved by thousands of creatives from around the world
        </h1>
      </div>
      <LeftHorizontalScroll
        items={leftTestimonials}
        direction="left"
        speed="slow"
        pauseOnHover
      />
      <RightHorizontalScroll
        items={rightTestimonials}
        direction="right"
        speed="slow"
        pauseOnHover
      />
    </div>
  );
};

export default page;
