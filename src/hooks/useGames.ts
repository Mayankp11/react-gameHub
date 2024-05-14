import useData from "./useData";

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
}


const useGames = () => useData<Game>('/games')

export default useGames;
