import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Header from '../components/Header';         {/* ヘッダー */}
import Profile from '../components/Profile';       {/* プロフィール */}
import Company from '../components/Company';       {/* 業務経歴 */}
import Output  from '../components/Output';        {/* 個人開発アプリ */}
import Languages  from '../components/Languages';  {/* プログラミング言語 */}
import WakaTime  from '../components/WakaTime';    {/* WakaTime API */}


function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Header />
        <Profile />
        <Company />
        <Output />
        <Languages />
        <WakaTime />
      </Grid>
    </div>
  );
}

export default Home;
