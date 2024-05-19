import useData from "./useData";

import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// The tricky part of platform is that its not an array{Platform[]} but an array of objects where each obj has property called platform
// of type Platform

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames =
  // selectedGenre: Genre | null,
  // selectedPlatform : Platform | null) => useData<Game> ("/games", { params:
  (gameQuery: GameQuery) =>
    useData<Game>(
      "/games",
      {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        },
      },
      [gameQuery]
    );

export default useGames;
