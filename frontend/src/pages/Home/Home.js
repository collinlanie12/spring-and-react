import React from 'react';
import AnimeCarousel from '../../components/Carousel/AnimeCarousel';
import Header from '../../components/Header/Header';
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Header />
                <AnimeCarousel />
            </Container>
        </div>
    );
};

export default Home;