interface Props {
  id: string;
  title: string;
  elements: string[];
}

const DropDown = ({ id, title, elements }: Props) => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <select
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected disabled>
            {title}
          </option>
          {elements.map((elem) => (
            <option value={elem}>{elem.toLocaleUpperCase()}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default DropDown;
