import React from 'react';
import { withRouter } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
import { Card, CardHeader, Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={<Avatar>P</Avatar>}
              title="Profile"
              subheader="プロフィール"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>xs=6</Card>
        </Grid>
        <Grid item xs={6}>
          <Card>xs=6</Card>
        </Grid>
        <Grid item xs={3}>
          <Card>xs=3</Card>
        </Grid>
        <Grid item xs={3}>
          <Card>xs=3</Card>
        </Grid>
        <Grid item xs={3}>
          <Card>xs=3</Card>
        </Grid>
        <Grid item xs={3}>
          <Card>xs=3</Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
