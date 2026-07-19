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
                  ? "text-primary font-medium"
                  : "text-text-muted hover:text-text transition-colors"
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
