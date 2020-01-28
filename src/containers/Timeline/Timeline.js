import React, { Fragment, useEffect, useCallback } from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import { Container } from '@material-ui/core';

import './Timeline.css';
import { getPosts } from '../../services/post';

const Timeline = () => {

    const fetchPosts = useCallback(async () => {
        const response = await getPosts();
        console.log(response);
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <Fragment>
            <Header />
            <Container className="timeline">
                <Post />
                <Post />
                <Post />
                <Post />
            </Container>
        </Fragment>
    );
};

export default Timeline;