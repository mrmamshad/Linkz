import React from "react";
import { TbExternalLink } from "react-icons/tb";
import video from "../assets/video.mp4";

const ProfileBox = () => {
    return (
        <div className="max-w-xl  sm:mt-40  mt-10 flex flex-col  text-black   mx-auto bg-white/35  rounded-[26px] overflow-hidden shadow-lg">
            <div className="relative h-[200px] rounded-lg overflow-hidden  ">
                {/* Video Background */}
                <video
                    className="absolute inset-0 w-full h-full object-cover p-5 rounded-[30px]  "
                    src={video} 
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </div>

            <div className="relative flex justify-center  -mt-16 z-10 ">
                <img
                    className="w-24 h-24 rounded-full border-4 border-black/35  "
                    src="https://i.ibb.co/QJK06kd/800w-o0iamsh-Tvx-A.webp"
                    alt="Profile"
                />
            </div>

            <div className="p-6 text-center">
                <h2 className=" -mt-5 text-2xl font-semibold">
                    {" "}
                    Margubur Rahman
                </h2>
                <p className=" text-[15px] ">
                    Mymensingh, Bangladesh
                </p>
                <p className="mt-4 font-medium  font-sans ">
                    Hi, I'm Mamshad, a curious programmer, developer, and a
                    student who's trying to get a bit better every day!
                </p>
            </div>

            <div className="p-6 text-center flex justify-center items-center">
                <a
                    href="https://mamshad-profile.vercel.app"
                    className="text-black/70   transition-colors duration-300  hover:text-blue-400 hover:underline flex items-center"
                >
                    <span>mamshad-profile.vercel.app</span>
                    <TbExternalLink className="ml-2" />
                </a>
            </div>
        </div>
    );
};

export default ProfileBox;
