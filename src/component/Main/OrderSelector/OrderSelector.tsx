// Available fields:
// name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released.

import { useState } from "react";
import useGameQueryStore from "../../../stores/gameQueryStore";

const OrderSelector = () => {
  const ordering = {
    relevance: "",
    Name: "name",
    "Released date": "-released",
    "Date added": "-added",
    "Average Rating": "-rating",
    Ordering: "-metacritic",
  };
  const [title, setTitle] = useState("");
  const { setordering } = useGameQueryStore();

  return (
    <div className="hs-dropdown relative inline-flex my-2">
      <button
        id="hs-dropdown-default"
        type="button"
        className="text-2xl font-semibold border-none outline-none bg-secondary-light dark:bg-secondary-dark hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 rounded-2xl border text-inherit shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-inherite"
      >
        <div className="mr-4 text-left">{"Order By: " + title}</div>

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
        {Object.entries(ordering).map(([label, id], index) => (
          <div
            key={index}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-inherit hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-inherit dark:hover:bg-gray-700 dark:hover:font-bold dark:focus:bg-gray-700"
            onClick={() => {
              console.log(">> Filtering:");
              console.log(">> order:", { id, label });
              setordering(id);
              setTitle(label);
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSelector;
