import { FieldValues, useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import useGameQueryStore from "../../stores/gameQueryStore";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import LogoLink from "./LogoLink";

const Nav = () => {
  const { register, handleSubmit } = useForm();
  const { setSearchText } = useGameQueryStore();

  const onSubmit = (data: FieldValues) => {
    // event.preventDefault();
    console.log("data", data);
    setSearchText(data.search);
  };

  return (
    <nav className="bg-transparent flex flex-row items-center py-6 px-3">
      <LogoLink />

      {/* ssearch Bar */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-light dark:bg-secondary-dark rounded-full py-4 px-6 space-x-4 mr-6 grow flex flex-row items-center"
      >
        <button type="submit" className="outline-none border-none">
          <FaSearch className="text-icon-light dark:text-bg-light" />
        </button>
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
      </form>

      {/* Dark mode toggle */}
      <DarkModeToggle />
    </nav>
  );
};

export default Nav;
