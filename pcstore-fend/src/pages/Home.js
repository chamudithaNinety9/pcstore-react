import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles.css'; // Import the combined styles

const Home = () => {
    return (
        <div className="app-container">
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000} // 5 seconds per slide
                stopOnHover={true}
                transitionTime={500} // 0.5 second transition between slides
                dynamicHeight={false}
                className="background-carousel"
            >
                <div>
                    <img src="/images/slide1.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="/images/slide2.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="/images/slide3.jpg" alt="Slide 3" />
                </div>
            </Carousel>
            <div className="main-content">
                <div className="home-container">
                    <Container>
                        <h1>Welcome to PC-Sore</h1>
                        <Grid container spacing={3} className="cards-container">
                            {/* Example cards */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className="custom-card">
                                    <CardMedia
                                        component="img"
                                        className="card-media"
                                        image="images/card3.jpg"
                                        alt="Laptop 1"
                                    />
                                    <CardContent className="card-content">
                                        <Typography variant="h6" component="div">
                                            Laptop Model XYZ
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            $1200.00
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className="custom-card">
                                    <CardMedia
                                        component="img"
                                        className="card-media"
                                        image="images/card2.jpg"
                                        alt="Laptop 2"
                                    />
                                    <CardContent className="card-content">
                                        <Typography variant="h6" component="div">
                                            Gaming Laptop ABC
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            $1800.00
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className="custom-card">
                                    <CardMedia
                                        component="img"
                                        className="card-media"
                                        image="images/card1.jpg"
                                        alt="Laptop 3"
                                    />
                                    <CardContent className="card-content">
                                        <Typography variant="h6" component="div">
                                            Laptop Pro 2024
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            $1500.00
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Home;
