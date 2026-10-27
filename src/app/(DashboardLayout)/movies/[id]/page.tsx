import React from "react";
import MovieDetails from "./components/MovieDetails";
import { getMovieById } from "@/app/lib/api/movieApi";
import { Movie } from "@/app/lib/types";
import ReviewList from "./components/ReviewList";
import NavButton from "../../components/shared/NavButton";

async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: Movie = await getMovieById(id);

  return (
    <div>
      <h1>Movie Details Page</h1>
      <NavButton label="Back" href="/movies"></NavButton>
      <MovieDetails movie={movie} />
      <ReviewList movie={id} />
    </div>
  );
}

export default MovieDetailsPage;
