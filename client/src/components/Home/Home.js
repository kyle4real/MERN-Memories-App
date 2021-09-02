import React, { useEffect, useState } from "react";

import { Container, Grow, Grid } from "@material-ui/core";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item sm={12} md={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
