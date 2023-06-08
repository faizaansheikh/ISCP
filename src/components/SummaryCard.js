import { Card } from "@mui/material";
import React from "react";

const SummaryCard = () => {
  return (
    <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "7px 0px 30px" }}>
      <p style={{ textAlign: "center", fontSize: "25px", margin: "0px" }}>
        Summary
      </p>
      <div
        style={{
          textAlignLast: "center",
          margin: "0px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            width: "200px",
            backgroundColor: "#8fdb96",
            margin: "0px",
            padding: "10px",
          }}
        >
          4 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#1d4721",
            margin: "0px",
            padding: "10px",
          }}
        >
          10 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#dcf7df",
            margin: "0px",
            padding: "10px",
          }}
        >
          0 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#63ad6a",
            margin: "0px",
            padding: "10px",
          }}
        >
          6 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#bee6c3",
            margin: "0px",
            padding: "10px",
          }}
        >
          3 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#d1e6d4",
            margin: "0px",
            padding: "10px",
          }}
        >
          1 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#c6f7cb",
            margin: "0px",
            padding: "10px",
          }}
        >
          2 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#63ad6a",
            margin: "0px",
            padding: "10px",
          }}
        >
          6 products
        </p>
        <p
          style={{
            width: "200px",
            backgroundColor: "#bddbc1",
            margin: "0px",
            padding: "10px",
          }}
        >
          1 products
        </p>
      </div>
    </Card>
  );
};

export default SummaryCard;
