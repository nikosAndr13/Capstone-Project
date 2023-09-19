"use client";
import { ReactElement } from "react";
import { useInView } from "react-intersection-observer";

type FadeInAnimation = {
  extraStyles?: string;
  children: ReactElement;
};

export const FadeInAnimation = ({ extraStyles, children }: FadeInAnimation) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <>
      <div
        ref={ref}
        className={`${
          inView ? "opacity-100" : "opacity-0"
        } transition 200ms easeInOut ${extraStyles}`}
      >
        {children}
      </div>
    </>
  );
};
