import React, { useState } from "react";
import Plot from "react-plotly.js";
import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  Divider,
  Autocomplete,
  TextField,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
const AttributeGraph = () => {
  const[drop,setDrop] = useState('')
  return (
    <Card
      sx={{
        boxShadow: "1px 1px 8px #80808085",
        marginTop: "30px",
        height: "495px",
      }}
    >
      <Typography sx={{ padding: 2 }}>Attribute Graphs</Typography>
      <Divider />
      <Box sx={{ minWidth: 120,pl:'20px',pr:'20px' }}>
      <FormControl sx={{pb:'15px',pt:'15px'}} fullWidth>
        {/* <InputLabel id="demo-simple-select-label">{drop}</InputLabel> */}
        <Select
          // sx={{ width: '100%',pl:'20px',pr:'20px' }}
          size="small"
          // labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={drop}
          // label="Age"
          onChange={(e)=>setDrop(e.target.value)}
        >
         <MenuItem value='Bonus Regular'> Bonus Regular</MenuItem>
         <MenuItem value='Bonus Trister'> Bonus Trister</MenuItem>
         <MenuItem value='Brite Maximum Power'> Brite Maximum Power</MenuItem>
         <MenuItem value='Great Regular Flavour'>Great Regular Flavour</MenuItem>
         <MenuItem value='Max Bar Regular'> Max Bar Regular</MenuItem>
         <MenuItem value='0'> 0</MenuItem>
        </Select>
      </FormControl>
    </Box>
     {/* <FormControl sx={{ ml: "20px" }}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="BonusRegular"
            control={<Radio size="small" />}
            label="Bonus Regular"
          />
          <FormControlLabel
            value="BonusTrister"
            control={<Radio size="small" />}
            label="Bonus Trister"
          />
          <FormControlLabel
            value="BriteMaximumPower"
            control={<Radio size="small" />}
            label="Brite Maximum Power"
          />
          <FormControlLabel
            value="GreatRegularFlavour"
            control={<Radio size="small" />}
            label="Great Regular Flavour"
          />
          <FormControlLabel
            value="MaxBarRegular"
            control={<Radio size="small" />}
            label="Max Bar Regular"
          />
          <FormControlLabel
            value="0"
            control={<Radio size="small" />}
            label="0"
          />
        </RadioGroup>
        
      </FormControl> */}
      <Autocomplete
        // fullWidth
        size="small"
        disablePortal
        id="combo-box-demo"
        options={[1, 2, 3, 4, 5, 6]}
        sx={{ width: "100%", pl: "20px", pr: "20px" }}
        renderInput={(params) => <TextField {...params} label="110-70 GM" />}
      />
      <Plot
        style={{ Width: "100%" }}
        data={[
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8],
            y: [1, 5, 6, 54, 12, 14, 45, 90],
            marker: { color: "red" },
            name: "Seasonality",
            type: "scatter",
          },
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8],
            y: [1, 2, 36, 45, 5, 64, 7, 45],
            marker: { color: "blue" },
            name: "Demand",
            type: "scatter",
          },
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8],
            y: [1, 29, 36, 43, 5, 46, 67, 18],
            marker: { color: "Purple" },
            name: "Residual",
            type: "scatter",
          },
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8],
            y: [1, 25, 37, 44, 65, 46, 37, 81],
            marker: { color: "green" },
            name: "Trend",
            type: "scatter",
          },
        ]}
        layout={
          {
            // width: '100%',
            // height: 600,
            // title: "hello",
          }
        }
        config={{ responsive: true }}
      />
    </Card>
  );
};

export default AttributeGraph;
