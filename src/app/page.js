import Image from "next/image";
import outlineStyle from "./dynamic.module.css";


export default function Home() {
  return (
    <>
  <div className="flex h-screen ">
      <div className="bg-left w-4/12 bg-[#852102]">
        <div className="absolute tracking-wide top-16 text-gray-100 font-bold font-mono left-[24.50rem] z-10">
          HASSAN HAMEED
        </div>
        <nav className="top-10 left-10 absolute">
          <img
            className="h-16 w-16 "
            src="https://chungiyoo.com/img/faces/smile%2001.svg"
            alt="logo"
          />
        </nav>
      </div>
      <div className={outlineStyle.gapping}>
        <div className="top-56 left-48 absolute text-white font-black text-7xl  leading-[60px] transform uppercase z-10">
          Nature <br /> Morte <br /> for <br /> harper's
        </div>
      </div>
      <Image
        src="/side-img.jpg"
        alt="right-img"
        width={500}
        height={500}
        className=" h-92 w-72 absolute top-52 right-16 z-10"
      />
      <div className={outlineStyle.outlined}>
        <div className=" transform uppercase text-transparent rotate-90 top-[262px]  right-[-11.25rem] absolute font-black  text-5xl z-10 ">
          Winter Collection
        </div>
      </div>
      <div className=" bg-center w-7/12 z-0">
        <Image
          className="flex justify-center w-screen items-center h-screen saturate-150 brightness-75"
          src="/cover-img.jpg"
          alt="front-img"
          width={500}
          height={500}
        />
      </div>
      <div className="bg-right w-1/12 bg-[#9e561c]"></div>
    </div>
    </>
  );
}
