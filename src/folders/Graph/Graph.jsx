

import React from 'react'
import TimeSeriesGraph from '../../components/TimeSeriesGraph';
import { Card, Divider, Grid, Typography } from '@mui/material';
import AttributeGraph from '../../components/AttributeGraph';
import IndexGraph from '../../components/IndexGraph';

const Graph = () => {
    // making graph
    return (
        <>
            <TimeSeriesGraph />

            <Grid container style={{ marginTop: '10px' }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ boxShadow: "1px 1px 8px #80808085" }}>
                        <Typography sx={{ padding: 2 }}>CV (Threshold: 0.2)</Typography>
                        <Divider />
                        <Typography variant="h4" sx={{ textAlign: 'center', padding: 2 }}>0.4356</Typography>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ boxShadow: "1px 1px 8px #80808085" }}>
                        <Typography sx={{ padding: 2 }}>CV (Threshold: 0.2)</Typography>
                        <Divider />
                        <Typography variant="h4" sx={{ textAlign: 'center', padding: 2 }}>0.4356</Typography>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ boxShadow: "1px 1px 8px #80808085" }}>
                        <Typography sx={{ padding: 2 }}>CV (Threshold: 0.2)</Typography>
                        <Divider />
                        <Typography variant="h4" sx={{ textAlign: 'center', padding: 2 }}>0.4356</Typography>
                    </Card>
                </Grid>
            </Grid>

            <AttributeGraph />

            <IndexGraph />
        </>
    )
}

export default Graph

