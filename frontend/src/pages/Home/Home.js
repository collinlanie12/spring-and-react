import React from 'react';
import AnimeCarousel from '../../components/Carousel/AnimeCarousel';
import Header from '../../components/Header/Header';
import Container from "@material-ui/core/Container";

const Home = () => {

    return (
        <div>
            <Container maxWidth="sm">
                <Header />
                <AnimeCarousel />
            </Container>
        </div>
    );
};

export default Home;