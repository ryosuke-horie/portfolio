import React from 'react';
import { withRouter } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from '@mui/material/Typography';


function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={<Avatar>P</Avatar>}
              title="堀江 遼佑"
              subheader="バックエンドエンジニア"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader
              title="業務経歴1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                株式会社いえらぶGROUP
              </Typography>
              <Typography variant="body2" color="text.secondary">
                不動産会社向けSaaSサービス「いえらぶ」の開発。
                上記サービスと連携した集客用HPサービスの開発。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
            <CardHeader
              title="業務経歴2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                マミヤITソリューション株式会社
              </Typography>
              <Typography variant="body2" color="text.secondary">
                受託開発に従事  
              </Typography>
            </CardContent>
          </Card>
        </Grid>
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
      </Grid>
    </div>
  );
}

export default Home;
