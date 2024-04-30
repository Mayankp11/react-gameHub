import { useState ,  useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
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
    parent_platforms: {platform: Platform}[]
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // Effect hook to connect to the back-end
  //res : response
  useEffect(() => {

    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games",{signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) =>{
        if(err instanceof CanceledError) return;
        setError(err.message)});

      return () => controller.abort();
  },[]);

  return {games , error}

}

export default useGames