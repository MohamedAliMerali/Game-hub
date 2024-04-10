// import { Platform } from "../../services/platforms-services";
import { GameQuery } from "../../../App";

interface Props {
  id: string;
  title: string;
  elements: { value: string; label: string }[];
  gameQuery: GameQuery;
  onFiltering: (gameameQuery: GameQuery) => void;
}

const DropDown = ({ id, title, elements, gameQuery, onFiltering }: Props) => {
  return (
    <>
      <select
        key={id}
        onChange={(event) => {
          const selectedValue = event.target.value;
          console.log(">> Filtering:", selectedValue);
          onFiltering({ ...gameQuery, [id]: selectedValue });
        }}
        className="hover:cursor-pointer bg-secondary-light dark:bg-secondary-dark text-2xl font-semibold rounded-xl block w-52 p-2.5 border-0 outline-none"
      >
        <option key={title} defaultValue={""}>
          {title}
        </option>
        {elements.map((elem) => (
          <option key={elem.value} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
