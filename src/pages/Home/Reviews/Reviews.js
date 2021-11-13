import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Container, Rating, Typography } from "@mui/material";
import { CardActionArea } from '@mui/material';


// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


// import Swiper core and required modules

import SwiperCore, {
    Lazy, Pagination, Navigation
} from 'swiper';
import { Box } from "@mui/system";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Box className="App" sx={{ my: 5, py: 5 }}>
            <Container>
                <Typography className="Titillium" variant="h3" sx={{ my: 4 }}>Reviews</Typography>
                <Swiper navigation={true} breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 50
                    }
                }} className="mySwiper">
                    {reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <Card sx={{ maxWidth: 345, margin: '0 auto', alignItems: 'stretch' }} >
                                <CardActionArea>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={review?.img}
                                        sx={{
                                            width: "40%", height: "40%", display: 'block',
                                            margin: 'auto'
                                        }}
                                    />
                                    <CardContent>

                                        <Rating name="text-feedback"
                                            value={review?.rating}
                                            readOnly
                                            precision={0.1}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                                        <Typography variant="h6" >
                                            {review?.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {review?.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </Box>
    );
};

export default Reviews;