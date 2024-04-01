// import { Platform } from "../../services/platforms-services";

interface Props {
  id: string;
  title: string;
  elements: string[];
}

const DropDown = ({ id, title, elements }: Props) => {
  return (
    <div>
      <select
        id={id}
        className="hover:cursor-pointer bg-secondary-light dark:bg-secondary-dark text-2xl font-semibold rounded-xl block w-52 p-2.5 border-0 outline-none"
      >
        <option selected disabled>
          {title}
        </option>
        {elements.map((elem) => (
          <option value={elem}>{elem}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
