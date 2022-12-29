import React from 'react';
import { Card, CardHeader, CardContent, CardActionArea, Grid, Typography } from "@material-ui/core";

{/* 職務概要 */ }
const JobSamary = () => {
  return (
    <Grid item xs={12}>
      <Card>
          <CardHeader
            title="職務概要"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
                大学在学中からエンジニアインターンシップを初め、大学卒業後不動産業界向けSaaSサービスの開発に携わる。
                １社目では未経験ながら１億円規模のHP開発のバックエンド側の開発を担当。約１年半の開発経験を積んだ後マミヤITソリューションズ株式会社に入社。
                既存サービスの保守運用やリプレイス案件、新規事業の技術選択や設計を担当。
            </Typography>
          </CardContent>
      </Card>
    </Grid>
  );
}

export default JobSamary;