import React from 'react';
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from '@mui/material/Typography';

function Company(props) {
    // 親コンポーネントからpropsで受け取る
    const { Rows } = props;

    return (
        <React.Fragment> 
            {Rows.map((row, index) => (
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