import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import './About.css';

const AboutSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <Box sx={{ mb: 6 }}>
        <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            className="about-subheader"
            sx={{ 
                mb: 3,
                fontWeight: 700
            }}
        >
            {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {children}
        </Typography>
    </Box>
);

const About: React.FC = () => {
    return (
        <Container maxWidth="md" className="about-page-container" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ 
                    background: 'linear-gradient(135deg, #008288 0%, #005b62 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2
                }}>
                    Hibender.io
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '750px', mx: 'auto', fontWeight: 500 }}>
                    Where code meets creativity and philosophy, with a musical twist.
                </Typography>
            </Box>

            <Paper elevation={0} sx={{ 
                p: { xs: 4, md: 8 }, 
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 6
            }}>
                <AboutSection title="Our Mission">
                    Our mission is to bridge the gap between technical execution and philosophical exploration, 
                    helping individuals and companies grow by providing unique solutions that blend code, 
                    music, and ruminative thinking.
                </AboutSection>

                <Divider sx={{ my: 6, opacity: 0.6 }} />

                <AboutSection title="Our Team">
                    Hibender.io is driven by a passion for multi-disciplinary excellence. 
                    I bring together expertise in custom software development, musical programming, 
                    and interactive philosophical sessions to help you explore new horizons.
                </AboutSection>

                <Divider sx={{ my: 6, opacity: 0.6 }} />

                <AboutSection title="Get in Touch">
                    If you have any questions or feedback, feel free to reach out to us. 
                    We are always open to new collaborations and deep conversations.
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="body1" component="span" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Email: 
                        </Typography>
                        <a href="mailto:contact@hibender.io" style={{ 
                            marginLeft: '12px', 
                            textDecoration: 'none', 
                            color: '#ffae00',
                            fontWeight: 600,
                            transition: 'color 0.2s ease'
                        }}>
                            contact@hibender.io
                        </a>
                    </Box>
                </AboutSection>
            </Paper>
        </Container>
    );
};

export default About;
