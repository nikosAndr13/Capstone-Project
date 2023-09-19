"use client";

import Image from "next/image";
import { useEffect } from "react";
import Cert1 from "../../../assets/certification1.svg";
import Cert2 from "../../../assets/certification2.svg";
import Cert3 from "../../../assets/certification3.svg";
import Cert4 from "../../../assets/certification4.svg";
import Cert5 from "../../../assets/certification5.svg";

export const Certifications = () => {
  useEffect(() => {
    const marqueeContent = document.querySelector("div.marquee-content");
    if (marqueeContent) {
      const elmsDisplayed = Number(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--marquee-elements-displayed"
        )
      );

      document.documentElement.style.setProperty(
        "--marquee-elements",
        marqueeContent.children.length.toString()
      );

      for (let i = 1; i <= elmsDisplayed; i++) {
        marqueeContent?.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <>
      <div className="flex w-[98vw] justify-around pt-5 max-w-7xl marquee ">
        <div className="marquee-content">
          <Image
            src={Cert1}
            alt={"certification1"}
            width={100}
            height={100}
            className="w-auto h-auto "
          />
          <Image
            src={Cert2}
            alt={"certification2"}
            width={100}
            height={100}
            className="w-auto h-auto  "
            priority={true}
          />
          <Image
            src={Cert3}
            alt={"certification3"}
            width={100}
            height={100}
            className="w-auto h-auto  "
          />
          <Image
            src={Cert4}
            alt={"certification4"}
            width={100}
            height={100}
            className="w-auto h-auto  "
          />
          <Image
            src={Cert5}
            alt={"certification5"}
            width={100}
            height={100}
            className="w-auto h-auto  "
          />
        </div>
      </div>
    </>
  );
};
