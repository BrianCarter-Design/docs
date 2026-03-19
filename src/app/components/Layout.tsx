import { Outlet } from "react-router";
import { SharedNav } from "./SharedNav";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      <SharedNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}