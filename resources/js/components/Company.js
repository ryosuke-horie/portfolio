import React from 'react';
import { Card, CardHeader, CardContent, Grid , Typography } from "@material-ui/core";

{/* 業務経歴 */}
const Company = (props) => {
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

    return (
        <React.Fragment> 
            {career.map((row, index) => (
                <Grid item xs={6}>
                    <Card>
                        <CardHeader
                            title={"業務経歴" + row['key'] }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {row['company']}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {row['content']}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </React.Fragment> 
    );
}

export default Company;