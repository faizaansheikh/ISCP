import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Autocomplete,
  Button,
  Container,
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

const ColorButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#398585",
  "&:hover": {
    backgroundColor: "#398585",
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#398585",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#398585",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#398585",
    },
    "&:hover fieldset": {
      borderColor: "#398585",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#398585",
    },
  },
});
function Setup() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];
 
  return (
    <>
     <Container>
     <Box>
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
        <CssTextField
          size="small"
          label="a name to identify your settings profile"
        ></CssTextField>

          <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
            Segmentation Measure (ABC)
          </Typography>
          <CssTextField
            size="small"
            label="Select a segmentation measure"
            select
          >
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
          </CssTextField>

          <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
            Primary Calculation Level
          </Typography>
          <CssTextField
            size="small"
            label="Select your base level for calculations"
            select
          >
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
          </CssTextField>

          <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
            Periodcity
          </Typography>
          <CssTextField
            size="small"
            label="Period to base your calculations on"
            select
          >
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
          </CssTextField>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Calculation Horizon
        </Typography>
        <CssTextField
          size="small"
          label="Input your previous Weeks/Months/Year as a number"
        ></CssTextField>
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
          <Switch defaultChecked/>
        </Box>

          <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
            Secondary Calculation Levels
          </Typography>
          <CssTextField
            size="small"
            label="Select Further levels for grouping"
            select
          >
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
            <MenuItem>n</MenuItem>
          </CssTextField>

        <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
          Segmentation Method
        </Typography>
        <Autocomplete
          size="small"
          id="combo-box-demo"
          options={top100Films}
          // sx={{ width: 300 }}
          renderInput={(params) => (
            <CssTextField {...params} label="pareto by percentage" />
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
        <CssTextField size="small" label="Select a measure for XYZ" select>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
          <MenuItem>n</MenuItem>
        </CssTextField>

        <Box
          sx={{
            mt: '40px',
            width: { xs: 350, md: 1000 },
            display: "flex",
            justifyContent: "space-around",
            flexWrap: 'wrap'
          }}
        >
          <Box>
            <Typography sx={{ mr: "20px", mt: "20px", mb: "20px" }}>
              Cv Threshold
            </Typography>
            <CssTextField
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
            <CssTextField
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
            <CssTextField
              sx={{ width: "320px" }}
              size="small"
              type="number"
            // label=""
            />
          </Box>
        </Box>

        <Box><ColorButton sx={{ bgcolor: "#398585", color: 'white', mt: '40px', ml: '8px' }}>Save</ColorButton></Box>
      </FormControl>

     
    </>
  );
}

export default Setup;
