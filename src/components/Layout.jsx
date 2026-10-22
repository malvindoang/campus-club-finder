import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-indigo-700 focus:shadow-lg"
    >
      Lewati ke konten utama
    </a>
    <ScrollToTop />
    <Navbar />
    <main
      id="main"
      className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8"
    >
      <Outlet />
    </main>
  </div>
);

export default Layout;