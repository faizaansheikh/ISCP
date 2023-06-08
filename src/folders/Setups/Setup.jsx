import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Table from "../Setups/Table";

function Setup() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <Grid item xs={6}>
            <Box sx={{ bgcolor: "whitesmoke", textAlign: "center", p: "15px" }}>
              ABC Setup
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ bgcolor: "whitesmoke", textAlign: "center", p: "15px" }}>
              XYZ Setup
            </Box>
          </Grid>
        </Grid>
      </Box>

      <FormControl sx={{ m: 1, width: { xs: 350, md: 460 } }}>
        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Profile Name
        </Typography>
        <TextField
          size="small"
          label="a name to identify your settings profile"
        ></TextField>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Segmentation Measure (ABC)
        </Typography>
        <TextField size="small" label="Select a segmentation measure" select>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
        </TextField>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Primary Calculation Level
        </Typography>
        <TextField
          size="small"
          label="Select your base level for calculations"
          select
        >
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
        </TextField>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Periodcity
        </Typography>
        <TextField
          size="small"
          label="Period to base your calculations on"
          select
        >
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
        </TextField>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Calculation Horizon
        </Typography>
        <TextField
          size="small"
          label="Input your previous Weeks/Months/Year as a number"
        ></TextField>
        <Box
          sx={{
            mt: "30px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
            Use Grouping
          </Typography>
          <Switch defaultChecked />
        </Box>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Secondary Calculation Levels
        </Typography>
        <TextField
          size="small"
          label="Select Further levels for grouping"
          select
        >
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
        </TextField>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Segmentation Method
        </Typography>
        <Autocomplete
          size="small"
          id="combo-box-demo"
          options={top100Films}
          // sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="pareto by percentage" />
          )}
        />
        <Box sx={{ width: { xs: 350, md: 1000 } }}>
          <Table />
        </Box>

        <Box
          sx={{
            mt: "30px",
          }}
        >
          <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
            Run Only ABC Segmentation
            <Switch defaultChecked />
          </Typography>
        </Box>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          XYZ Segmentation Method
        </Typography>
        <TextField size="small" label="Select a measure for XYZ" select>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
        </TextField>

        <Box
          sx={{
            mt: '40px',
            width: { xs: 350, md: 1000 },
            display: "flex",
            justifyContent: "space-around",
            flexWrap:'wrap'
          }}
        >
          <Box>
            <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
             Cv Threshold
            </Typography>
            <TextField
              sx={{ width: "320px" }}
              size="small"
              type="number"
              // label=""
            />
          </Box>
          <Box>
            <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
              Gini Threshold
            </Typography>
            <TextField
              sx={{ width: "320px" }}
              size="small"
              type="number"
              // label=""
            />
          </Box>
          <Box>
            <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
              Slope Threshold
            </Typography>
            <TextField
              sx={{ width: "320px" }}
              size="small"
              type="number"
              // label=""
            />
          </Box>
        </Box>

        <Box><Button sx={{bgcolor:"#398585",color:'white',mt:'40px',ml:'8px'}}>Save</Button></Box>
      </FormControl>

     
    </>
  );
}

export default Setup;
