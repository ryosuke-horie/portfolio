import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardHeader, CardContent, Grid, Typography } from "@material-ui/core";
import Header from '../components/Header'; {/* ヘッダー */}

function Ielove() {
    return (
        <Grid container spacing={3}>
            <Header />
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title="不動産仲介会社向け業務支援SaaS「いえらぶ」の保守・運用"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            期間：2020/12 ~ 2021/7
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            AWS | PHP/ZendFrameWork | Javascript/JQuery | SQL/Mysql | css
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            業務内容：保守・運用業務に従事。報告されているバグの修正対応がメインでした。また、新規機能の実装にも対応していました。
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            未経験だったこともあり、この時期は簡単なバグの修正対応がメインでした。参加した時点で既に大規模なサービスであり、それを支えているコードにふれられたことは非常に貴重な経験だったと思います。    
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Ielove;
