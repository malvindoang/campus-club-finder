import { Link, NavLink } from "react-router";

const links = [
  { to: "/", label: "Beranda", end: true },
  { to: "/clubs", label: "Klub", end: false },
  { to: "/about", label: "Tentang", end: false },
];

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
    isActive
      ? "bg-indigo-100 text-indigo-700"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

const Navbar = () => (
  <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
    <nav
      aria-label="Navigasi utama"
      className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-6 lg:px-8"
    >
      <Link
        to="/"
        className="rounded-md text-base font-bold text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-lg"
      >
        Campus Club Finder
      </Link>
      <ul className="flex items-center gap-1">
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
