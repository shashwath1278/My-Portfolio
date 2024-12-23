import { useTheme } from "../Themecontext";
import "./Footer.css";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`footer py-4 ${theme === "light" ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"}`}
    ><strong>
      <div className="container mx-auto px-4 text-center">
        {/* Footer Text */}
        <p
          className={`text-sm fret ${theme === "light" ? "text-gray-300" : "text-gray-800"}`}
        >
          © {new Date().getFullYear()} Shashwath Prabhu. All rights reserved.
        </p>
        {/* Social Media Icons */}
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://github.com/shashwath1278"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-500 ${theme === "light" ? "text-gray-300" : "text-gray-800"}`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shashwath-prabhu-1b144827a/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-500 ${theme === "light" ? "text-gray-300" : "text-gray-800"}`}
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-500 ${theme === "light" ? "text-gray-300" : "text-gray-800"}`}
          >
            Email
          </a>
        </div>
      </div></strong>
    </footer>
  );
}
