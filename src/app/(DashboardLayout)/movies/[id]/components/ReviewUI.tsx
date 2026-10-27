import { Review } from "@/app/lib/types";
import React from "react";
import styles from "./ReviewUI.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

interface ReviewUIProps {
  review: Review;
}

function ReviewUI({ review }: ReviewUIProps) {
  return (
    <div className={styles["review-ui-container"]}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {review.review}
            </Typography>
            <Stack spacing={1}>
              <Rating name="half-rating-read" value={review.rating} readOnly />
            </Stack>
            <Box>
              {/* <Button variant="contained" onClick={handleClickOpen}>
                Edit
              </Button>
              &nbsp;&nbsp;
              <Button variant="contained" onClick={onDeleteHandler}>
                Delete
              </Button> */}
            </Box>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

export default ReviewUI;
