import { useNavContext } from "../context/NavContext";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

interface AppLayoutInterface {
  children: React.ReactNode;
}
function AppLayout({ children }: AppLayoutInterface) {
  const { navOpen } = useNavContext();

  return (
    <section className="h-screen w-full flex flex-col duration-1000 transition-all ease-in-out select-none bg-gray-800">
      <Navbar />
      <div className="flex flex-grow pt-[10vh]">
        <SideBar />
        <main
          className={`flex-grow mr-[1vw] h-[88vh] overflow-hidden transition-all duration-1000 ease-in-out ${
            !navOpen ? "ml-[14vw]" : "ml-[1vw]"
          }`}
        >
          <div className="h-full overflow-y-auto rounded-lg p-2 bg-white">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
}

export default AppLayout;
