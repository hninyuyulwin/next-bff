import axiosClient from "@/app/util/axios";
import { Movie } from "../types";

export async function getAllMovies(): Promise<Movie[]> {
  let response = await axiosClient.get<Movie[]>("/movies");
  return response.data;
}

export async function getMovieById(id: string): Promise<Movie> {
  let response = await axiosClient.get<Movie>(`/movies/${id}`);
  return response.data;
}