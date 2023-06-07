import './App.css';
import { Autocomplete, Box, Button, Card, Grid, TextField } from '@mui/material';

function App() {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]
  return (
    <>
      <h1>hello world</h1>
      {/* profile & section */}
      <Grid container spacing={3}>
        <Grid item sx={6} sm={8} md={6} lg={5} >
          <Card sx={{ boxShadow: '1px 1px 8px #80808085', padding: '0px 30px' }}>
            <p style={{ textAlign: 'center', fontSize: '25px', margin: '7px 0px' }}>Profile Selection</p>
            <Autocomplete
              fullWidth
              size='small'
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField {...params} />}
            />
            <Box sx={{ margin: '20px 0px', display: 'flex', gap: '20px' }}>
              <Button variant="contained">Load Results</Button>
              <Button variant="contained">Refresh</Button>
              <Button variant="contained">View Params</Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={6}>
          <Card sx={{ boxShadow: '1px 1px 8px #80808085', padding: '0px 30px' }}>
            <p style={{ textAlign: 'center', fontSize: '25px', margin: '7px 0px' }}>Summary</p>
            <Box sx={{ textAlignLast: 'center', margin: '0px' }}>
              <Grid container columns={16} spacing={0}>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
              </Grid>
              <Grid container columns={16}>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
              </Grid>
              <Grid container columns={16}>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
                <Grid item xs={5}>
                  <p style={{ backgroundColor: 'green', padding: '10px' }}>xs=8</p>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Grid container gap={2} sx={{ display: 'flex', textAlign: 'center' }}>
        <Grid item xs={12} sm={8} md={4} lg={3.5}>
          <Card sx={{ boxShadow: '1px 1px 8px #80808085', padding: '10px 30px' }}>
            <p style={{ textAlign: 'center', fontSize: '20px', margin: '0px' }}>ABC Filter</p>
            <Autocomplete
              fullWidth
              size='small'
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField {...params} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={3.5}>
          <Card sx={{ boxShadow: '1px 1px 8px #80808085', padding: '10px 30px' }}>
            <p style={{ textAlign: 'center', fontSize: '20px', margin: '0px' }}>XYZ Filter</p>
            <Autocomplete
              fullWidth
              size='small'
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField {...params} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={3.5}>
          <Card sx={{ boxShadow: '1px 1px 8px #80808085', padding: '10px 30px' }}>
            <p style={{ textAlign: 'center', fontSize: '20px', margin: '0px' }}>Measure</p>
            <Autocomplete
              fullWidth
              size='small'
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField {...params} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Card sx={{ boxShadow: '1px 1px 8px #80808085', padding: '10px 30px' }}>
            <p style={{ textAlign: 'center', fontSize: '20px', margin: '0px' }}>Brand</p>
            <Autocomplete
              fullWidth
              size='small'
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField {...params} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Card sx={{ boxShadow: '1px 1px 8px #80808085', padding: '10px 30px' }}>
            <p style={{ textAlign: 'center', fontSize: '20px', margin: '0px' }}>Grammage</p>
            <Autocomplete
              fullWidth
              size='small'
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => <TextField {...params} />}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
