import React from "react";
import { Autocomplete, Card, Box, Button, TextField } from "@mui/material";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const ProfileSection = () => {
  return (
    <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "0px 30px" }}>
      <p style={{ textAlign: "center", fontSize: "25px", margin: "7px 0px" }}>
        Profile Selection
      </p>
      <Autocomplete
        fullWidth
        size="small"
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        renderInput={(params) => <TextField {...params} />}
      />
      <Box
        sx={{
          margin: "20px 0px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Button variant="contained">Load Results</Button>
        <Button variant="contained">Refresh</Button>
        <Button variant="contained">View Params</Button>
      </Box>
    </Card>
  );
};

export default ProfileSection;
