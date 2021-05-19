import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const AnimeCarousel = () => {

    const classes = useStyles();

    const [anime, setAnime] = useState([]);

    const url = 'https://api.jikan.moe/v3/top/anime/1/upcoming';

    useEffect(() => {
        getUpComingAnime();
    }, []);

    const getUpComingAnime = () => {
        axios.get(`${url}`)
            .then((response) => {
                setAnime(response.data.top);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <Carousel>
            {anime.slice(0, 20).map((anime, i) =>
                <Card key={i} className={classes.root}>
                    <CardMedia className={classes.media} image={anime.image_url} title={anime.title} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {anime.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Rank: {anime.rank} Start Date: {anime.start_date !== null ? anime.start_date : "TBA"}
                        </Typography>
                    </CardContent>
                </Card>)}
        </Carousel>

    );
}

export default AnimeCarousel;