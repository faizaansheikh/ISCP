import React from "react";
import { Card, Divider, Typography } from "@mui/material";
import Plot from "react-plotly.js";
import "./summary.css";

const SummaryCard = () => {
  var xValues = ["A", "B", "C", "D", "E"];

  var yValues = ["W", "X", "Y", "Z"];

  var zValues = [
    [0.0, 0.0, 0.75],
    [0.0, 0.0, 0.75],
    [0.75, 0.75, 0.75],
  ];

  var colorscaleValue = [
    [0, "#3D9970"],
    [1, "#001f3f"],
  ];

  return (
    <Card sx={{ boxShadow: "1px 1px 8px #80808085" }}>
      <p style={{ textAlign: "center", fontSize: "25px", margin: "7px 0px" }}>
        Summary
      </p>
      <Plot
        className="js-plotly-plot plotly main-svg"
        data={[ 
          {
            z: [
              [1, 20, 30],
              [20, 1, 60],
              [30, 60, 1],
            ],
            type: "heatmap",
            showscale: false,
            // colorscale: colorscaleValue,
          },
        ]}
        layout={{
          height: 350,
          // width: '100%',
          // title: "hello",
        }}
        // config={{ responsive: true }}
      />
    </Card>
  );
};

export default SummaryCard;
