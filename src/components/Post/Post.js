import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { AccountCircle, Favorite } from '@material-ui/icons';

import './Post.css';

const Post = () => {
    return (
        <Grid item xs={12} className="grid post">
            <Paper className="paper">
                <div className="user">
                    <AccountCircle />
                    <Typography className="username" variant="subtitle2">Danilo</Typography>
                </div>
                <img className="image" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="post" />
                <section className="body">
                    <div className="like">
                        <Typography className="people" variant="body2">Liked by 10 people</Typography>
                        <Favorite />
                    </div>
                    <div className="comments"></div>
                </section>
                <hr />
            </Paper>
        </Grid>
    );
};

export default Post;