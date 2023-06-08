import React from 'react'
import { Grid } from '@mui/material';
import SummaryCard from '../../components/SummaryCard';
import ProfileSection from '../../components/ProfileSection';
import FilterSection from '../../components/FilterSection';

function Results() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={6} sm={12} md={12} lg={5.5} >
          <ProfileSection />
        </Grid>
        <Grid item xs={12} sm={8} md={12} lg={6.5}>
          <SummaryCard />
        </Grid>
      </Grid>
      <FilterSection />

    </>
  )
}

export default Results