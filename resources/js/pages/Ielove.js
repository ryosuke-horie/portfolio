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
                        title="不動産仲介会社向け業務支援SaaS「いえらぶCLOUD」の保守・運用"
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

            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title="「いえらぶCLOUD」と連携した不動産会社向けHPの開発"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            期間：2021/8 ~ 2022/6
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            AWS | PHP/ZendFrameWork | Javascript/JQuery | SQL/Mysql | css
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            業務内容：HPの基幹となるテンプレートの機能追加を担当。また、完全オリジナルのHPの作成も担当(開発期間3ヶ月程度)。各種案件の工数の見積もりも担当。
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            こちらのHP事業は月間で1億円を超える売上を上げているサービスでした。バックエンド側がテンプレートになっていて、デザインをクライアントの会社ごとに変更しています。また、オリジナルのHPを作成する案件は営業の方など関わるメンバーが15名を超える大規模なプロジェクトでした。開発者として仕様の説明や機能追加の提案を行う機会もあり、貴重な経験となりました。    
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    );
}

export default Ielove;
