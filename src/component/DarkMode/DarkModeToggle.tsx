import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import DarkModeContext from "../DarkMode/DarkModeContext";

const useDarkMode = () => useContext(DarkModeContext);

const DarkModeToggle = () => {
  const { darkMode, dispatch } = useDarkMode();

  return (
    <label className="inline-flex items-center cursor-pointer scale-125">
      <input
        onChange={() => dispatch({ type: "TOGGGLE" })}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={darkMode}
      />
      <div className="relative w-14 h-7 bg-secondary-light peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-btn-bg"></div>
      <span className="hidden min-[380px]:inline ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {darkMode ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
      </span>
    </label>
  );
};

export default DarkModeToggle;
