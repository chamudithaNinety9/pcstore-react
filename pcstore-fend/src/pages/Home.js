import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import the combined styles

const Home = () => {
    return (
        <div className="app-container">
            <div className="main-content">
                <Container maxWidth="lg" className="home-container">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="custom-card">
                                <CardMedia
                                    component="img"
                                    className="card-media"
                                    image="images/card3.jpg"
                                    alt="Laptop 1"
                                />
                                <CardContent className="card-content">
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Laptop Model XYZ
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        $1200.00
                                    </Typography>
                                    <Button component={Link} to="/products" variant="contained" color="primary" fullWidth>
                                        View Details
                                    </Button>
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
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Gaming Laptop ABC
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        $1800.00
                                    </Typography>
                                    <Button component={Link} to="/products" variant="contained" color="primary" fullWidth>
                                        View Details
                                    </Button>
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
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Laptop Pro 2024
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        $1500.00
                                    </Typography>
                                    <Button component={Link} to="/products" variant="contained" color="primary" fullWidth>
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default Home;
