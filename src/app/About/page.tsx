import Sampling from "../../../assets/sampling.svg";
import Image from "next/image";
import { SmallCard } from "@/components/smallCard";
import { ImageName } from "@/components/smallCard";
import { Fragment } from "react";
import { NavBar } from "@/components/navbar";

interface cards {
  title: string;
  text: string;
  img: ImageName;
}

const cardData: cards[] = [
  {
    title: "High Quality Lab",
    text: "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt",
    img: "card1",
  },
  {
    title: "Unmatched Expertise",
    text: "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt",
    img: "card2",
  },
  {
    title: "Precise Results",
    text: "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt",
    img: "card3",
  },
  {
    title: "Quality Staff",
    text: "In iaculis nisi, a tempor diam luctus elitvulputate aliquet proin tincidunt",
    img: "card4",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col h-[100vh] gap-[150px] max-w-7xl m-auto mt-[20vh]">
        <section className="flex flex-col  max-[820px]:ml-14">
          <h1 className="text-6xl font-semibold max-[440px]:text-2xl">
            About us
          </h1>
          <h3 className="w-[20vw]  max-[820px]:w-[40vw] max-[440px]:w-[80vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </h3>
        </section>
        <section className="flex justify-between ">
          <div className="w-[50%] max-[820px]:flex-col max-[820px]:ml-12 max-[820px]:w-[75vw]">
            <h2 className="text-5xl font-bold pb-4 max-[440px]:text-2xl">
              We Employ Latest Research Technology & Company
            </h2>
            <p className="pb-4">
              Urna congue faucibus rhoncus a ultrices nec at pulvinar convallis
              ac vitae amet condimentum risus pharetra rhoncus pretium consequat
              cras feugiat lorem nam non.
            </p>
            <p className="pb-2">
              Pulvinar proin sit neque pellentesque elementum purus faucibus
              nunc tincidunt lorem sed posuere velit condimentum scelerisque
              varius tempor in amet cum pharetra malesuada nisl, urna congue
              faucibus rhoncus a ultrices nec at pulvinar convallis ac vitae
              amet condimentum risus pharetra rhoncus pretium consequat cras
              feugiat lorem nam non.
            </p>
          </div>
          <div className="absolute right-[15vw] top-[30vh]  max-[820px]:absolute  max-[820px]:right-[90px]  max-[820px]:top-[100px]  max-[820px]:w-[200px] max-[600px]:hidden">
            <Image src={Sampling} alt="sample" width={350} />
          </div>
        </section>
        <div className="flex flex-col  justify-around items-center gap-[140px]">
          <h2 className="text-5xl font-semibold max-[440px]:text-2xl">
            Why Choose us
          </h2>
          <div className="flex gap-3 justify-between w-full max-[820px]:w-[80vw] max-[820px]:ml-10 max-[820px]:flex-wrap max-[440px]:w-[50vw]">
            {cardData.map((card: cards, index: number) => {
              const { title, text, img } = card;
              return (
                <Fragment key={index}>
                  <SmallCard title={title} text={text} img={img} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <footer className="text-center text-sm">
          Copyright © 2023 Diagnostics Lab | Powered by Diagnostics Lab
        </footer>
      </div>
    </>
  );
}
