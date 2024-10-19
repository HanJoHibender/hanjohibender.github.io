import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box textAlign="center" py={5}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Hibender.io
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Your one-stop solution for all your needs.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Get Started
                </Button>
            </Box>
        </Container>
    );
};

export default Home;