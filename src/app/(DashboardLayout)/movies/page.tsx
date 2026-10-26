// "use client";
import { Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import MovieList from "./components/MovieList";

const MoviePage = () => {
  return (
    <PageContainer title="Movie Page" description="this is Movie page">
      <DashboardCard title="Movie Page">
        <MovieList />
      </DashboardCard>
    </PageContainer>
  );
};

export default MoviePage;
