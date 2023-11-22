import axios from "axios";
import { Result } from "../utils/types";

export const getCharacters = async (page: number) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const results: Result[] = response.data.results;

  return results;
};

export const getCharacter = async (id: number) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data: Result = response.data;

  return data;
};

export const getPages = async () => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character`);
  const pages: number = response.data.info.pages;

  return pages;
};
