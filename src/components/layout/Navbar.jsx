import { NavLink } from "react-router";
import { links } from "../../config/navigation";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-4 md:gap-8 pt-2 pb-4 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary border-2 border-border font-bold px-4 py-2 uppercase shadow-md text-black!"
                  : "bg-background text-text border-2 border-transparent font-bold px-4 py-2 uppercase hover:border-border hover:shadow-md transition-all"
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
