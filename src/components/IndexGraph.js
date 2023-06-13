import { Card, Divider, Typography, Box } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";

const IndexGraph = () => {
  return (
    <Card sx={{ boxShadow: "1px 1px 8px #80808085", marginTop: "30px" }}>
      <Typography sx={{ padding: 2 }}>Gini Index Graph</Typography>
      <Divider />

      <Plot
        style={{ Width: "100%" }}
        data={[
            {
                x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                y: [14, 22, 35, 47, 53, 61, 72, 85],
                marker: { color: "blue" },
                name: "Line of Equality",
                type: "scatter",
                // title: 'hello'
            },
            {
              x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              y: [1, 5, 6, 54, 12, 14, 45, 90],
              marker: { color: "red" },
              name: "Running sum of % Demand",
              type: "scatter",
              // title: 'hello'
            },
        ]}
        layout={
          {
            yaxis: {
                title: 'Percent of Total',
            },
            xaxis: {
                title: 'Time Step'
            }
            // width: '100%',
            // height: 600,
            // title: "hello",
          }
        }
        config={{responsive: true}}
      />
    </Card>
  );
};

export default IndexGraph;
