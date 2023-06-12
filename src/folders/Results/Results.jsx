import React from "react";
import { Box, Container, GlobalStyles, Grid, Typography } from "@mui/material";
import SummaryCard from "../../components/SummaryCard";
import ProfileSection from "../../components/ProfileSection";
import FilterSection from "../../components/FilterSection";
import ResultsTable from "../Results/ResultsTable";
import Graph from "../Graph/Graph";

function Results() {
  return (
    <>
      {/* <Container sx={{bgcolor:'lightgrey'}}> */}
      <Grid container spacing={3}>
        <Grid item sx={6} sm={12} md={12} lg={5.5}>
          <ProfileSection />
        </Grid>
        <Grid item xs={12} sm={8} md={12} lg={6.5}>
          <SummaryCard />
        </Grid>
      </Grid>

      <FilterSection />

      <Box sx={{ mt: "30px", boxShadow: "1px 1px 35px #80808085", p: { xs: "0px", md: "0px", lg: "0px", xl: '0px' } }}>
        <Typography sx={{ pt: '17px', pr: '17px', pb: '17px', pl: '20px', fontSize: '20px' }}>Results</Typography>
        <ResultsTable />
      </Box>

      <Graph />
      {/* </Container> */}
    </>
  );
}

export default Results;
