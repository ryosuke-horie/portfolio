import React from 'react';
import { withRouter } from 'react-router-dom';

// import { makeStyles, createStyles } from '@material-ui/core/styles';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// //スタイルの定義
// const useStyles = makeStyles((theme) => createStyles({
//     card: {
//         margin: theme.spacing(5),
//         padding: theme.spacing(3),
//     },

// }));

function Home() {
    //定義したスタイルを利用するための設定
    // const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>xs=6</Item>
            </Grid>
          </Grid>
        </Box>
      );
}

export default Home;
