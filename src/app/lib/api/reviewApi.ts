import axiosClient from "@/app/util/axios";
import { Review } from "../types";

export async function getAllReviewsByMovieId(id: string): Promise<Review[]> {
  let response = await axiosClient.get<Review[]>(`/reviews/movies/${id}`);
  return response.data;
}
