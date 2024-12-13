import { Bell, CircleChevronLeft, Mail } from "lucide-react";
import { useNavContext } from "../context/NavContext";

function Navbar() {
  const { navOpen, setNavOpen } = useNavContext();

  function toggleSideBar() {
    setNavOpen((prevOpen) => !prevOpen);
  }

  return (
    <nav className="fixed top-0 px-5 left-0 w-full h-[10%] text-white bg-gray-800 z-[10] flex justify-between items-center">
      <div className="flex gap-x-2">
        <span className={`font-semibold`}>Sri&nbsp;Nine</span>
        <CircleChevronLeft
          className={`w-[17vw] h-7 cursor-pointer transition-transform duration-300 ${
            navOpen ? "-rotate-180" : ""
          }`}
          onClick={toggleSideBar}
        />
      </div>
      <ul className="flex gap-x-4">
        <div className="px-2  md:flex  hidden gap-x-7 justify-between items-center">
          <li>
            <Mail />
          </li>
          <li>
            <Bell />
          </li>{" "}
        </div>
        <li className="uppercase p-[9px] cursor-pointer font-semibold px-3 bg-green-900 rounded-full">
          RT
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
