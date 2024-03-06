
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function TopNav() {
const classes = "border-primary border-2 p-2.5 rounded-full hover:bg-primary text-primary hover:text-secondary hover:cursor-pointer hover:border-secondary"
  return (
    <footer className="fixed space-x-4 w-full flex justify-end bottom-0 px-5 py-5 text-md md:text-2xl">
      <div className={classes}>
      <FaInstagram  className=""/>
      </div>
      <div className={classes}>
      <FaGithub  className=""/>
      </div>
      <div className={classes}>
      <FaWhatsapp  className=""/>
      </div>
    </footer>
  );
}
