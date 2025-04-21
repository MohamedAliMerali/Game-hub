import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../stores/gameQueryStore";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import LogoLink from "./LogoLink";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  const { register, handleSubmit } = useForm();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    // event.preventDefault();
    console.log("data", data);
    setSearchText(data.search);
    navigate("/");
  };

  return (
    <nav className="bg-transparent flex flex-row items-center py-6 px-3">
      {/* Logo */}
      <LogoLink />

      {/* ssearch Bar */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-light dark:bg-secondary-dark rounded-full py-4 px-6 mr-6 grow flex flex-row-reverse items-center"
      >
        <input
          {...register("search", {
            required: true,
            minLength: 3,
            maxLength: 30,
          })}
          type="search"
          placeholder="Search games..."
          className="bg-transparent grow outline-none"
        />
        <button type="submit" className="outline-none border-none mr-4">
          <FaSearch className="text-icon-light dark:text-bg-light" />
        </button>
      </form>

      {/* Dark mode toggle */}
      <DarkModeToggle />
    </nav>
  );
};

export default Nav;
