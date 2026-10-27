import { Movie } from "@/app/lib/types";
import React from "react";

import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
} from "@mui/material";
import Link from "next/link";
import NavButton from "../../components/shared/NavButton";

interface MovieRowProps {
  movie: Movie;
}

function MovieRow({ movie }: MovieRowProps) {
  return (
    <TableRow key={movie._id}>
      <TableCell>
        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
          {movie.title}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
          {movie.year}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
          {movie.director.name}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Link href={`/movies/${movie._id}`}>
          <Button type="button" variant="outlined" color="warning">
            Details
          </Button>
        </Link>
        {/* <NavButton label="View Details" href={`/movies/${movie._id}`} /> */}
      </TableCell>
    </TableRow>
  );
}

export default MovieRow;
