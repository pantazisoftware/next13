import Logo from "./Logo";
import Menu from "./Menu";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center py-6 px-6 border-b border-slate-200">
      <div id="left" className="flex flex-row items-center space-x-6">
        <Logo />
        <Menu />
      </div>
      <div id="right" className="flex space-x-3 items-center">
        <button className="px-4 py-3 text-sm rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-900 hover:text-white font-medium">
          Get Started
        </button>
        <button className="px-4 py-3 text-sm rounded-lg bg-transparent border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium">
          Login
        </button>
      </div>
    </div>
  );
}
