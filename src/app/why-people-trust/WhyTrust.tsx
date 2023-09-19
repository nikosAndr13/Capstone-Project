import Image from "next/image";
import Microscope from "../../../assets/microscope.svg";
import { SmallCard } from "@/components/smallCard";

export const WhyTrust = () => {
  return (
    <>
      <div className="flex justify-center gap-[80px] mt-36 items-center ml-48 justify-between max-[820px]:flex-col max-[820px]:ml-2">
        <div>
          <Image
            src={Microscope}
            className="w-[300px]"
            priority={true}
            alt="microscope"
          />
        </div>
        <div className="flex flex-wrap w-full max-w-2xl gap-10 flex-wrap justify-center max-[820px]:w-[80vw] max-[820px]:ml-10">
          <SmallCard
            title={"High Quality Lab"}
            text={
              "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt"
            }
            img={"card1"}
          />
          <SmallCard
            title={"Unmatched Expertise"}
            text={
              "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt"
            }
            img={"card2"}
          />
          <SmallCard
            title={"Precise Results"}
            text={
              "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt"
            }
            img={"card3"}
          />
          <SmallCard
            title={"Quality Staff"}
            text={
              "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt"
            }
            img={"card4"}
          />
        </div>
      </div>
    </>
  );
};
