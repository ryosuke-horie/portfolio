import React from 'react';
import { Grid, Card, CardHeader, Avatar } from "@material-ui/core";

{/* プロフィール */}
const Profile = () => {
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