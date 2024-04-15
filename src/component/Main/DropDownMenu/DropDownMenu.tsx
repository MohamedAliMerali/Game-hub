import { useState } from "react";
import { GameQuery } from "../../../App";

interface Props {
  id: string;
  title: string;
  queryParameter: string;
  MenuItems: { id: number; value: string; label: string }[];
  gameQuery: GameQuery;
  onFiltering: (gameameQuery: GameQuery) => void;
}

const DropDownMenu = (props: Props) => {
  const [menuTitle, setMenuTitle] = useState("");
  const { id, title, gameQuery, MenuItems, queryParameter, onFiltering } =
    props;

  return (
    <div className="hs-dropdown relative inline-flex my-2">
      <button
        id="hs-dropdown-default"
        type="button"
        className="text-2xl font-semibold border-none outline-none bg-secondary-light dark:bg-secondary-dark hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 rounded-2xl border text-inherit shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-inherite"
      >
        <div className="mr-4 text-left">{title + ": " + menuTitle}</div>

        <svg
          className="hs-dropdown-open:rotate-180 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className="bg-secondary-light dark:bg-secondary-dark hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 shadow-md rounded-lg p-2 mt-2 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
        aria-labelledby="hs-dropdown-default"
      >
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-inherit hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-inherit dark:hover:bg-gray-700 dark:hover:font-bold dark:focus:bg-gray-700"
            // key={item[queryParameter]}
            onClick={() => {
              console.log(">> Filtering:");
              console.log("   id:", id);
              console.log("   queryParameter:", queryParameter);
              console.log(
                "   MenuItems[queryParameter]:",
                MenuItems[index][queryParameter]
              );
              setMenuTitle(item.label);
              onFiltering({
                ...gameQuery,
                [id]: MenuItems[index][queryParameter],
              });
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
    // <div className="dropdown">
    //   <button className="m-1 btn" onClick={() => setOpen(!open)}>
    //     open or close
    //   </button>
    //   {open && (
    //     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    //       <li>
    //         <a>Item 1</a>
    //       </li>
    //       <li>
    //         <a>Item 2</a>
    //       </li>
    //     </ul>
    //   )}
    // </div>
  );
};

export default DropDownMenu;
