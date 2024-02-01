"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface InfiniteHorizontalScrollProps {
  items: {
    quote: string;
    name: string;
    username: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const RightHorizontalScroll = ({
  items,
  direction,
  speed,
  pauseOnHover,
  className,
}: InfiniteHorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState<boolean>(false);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      const getDirection = () => {
        if (containerRef.current) {
          if (direction === "left") {
            containerRef.current.style.setProperty(
              "--animation-direction",
              "forwards"
            );
          } else {
            containerRef.current.style.setProperty(
              "--animation-direction",
              "reverse"
            );
          }
        }
      };

      const getSpeed = () => {
        if (containerRef.current) {
          if (speed === "fast") {
            containerRef.current.style.setProperty(
              "--animation-duration",
              "20s"
            );
          } else if (speed === "normal") {
            containerRef.current.style.setProperty(
              "--animation-duration",
              "40s"
            );
          } else {
            containerRef.current.style.setProperty(
              "--animation-duration",
              "80s"
            );
          }
        }
      };

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [direction, speed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items?.map((item, idx) => (
          <li
            className="relative min-h-full w-[352px] max-w-full shrink-0 rounded-xl border-2 border-zinc-700/50 bg-zinc-800 px-8 py-6 md:w-[450px]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]"
              ></div>

              <div className=" mb-4 flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={520}
                  height={520}
                  className="aspect-square size-[3.75rem] rounded-full object-cover"
                />

                <div className=" ml-4 text-white">
                  <p className="text-lg font-semibold tracking-wide antialiased">
                    {item.name}
                  </p>
                  <span className="text-sm font-normal text-muted-foreground antialiased">
                    {item.username}
                  </span>
                </div>
              </div>

              <span className=" relative z-20 text-sm font-normal leading-[1.6] text-white">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightHorizontalScroll;
