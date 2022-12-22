import React from 'react';
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from '@mui/material/Typography';

function Output() {
    return (
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="個人開発"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                格闘技向け減量管理アプリ
              </Typography>
              <Typography variant="body2" color="text.secondary">
                開発中
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    );
}

export default Output;