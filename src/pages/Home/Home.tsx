import React from 'react';
import { Container, Typography, Button, Box, Stack, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
    AutoAwesome as SparkleIcon, 
    ArrowForward as ArrowIcon,
    Code as CodeIcon,
    MusicNote as MusicIcon,
    Psychology as MindIcon
} from '@mui/icons-material';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <Box className="hero-section" sx={{ py: { xs: 10, md: 15 }, overflow: 'hidden', position: 'relative' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, borderRadius: 100, bgcolor: 'primary.soft', color: 'primary.main', mb: 4, border: '1px solid', borderColor: 'primary.soft' }}>
                            <SparkleIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                                Innovation Meets Philosophy
                            </Typography>
                        </Box>
                        
                        <Typography variant="h1" sx={{ 
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: { xs: '3rem', md: '5rem' },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            mb: 3,
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Elevate Your Vision <br /> Beyond the Code.
                        </Typography>
                        
                        <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', mb: 6, lineHeight: 1.6, color: 'text.secondary', fontWeight: 500 }}>
                            Hibender.io is where high-end technical execution converges with creative sound design and deep philosophical inquiry. We don't just build; we ruminate, create, and grow.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ justifyContent: 'center' }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                size="large" 
                                component={Link} 
                                to="/services"
                                endIcon={<ArrowIcon />}
                                sx={{ py: 2, px: 4, fontSize: '1.1rem' }}
                            >
                                Explore Services
                            </Button>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                size="large" 
                                component={Link} 
                                to="/about"
                                sx={{ py: 2, px: 4, fontSize: '1.1rem' }}
                            >
                                Learn Virtues
                            </Button>
                        </Stack>
                    </Box>
                </Container>
                
                {/* Decorative Elements */}
                <div className="hero-blob hero-blob-1"></div>
                <div className="hero-blob hero-blob-2"></div>
            </Box>

            {/* Features Preview */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper className="home-feature-card" sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                            <Box className="feature-icon-circle" sx={{ bgcolor: 'primary.soft', color: 'primary.main', mb: 3 }}>
                                <CodeIcon fontSize="large" />
                            </Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>Custom Code</Typography>
                            <Typography variant="body1" color="text.secondary">Bespoke software solutions built with precision and modern scalability in mind.</Typography>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper className="home-feature-card" sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                            <Box className="feature-icon-circle" sx={{ bgcolor: 'secondary.soft', color: 'secondary.main', mb: 3 }}>
                                <MusicIcon fontSize="large" />
                            </Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>Musical Logic</Typography>
                            <Typography variant="body1" color="text.secondary">Innovative sound design and DAW programming that pushes creative boundaries.</Typography>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper className="home-feature-card" sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                            <Box className="feature-icon-circle" sx={{ bgcolor: 'primary.soft', color: 'primary.dark', mb: 3 }}>
                                <MindIcon fontSize="large" />
                            </Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>Deep Inquiry</Typography>
                            <Typography variant="body1" color="text.secondary">Interactive thinking sessions that explore the intersection of AI, humanity, and existence.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
