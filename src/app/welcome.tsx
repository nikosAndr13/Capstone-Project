import Image from "next/image";
import Doc from "../../assets/doctor-with-his-arms-crossed-white-background.jpg";
import { FadeInAnimation } from "@/components/FadeInAnimation";
import Link from "next/link";

export const Welcome = () => {
  return (
    <>
      <div className="flex mt-40 max-[820px]:w-[93vw]">
        <FadeInAnimation>
          <div className="flex flex-col gap-5 w-[60vw]">
            <h3 className="text-[#1B5FC1]">Welcome To PointLab</h3>
            <h1 className="text-stone-950 font-semibold text-5xl max-[820px]:text-3xl">
              Tired of searching for a doctor? <br /> We got you covered!
            </h1>
            <p className="w-[40vw] max-[820px]:w-[60vw] max-[820px]:text-sm">
              Lacinia in netus vel a, scelerisque mauris quis et, purus blandit
              sapien, pharetra, viverra volutpat risus non tortor, cras egestas
              et maecenas facilisi imperdiet quam fringilla dui mauris enim, nec
              arcu, interdum sit nisi est facilisi sodales viverra proin et.
            </p>
            <button
              className="p-3 rounded-md bg-sky-700 text-white hover:bg-sky-600 w-48
                transition duration-170 ease-in-out hover:ease-in-out shadow-2xl shadow-[#1B5FC1] hover:shadow-[#A1C1C1]"
            >
              <Link href={"/Search"}>Go to Specializations</Link>
            </button>
          </div>
        </FadeInAnimation>
        <FadeInAnimation extraStyles="delay-200">
          <Image
            src={Doc}
            className="rounded-full w-[500px] max-[820px]:h-[250px] max-[820px]:w-[280px] max-[820px]:relative
             max-[820px]:top-[-20px] max-[768px]:left-[20px] max-[440px]:h-[140px] max-[440px]:top-[40px]"
            priority={true}
            alt="Doctor"
          />
        </FadeInAnimation>
      </div>
    </>
  );
};
