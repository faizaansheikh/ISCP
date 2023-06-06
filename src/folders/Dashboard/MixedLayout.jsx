import React from 'react';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
    padding: theme.spacing(2),
  },
  topBar: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
  },
}));

function MixedLayout() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={2}>
        <Paper className={classes.sideBar}>
          {/* Side Bar content */}
        </Paper>
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="column">
          <Grid item>
            <Paper className={classes.topBar}>
              {/* Top Bar content */}
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.content}>
              {/* Main content */}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MixedLayout;
