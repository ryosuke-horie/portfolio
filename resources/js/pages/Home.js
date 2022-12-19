import React from 'react';
import { Button, Card, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },

}));

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    return (
        <div class="container">
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                <Button>Save</Button>
            </Box>

            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            />
        </div>


    );
}

export default Home;
