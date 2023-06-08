import { Autocomplete, Card, Grid, TextField } from "@mui/material";
import React from "react";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const FilterSection = () => {
  return (
    <Grid
      container
      gap={1}
      sx={{ display: "flex", textAlign: "center", marginTop: "50px" }}
    >
      <Grid item xs={12} sm={8} md={4} lg={3.9}>
        <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "10px 30px" }}>
          <p style={{ textAlign: "center", fontSize: "20px", margin: "0px" }}>
            ABC Filter
          </p>
          <Autocomplete
            fullWidth
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} />}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={4} lg={3.9}>
        <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "10px 30px" }}>
          <p style={{ textAlign: "center", fontSize: "20px", margin: "0px" }}>
            XYZ Filter
          </p>
          <Autocomplete
            fullWidth
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} />}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={4} lg={3.9}>
        <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "10px 30px" }}>
          <p style={{ textAlign: "center", fontSize: "20px", margin: "0px" }}>
            Measure
          </p>
          <Autocomplete
            fullWidth
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} />}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={4} lg={3}>
        <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "10px 30px" }}>
          <p style={{ textAlign: "center", fontSize: "20px", margin: "0px" }}>
            Brand
          </p>
          <Autocomplete
            fullWidth
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} />}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={4} lg={3}>
        <Card sx={{ boxShadow: "1px 1px 8px #80808085", padding: "10px 30px" }}>
          <p style={{ textAlign: "center", fontSize: "20px", margin: "0px" }}>
            Grammage
          </p>
          <Autocomplete
            fullWidth
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} />}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default FilterSection;