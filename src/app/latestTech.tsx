import team from "../../assets/techTeam.svg";
import signature from "../../assets/signOfCeo.svg";
import Image from "next/image";
import Social from "../../assets/socialRatings.svg";
import { FadeInAnimation } from "@/components/FadeInAnimation";

export const LatestTech = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-y-20 mt-20">
        <div className="flex items-center  justify-between gap-10 max-[440px]:flex-col">
          <FadeInAnimation>
            <Image
              src={team}
              alt="team"
              className={"w-[410px] h-[auto] max-[440px]:p-6"}
              priority={false}
            />
          </FadeInAnimation>
          <div className="flex w-[30vw] flex-col gap-4 max-[440px]:w-[80vw]">
            <h2 className="font-bold text-3xl">
              We Employ Latest Research Technology & Company
            </h2>
            <p>
              Pulvinar proin sit neque pellentesque elementum purus faucibus
              nunc tincidunt lorem sed posuere velit condimentum scelerisque
              varius tempor in amet cum pharetra malesuada nisl, urna congue
              faucibus rhoncus a ultrices nec at pulvinar convallis ac vitae
              amet condimentum risus pharetra rhoncus pretium consequat cras
              feugiat lorem nam non.
            </p>
            <p className="text-xs">
              “Viverra nec consectetur dictum at pulvinar ac ornare sed a
              fringilla integer varius metus ac, cras purus vulputate ultrices
              amet, sit porta hac mattis.”
            </p>
            <Image
              src={signature}
              alt={"signature"}
              className={"w-[70px] h-[auto]"}
            />
          </div>
        </div>
        <div className="shadow-neutral-600 shadow-2xl">
          <Image
            src={Social}
            alt="social"
            priority={true}
            className="w-[800px] max-[820px]:w-[600px]"
          />
        </div>
      </div>
    </>
  );
};
