import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, CardContent} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from '@mui/material/Typography';
import Profile from '../components/Profile';
import Company from '../components/Company';

const career = [
  {
    key    : "1",
    company: "株式会社いえらぶGROUP",
    content: "不動産会社向けSaaSサービスの開発に従事。主にPHP/Zendframeworkを使用して月間売上１億円超えのサービスの開発を行っていました。",
  },
  {
    key    : "2",
    company: "マミヤITソリューションズ株式会社",
    content: "グループ会社の業務改善ツールの開発をメインに担当。主にPHP/Laravelを使用して開発。",
  },
];

function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        {/* プロフィール */}
        <Profile />

        {/* 業務経歴 */}
        <Company Rows={career} />

        {/* 個人開発アプリ */}
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
