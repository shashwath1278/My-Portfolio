import {
  FaDiscord,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import Side from "@/components/Side-circle/Side";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Access the theme and toggleTheme function

  return (
    <div
      className={`sticky top-0 w-full shadow-md z-50 ${
        theme === "dark" ? "bg-blue-900" : "bg-blue-400"
      }`}
    >
      <Side />
      <nav className="flex items-center space-x-4 px-6 py-4 justify-between"> {/* justify-between */}
        {/* Theme toggle button at the start */} 
        <button
  onClick={toggleTheme}
  className="px-4 mx-24 py-2 text-sm font-medium flex items-center hover:text-gray-400 hover:scale-150 transition-all duration-500"
>
  {theme === "dark" ? <FaSun size={22} /> : <FaMoon size={22} />}
</button>

        {/* Social Media Links aligned to the right */}
        <div className="ml-auto flex items-center space-x-4"> {/* ml-auto for right alignment */}
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="text-white text-3xl hover:text-gray-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-gray-300" />
          </a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
            <FaReddit className="text-white text-3xl hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-3xl hover:text-gray-300" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
