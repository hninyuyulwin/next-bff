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
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import { getAllMovies } from "@/app/lib/api/movieApi";
import MovieRow from "./MovieRow";

export default async function MovieList() {
  const movies = await getAllMovies();
  return (
    <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
      <Table
        aria-label="simple table"
        sx={{
          whiteSpace: "nowrap",
          mt: 2,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Year
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Director
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight={600}>
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <MovieRow movie={movie} key={movie._id} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
