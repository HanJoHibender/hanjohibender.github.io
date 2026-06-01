import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { 
    Flag as MissionIcon, 
    Groups as TeamIcon, 
    ContactSupport as ContactIcon 
} from '@mui/icons-material';
import './About.css';

interface AboutSectionProps {
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, children, icon }) => (
    <Grid size={{ xs: 12 }}>
        <Card className="about-card" sx={{ borderRadius: 6 }}>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box className="about-icon-wrapper">
                        {icon}
                    </Box>
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        className="about-subheader"
                        sx={{ 
                            fontWeight: 800,
                            fontFamily: 'Outfit, sans-serif'
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.primary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    {children}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
);

const About: React.FC = () => {
    return (
        <Container maxWidth="md" className="about-page-container" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ 
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    fontFamily: 'Outfit, sans-serif'
                }}>
                    About Hibender.io
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '750px', mx: 'auto', fontWeight: 500 }}>
                    Where code meets creativity and philosophy, with a musical twist.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                <AboutSection 
                    title="Our Mission" 
                    icon={<MissionIcon sx={{ fontSize: 32 }} />}
                >
                    Our mission is to bridge the gap between technical execution and philosophical exploration, 
                    helping individuals and companies grow by providing unique solutions that blend code, 
                    music, and ruminative thinking.
                </AboutSection>

                <AboutSection 
                    title="Our Team" 
                    icon={<TeamIcon sx={{ fontSize: 32 }} />}
                >
                    Hibender.io is driven by a passion for multi-disciplinary excellence. 
                    I bring together expertise in custom software development, musical programming, 
                    and interactive philosophical sessions to help you explore new horizons.
                </AboutSection>

                <AboutSection 
                    title="Get in Touch" 
                    icon={<ContactIcon sx={{ fontSize: 32 }} />}
                >
                    If you have any questions or feedback, feel free to reach out to us. 
                    We are always open to new collaborations and deep conversations.
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="body1" component="span" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Email: 
                        </Typography>
                        <a href="mailto:contact@hibender.io" style={{ 
                            marginLeft: '12px', 
                            textDecoration: 'none', 
                            color: 'var(--secondary-color)',
                            fontWeight: 700,
                            transition: 'color 0.2s ease'
                        }}>
                            contact@hibender.io
                        </a>
                    </Box>
                </AboutSection>
            </Grid>
        </Container>
    );
};

export default About;
