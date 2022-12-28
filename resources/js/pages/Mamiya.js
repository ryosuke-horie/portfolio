import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardHeader, CardContent, Grid, Typography } from "@material-ui/core";
import Header from '../components/Header'; {/* ヘッダー */}

// マミヤITSのページ(記述途中)【記載するときには書いた内容が問題ないものか気を使うこと】
function Mamiya() {
    return (
        <Grid container spacing={3}>
            <Header />
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title="アミューズメント業界向け業務効率化システムの開発"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            期間：2022/7 ~ 現在就業中
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            PHP/Laravel | Postgresql | AWS | Javascript | CSS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {/* 未記入 */}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Mamiya;
