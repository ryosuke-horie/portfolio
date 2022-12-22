import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Profile from '../components/Profile'; {/* プロフィール */}
import Company from '../components/Company'; {/* 業務経歴 */}
import Output  from '../components/Output';  {/* 個人開発アプリ */}

function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Profile />
        <Company />
        <Output />
      </Grid>
    </div>
  );
}

export default Home;
