import { Button } from "flowbite-react";
import profile from "../assets/profile.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center pt-[150px]">
      <img className="w-72 h-72 rounded-full" src={profile} alt="" />
      <h1 className="text-center w-[70%] font-extrabold text-3xl">
        <span className="gradient-text">
          I&apos;m Christadrian Sanya,   
        </span>
        A Full-Stack Software Engineer based in Kenya
      </h1>
      <p className="text-center w-[50%] text-2xl font-medium">
        I am a full stack software Engineer from Nairobi, Kenya with
        specialization in Back-End development
      </p>
      <div className="flex gap-4">
        <Button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transform transition-transform duration-300 cursor-pointer">
          Connect With Me
        </Button>
        <Button className="p-2 rounded-lg hover:border-indigo-500 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
          My Resume
        </Button>
      </div>
    </div>
  );
}
