import logo from "../../assets/logo.webp";
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
// import { MdOutlineDarkMode } from "react-icons/md";
// last one isn't filled complitelly

interface Props {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Nav = ({ darkMode, onToggleDarkMode }: Props) => {
  return (
    <nav className="bg-transparent flex flex-row items-center py-6 mx-4">
      {/* img container */}
      <div className="w-24">
        <img src={logo} alt="game hub logo" />
      </div>

      {/* ssearch Bar */}
      <div className="bg-secondary-light dark:bg-secondary-dark rounded-full p-4 space-x-4 mr-6 grow flex flex-row items-center">
        <FaSearch className="text-icon-light dark:text-bg-light" />
        <input
          className="bg-transparent grow outline-none"
          type="text"
          placeholder="Search games..."
        />
      </div>

      {/* Dark mode toggle */}
      <label className="inline-flex items-center cursor-pointer scale-125">
        <input
          onChange={onToggleDarkMode}
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={darkMode ? true : false}
        />
        <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {darkMode ? (
            <MdDarkMode size={25} />
          ) : (
            <MdLightMode size={25} />
          )}
        </span>
      </label>
    </nav>
  );
};

export default Nav;
