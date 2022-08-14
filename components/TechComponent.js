import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

export default function TechComponent() {
    return (
        <div>
            <div className="container mx-auto mt-8 px-8 md:mt-20 lg:mt-24 lg:px-32">
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-8">
                        <div>
                            <Image
                                src="/images/tailwind_logo.png"
                                alt="Tailwind CSS"
                                width={110}
                                height={20}
                                className="grayscale contrast-50 opacity-50"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/gsap_logo.png"
                                alt="gsap logo"
                                height={50}
                                width={100}
                                className="grayscale contrast-50 opacity-50"
                            />
                        </div>
                    </div>
                    <div className="text-center hidden md:block lg:block">
                        <div className="text-[8px] text-slate-500">SCROLL DOWN</div>
                        <Player
                            className="w-[30px] opacity-60"
                            autoplay={true}
                            loop={true}
                            speed={0.4}
                            src="https://assets5.lottiefiles.com/packages/lf20_EdAmna.json"
                        ></Player>
                    </div>
                    <div className="flex items-center gap-8">
                        <div>
                            <Image
                                src="/images/lottie_logo.png"
                                alt="lottie logo"
                                width={100}
                                height={20}
                                className="grayscale contrast-50 opacity-50"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/vercel_logo.png"
                                alt="vercel logo"
                                width={100}
                                height={25}
                                className="grayscale contrast-50 opacity-50"   
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
