import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, CardContent, Grid, Typography, CardActionArea } from "@material-ui/core";

{/* 業務経歴 */ }
const Company = (props) => {
    const career = [
        {
            key: "1",
            company: "株式会社いえらぶGROUP",
            content: "不動産会社向けSaaSサービスの開発に従事。月間売上１億円超えのサービスの開発を行っていました。",
            env: "HTML | CSS | JavaScript/jQuery | PHP 8.1/ZendFramework | MySql | AWS",
            tool: "Slack | Backlog",
            url: "/ielove"
        },
        {
            key: "2",
            company: "マミヤITソリューションズ株式会社",
            content: "グループ会社の業務改善ツールの開発をメインに担当。また、新規事業での技術調査・選定、設計を担当",
            env: "HTML | CSS | JavaScript/jQuery | PHP 8.1/Laravel 8・CakePHP 2 | MySql・Postgresql | AWS・オンプレミス",
            tool: "Mattermost | Redmine",
            url: "/mamiya"
        },
    ];

    return (
        <React.Fragment>
            {career.map((row, index) => (
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea href={row['url']}>
                            <CardHeader
                                title={"業務経歴" + row['key']}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {row['company']}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {row['content']}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    開発環境：{row['env']}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ツール{row['tool']}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </React.Fragment>
    );
}

export default Company;