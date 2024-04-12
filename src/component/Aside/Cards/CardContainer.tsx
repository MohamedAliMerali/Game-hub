import { ReactNode } from "react";
import { GameQuery } from "../../../App";

interface Props {
  id: number;
  children: ReactNode;
  genreSlug: string | null;
  gameQuery: GameQuery;
  handleClick: (gameQuery: GameQuery) => void;
}

const CardContainer = ({
  id,
  children,
  genreSlug,
  gameQuery,
  handleClick,
}: Props) => {
  return (
    <li
      className="flex flex-row items-center space-x-4 hover:cursor-pointer hover:font-medium hover hover:scale-110 hover:translate-x-4 transition-all "
      key={id}
      onClick={() => {
        handleClick({ ...gameQuery, genres: genreSlug });
      }}
    >
      {children}
    </li>
  );
};

export default CardContainer;
