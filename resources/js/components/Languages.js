import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography  } from "@material-ui/core";

{/* 個人開発アプリ */}
const Languages = () => {
  return (
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="使用経験のある言語"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              使用経験のある言語
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PHP/Laravel/CakePHP/Zendframework/mojavi/Smarty | JavaScript/React.js/JQuery/GoogleAppsScript | Python
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              その他使用経験のあるもの
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mysql/Postgresql | AWS/Xserver | Slack | VsCode/PHPStorm | Backlog/Redmine | Github/Gitlab | Trello/Taskade/Notion ...
            </Typography>
          </CardContent>
        </Card>
      </Grid>
  );
}

export default Languages;