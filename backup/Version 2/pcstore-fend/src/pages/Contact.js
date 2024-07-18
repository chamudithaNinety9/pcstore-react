import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import '../styles.css'; // Import your custom styles

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted!');
    };

    return (
        <div className="contact-us-container">
            <Container>
                <Typography variant="h3" gutterBottom textAlign={'center'}>
                    Contact Us
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>
                            Get in Touch
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Have a question, feedback, or just want to say hello? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        variant="outlined"
                                        name="name"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        variant="outlined"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        name="message"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>
                            Our Location
                        </Typography>
                        <Typography variant="body1" paragraph>
                            PC-Store (Pvt) Ltd
                            <br />
                            #322, 1st Floor, Unity Plaza,
                            <br />
                            Colombo 04,
                            <br />
                            Sri Lanka
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Email: info@pcstore.com
                            <br />
                            Phone: +1 (123) 456-7890
                        </Typography>
                        <Typography variant="body1">
                            Follow us on social media:
                            <br />
                            Facebook | Twitter | Instagram
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ContactUs;
