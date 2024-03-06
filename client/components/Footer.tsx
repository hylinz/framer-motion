
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function TopNav() {
  return (
    <footer className="fixed space-x-4 w-full flex justify-end bottom-0 px-5 py-5">
      <div className="border-primary border-2 p-2.5 rounded-full hover:bg-primary text-primary hover:text-secondary hover:cursor-pointer hover:border-secondary text-2xl">
      <FaInstagram  className=""/>
      </div>
      <div className="border-primary border-2 p-2.5 rounded-full hover:bg-primary text-primary hover:text-secondary hover:cursor-pointer hover:border-secondary text-2xl">
      <FaGithub  className=""/>
      </div>
      <div className="border-primary border-2 p-2.5 rounded-full hover:bg-primary text-primary hover:text-secondary hover:cursor-pointer hover:border-secondary text-2xl">
      <FaWhatsapp  className=""/>
      </div>
    </footer>
  );
}
