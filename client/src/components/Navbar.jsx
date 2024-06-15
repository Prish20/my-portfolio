import { Button } from "flowbite-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between pt-2 ml-20 mr-20">
      <img className="rounded-full w-10 h-10" src={logo} alt="" />
      <ul className="flex gap-[60px] font-semibold">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <Button className="p-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transform transition-transform duration-300 cursor-pointer">
        Connect With Me
      </Button>
    </div>
  );
}
