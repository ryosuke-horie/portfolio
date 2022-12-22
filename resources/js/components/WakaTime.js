import React from 'react';
import { Card, CardHeader, CardContent, Grid, Avatar } from "@material-ui/core";

{/* WakaTime API */}
const WakaTime = () => {
  return (
      <Grid item xs={12}>
        <Card>
          <CardHeader
            avatar={<Avatar alt="WakaTime icon" src="/image/Logo.svg" />}
            title="WakaTime"
          />
          <CardContent>
              <a href="https://wakatime.com"><img style={{width: '100%', height: 'auto'}} src="https://wakatime.com/share/@dc6288c2-5f9d-4f76-b8d6-4bdb94275b73/058283fd-4316-4aaa-ac71-d1f45a583089.png" /></a>
          </CardContent>
        </Card>
      </Grid>
  );
}

export default WakaTime;