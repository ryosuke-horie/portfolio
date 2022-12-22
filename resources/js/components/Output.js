import React from 'react';
import { Card, CardHeader, CardContent, CardActionArea, Grid, Typography } from "@material-ui/core";

{/* 個人開発アプリ */ }
const Output = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardActionArea href="https://martial-genryo.space" target="_brank">
          <CardHeader
            title="個人開発"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              格闘技向け減量管理アプリ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              格闘技では試合に出るには体重管理が必須になります。私自身約２週間ほどで5kgほど減量するため、体重管理に苦労しています。体重を管理できるサービスは多数ありますがダイエット向けです。格闘技向けのサービスが欲しくなり自作することにしました。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Output;