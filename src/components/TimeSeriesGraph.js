import { Card, Divider, Typography,Box } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";

const TimeSeriesGraph = () => {
  return (
    <Box>
      <Typography sx={{ padding: 2 }}>TimeSeries of Selected data</Typography>
      <Divider />

      <Plot
        style={{ Width: "100%" }}
        data={[
          {
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            type: "scatter",
          },
        ]}
        layout={{
          // width: '100%',
          // height: 600,
          title: "hello",
        }}
      />
    </Box>
  );
};

export default TimeSeriesGraph;
