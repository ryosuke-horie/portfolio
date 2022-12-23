import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardHeader, Grid, CardActionArea } from "@material-ui/core";

function Header() {
    return (
        <Grid item xs={12}>
            <Card>
                <CardActionArea href="/">
                    <CardHeader
                        title="ryosuke-horie/portfolio"
                    />
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default Header;
