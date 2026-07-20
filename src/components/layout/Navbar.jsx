import { NavLink } from "react-router";
import { links } from "../../config/navigation";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-8 pt-2 pb-4">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary border-2 border-black font-bold px-4 py-2 uppercase shadow-[4px_4px_0px_0px_#000]"
                  : "bg-background text-text border-2 border-transparent font-bold px-4 py-2 uppercase hover:border-black hover:shadow-[4px_4px_0px_0px_#000] transition-all"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
