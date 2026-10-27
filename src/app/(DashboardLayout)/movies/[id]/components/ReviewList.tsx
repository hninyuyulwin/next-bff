import { getAllReviewsByMovieId } from "@/app/lib/api/reviewApi";
import { Review } from "@/app/lib/types";
import React from "react";
import ReviewUI from "./ReviewUI";
import NavButton from "@/app/(DashboardLayout)/components/shared/NavButton";

interface ReviewListProps {
  movie: string;
}

async function ReviewList({ movie }: ReviewListProps) {
  const reviews: Review[] = await getAllReviewsByMovieId(movie);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewUI key={review._id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
