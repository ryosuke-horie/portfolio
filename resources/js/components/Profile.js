import React from 'react';
import { Card, CardHeader, Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function Profile() {
    return (
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={<Avatar>P</Avatar>}
              title="堀江 遼佑"
              subheader="バックエンドエンジニア"
            />
          </Card>
        </Grid>
    );
}

export default Profile;