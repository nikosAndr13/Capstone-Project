import Image from "next/image";
import Card1 from "../../assets/card1.svg";
import Card2 from "../../assets/card2.svg";
import Card3 from "../../assets/card3.svg";
import Card4 from "../../assets/card4.svg";

const images = {
  card1: Card1,
  card2: Card2,
  card3: Card3,
  card4: Card4,
} as const;

export type ImageName = keyof typeof images;

export const SmallCard = ({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: ImageName;
}) => {
  const currImage = images[img];

  return (
    <div className="flex flex-col space-evenly h-[150px] gap-y-3 flex-wrap w-[14rem] max-[768px]:w-[12rem] max-[768px]:h-[200px]">
      <Image src={currImage} alt="card1" />
      <h1 className="font-bold">{title}</h1>
      <small>{text}</small>
    </div>
  );
};
