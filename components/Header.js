import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [classLottie1, setClassLottie1] = useState();
  const [classLottie2, setClassLottie2] = useState('hidden');
  const [classLottie3, setClassLottie3] = useState('hidden');
  const [lottieValue, setLottieValue] = useState("lottieTemplate");

  const handleClick = (e) => {
    if (e === "lottieTemplate") {
      setLottieValue("lottieTemplate");
      setClassLottie1("");
      setClassLottie2("hidden");
      setClassLottie3("hidden");
    } else if (e === "lottieCustom") {
      setLottieValue("lottieCustom");
      setClassLottie1("hidden");
      setClassLottie2("");
      setClassLottie3("hidden");
    } else if (e === "lottieDeploy") {
      setLottieValue("lottieDeploy");
      setClassLottie1("hidden");
      setClassLottie2("hidden");
      setClassLottie3("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (lottieValue === "lottieTemplate") {
        setLottieValue("lottieCustom");
        setClassLottie1("hidden");
        setClassLottie2("");
        setClassLottie3("hidden");
      } else if (lottieValue === "lottieCustom") {
        setLottieValue("lottieDeploy");
        setClassLottie1("hidden");
        setClassLottie2("hidden");
        setClassLottie3("");
      } else if (lottieValue === "lottieDeploy") {
        setLottieValue("lottieTemplate");
        setClassLottie1("");
        setClassLottie2("hidden");
        setClassLottie3("hidden");
      }
    }, 5500);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="container mx-auto px-6 lg:px-32">
        <div className="relative mt-10 h-96 md:h-72 rounded-3xl bg-sky-500 shadow-lg lg:mx-28 lg:mt-20">
          <div className="flex justify-between p-10 lg:pt-16">
            <div>
              <h6 className="text-sm font-medium text-white">
                GET WEBSITE YOU NOW
              </h6>
              <h1 className="mt-2 text-2xl font-semibold text-white md:text-4xl lg:text-5xl">
                Landing page
                <br />
                ----Responsive
              </h1>
            </div>
            <div>
              <Player
                className={classLottie1 + ` absolute bottom-0 right-0 top-[9rem] w-[300px] md:-top-4 md:w-[400px] lg:-top-16 lg:-right-10 lg:h-[400px] lg:w-[400px]`}
                autoplay={true}
                loop={true}
                src="json/lottieTemplate.json"
              ></Player>
              <Player
                className={classLottie2 + ` absolute bottom-0 right-[-0.5rem] top-[7rem] w-[300px] md:-top-4 md:w-[400px] lg:-top-16 lg:-right-10 lg:h-[400px] lg:w-[400px] `}
                autoplay={true}
                loop={true}
                speed={0.5}
                src="json/lottieWebCustom.json"
              ></Player>
              <Player
                className={classLottie3 + ` absolute -bottom-6 right-10 top-[9rem]  w-[250px] md:w-[350px] md:-top-4 lg:-top-4 lg:-right-4 lg:h-[350px] lg:w-[350px]`}
                autoplay={true}
                loop={true}
                src="json/lottieWebDeploy.json"
              ></Player>
            </div>
          </div>
          <div className="absolute -bottom-5 left-10 hidden md:block lg:block">
            <div className="flex gap-2">
              <div
                className="group flex cursor-pointer rounded-xl bg-white shadow-xl duration-300 hover:scale-105 active:scale-50 md:h-12 md:px-2 lg:h-14 lg:w-28"
                onClick={() => handleClick("lottieTemplate")}
              >
                <div className="m-auto mr-2 rounded-full border-[1px] border-black bg-sky-400 p-2 duration-100 group-hover:border-r-4"></div>
                <h2 className="m-auto ml-0 text-xs font-semibold text-slate-600">
                  Template
                </h2>
              </div>
              <div
                className="group flex w-28 cursor-pointer rounded-xl bg-white shadow-xl duration-300 hover:scale-105 active:scale-50 md:h-12 md:px-2 lg:h-14"
                onClick={() => handleClick("lottieCustom")}
              >
                <div className="m-auto mr-2 rounded-full border-[1px] border-black bg-yellow-400 p-2 duration-100 group-hover:border-r-4"></div>
                <h2 className="m-auto ml-0 text-xs font-semibold text-slate-600">
                  Custom
                </h2>
              </div>
              <div
                className="group flex w-28 cursor-pointer rounded-xl bg-white shadow-xl duration-300 hover:scale-105 active:scale-50 md:h-12 md:px-2 lg:h-14"
                onClick={() => handleClick("lottieDeploy")}
              >
                <div className="m-auto mr-2 rounded-full border border-black bg-green-400 p-2 duration-100 group-hover:border-r-4"></div>
                <h2 className="m-auto ml-0 text-xs font-semibold text-slate-600">
                  Deploy
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 block text-center md:hidden lg:hidden">
          <div className="text-[8px] text-slate-500">SCROLL DOWN</div>
          <Player
            className="w-[30px] opacity-60"
            autoplay={true}
            loop={true}
            speed={0.4}
            src="json/lottieArrowDown.json"
          ></Player>
        </div>
      </div>
    </div>
  );
}
