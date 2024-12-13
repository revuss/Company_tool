import * as Icons from "lucide-react";
import { useNavContext } from "../context/NavContext";
import navData from "../data/navItems.json";
import { LucideProps } from "lucide-react";

interface NavItem {
  name: string;
  icon: keyof typeof Icons;
}

interface RoleNavData {
  role: string;
  items: NavItem[];
}

interface NavData {
  navItems: RoleNavData[];
}

function SideBar() {
  const { navOpen } = useNavContext();
  console.log(navData);
  const role = "MANAGER";
  const currentRoleNavItems =
    (navData as NavData).navItems.find((item) => item.role === role)?.items ||
    [];

  return (
    <aside
      className={`fixed top-[10vh] left-0 bg-gray-800 h-[90vh] z-10 flex flex-col p-4 shadow-lg 
      duration-1000 ease-in-out
      ${
        !navOpen
          ? "md:w-[14vw] w-[200px] opacity-100 scale-100 duration-1000"
          : "w-1 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex flex-col">
        {currentRoleNavItems.map((item, index) => {
          const IconComponent = Icons[
            item.icon
          ] as React.ComponentType<LucideProps>;

          return (
            <div
              key={index}
              className="flex text-xs items-center justify-start gap-x-5 text-white cursor-pointer p-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out"
            >
              {IconComponent && <IconComponent size={20} />}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>

      <div className="flex-grow" />

      <div className="flex items-center gap-3 text-white cursor-pointer p-2 rounded-md bg-green-900 hover:bg-green-600 transition-colors duration-300 ease-in-out">
        <Icons.LogOut size={20} />
        <span>Log Out</span>
      </div>
    </aside>
  );
}

export default SideBar;
