import { ReactNode } from "react";
import useGameQueryStore from "../../../stores/gameQueryStore";

interface Props {
  id: number;
  children: ReactNode;
  genreSlug: string | null;
}

const SideCardContainer = ({ id, children, genreSlug }: Props) => {
  const { setgenres } = useGameQueryStore();
  return (
    <li
      className="flex flex-row items-center space-x-4 hover:font-medium hover:scale-110 hover:translate-x-4 transition-all hover:cursor-pointer"
      key={id}
      onClick={() => {
        setgenres(genreSlug);
      }}
    >
      {children}
    </li>
  );
};

export default SideCardContainer;
