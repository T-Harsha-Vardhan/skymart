import { Moon, Sun, Monitor } from "lucide-react";
import Button from "../ui/Button";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={toggleDropdown} aria-label="Toggle theme">
        <Icon />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-surface border-4 border-border shadow-md flex flex-col p-2 z-50">
          <button 
            onClick={() => handleSelect("light")}
            className={`p-2 font-bold uppercase text-text hover:bg-primary border-2 border-transparent hover:border-border hover:text-black transition-all flex items-center gap-2 text-left ${theme === 'light' ? 'bg-primary border-border text-black!' : ''}`}
          >
            <Sun size={16} /> Light
          </button>
          <button 
            onClick={() => handleSelect("dark")}
            className={`p-2 font-bold uppercase text-text hover:bg-primary border-2 border-transparent hover:border-border hover:text-black transition-all flex items-center gap-2 text-left ${theme === 'dark' ? 'bg-primary border-border text-black!' : ''}`}
          >
            <Moon size={16} /> Dark
          </button>
          <button 
            onClick={() => handleSelect("system")}
            className={`p-2 font-bold uppercase text-text hover:bg-primary border-2 border-transparent hover:border-border hover:text-black transition-all flex items-center gap-2 text-left ${theme === 'system' ? 'bg-primary border-border text-black!' : ''}`}
          >
            <Monitor size={16} /> System
          </button>
        </div>
      )}
    </div>
  );
}
