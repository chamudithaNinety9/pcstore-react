import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material';
import '../styles.css'; // Import your custom styles

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <Container>
                <Typography variant="h3" gutterBottom textAlign={'center'}>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Founded in 2015, PC-Store has been dedicated to providing high-quality technology products and exceptional customer service. We are committed to innovation, reliability, and customer satisfaction.
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>
                            Our History
                        </Typography>
                        <Typography variant="body1" paragraph>
                        PC-Store started with a vision to make cutting-edge technology accessible to everyone. Since then, we have expanded our product line and customer base, becoming a trusted name in the tech industry.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>
                            Our Team
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="John Doe" src="/images/john-doe.jpg" />
                                <Typography variant="subtitle2">John Doe</Typography>
                                <Typography variant="body2">Founder & CEO</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar alt="Jane Smith" src="/images/jane-smith.jpg" />
                                <Typography variant="subtitle2">Jane Smith</Typography>
                                <Typography variant="body2">Co-Founder & COO</Typography>
                            </Grid>
                            {/* Add more team members as needed */}
                        </Grid>
                    </Grid>
                </Grid>

                <Typography variant="h5" gutterBottom>
                    Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                    At PC-Store, our mission is to empower individuals and businesses through technology solutions that enhance productivity and creativity. We strive to deliver superior products and services that exceed customer expectations.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    Customer Testimonials
                </Typography>
                <Typography variant="body1" paragraph>
                    "PC-Store has been instrumental in helping our company streamline operations and boost efficiency. Their support team is responsive and knowledgeable." - Alex Johnson, CEO of ABC Corporation
                </Typography>

                <Typography variant="body1" paragraph>
                    "The team at PC-Store goes above and beyond to ensure customer satisfaction. I highly recommend their products and services to anyone looking for reliable technology solutions." - Sarah Lee, Small Business Owner
                </Typography>

                <Typography variant="h5" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Have any questions? Reach out to us at info@pstore.com or call us at +1 (123) 456-7890. Follow us on Twitter and Facebook for updates and more.
                </Typography>
            </Container>
        </div>
    );
};

export default AboutUs;
