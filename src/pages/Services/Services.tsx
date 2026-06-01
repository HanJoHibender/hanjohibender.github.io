import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { 
    Code as CodeIcon, 
    MusicNote as MusicIcon, 
    Psychology as ThinkingIcon, 
    TrendingUp as GrowthIcon 
} from '@mui/icons-material';
import './Services.css';

interface ServiceItemProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => (
    <Card className="service-card" sx={{ height: '100%', borderRadius: 4, transition: 'all 0.3s ease' }}>
        <CardContent sx={{ p: 4 }}>
            <Box className="service-icon-wrapper" sx={{ mb: 3 }}>
                {icon}
            </Box>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const Services: React.FC = () => {
    return (
        <Container maxWidth="lg" className="services-page-container" sx={{ py: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
                    Our Services
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                    A unique blend of technical expertise and creative exploration designed to help your projects reach new heights.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ServiceItem 
                        title="Musical Programming" 
                        description="Custom programming and sound design within DAWs. We create unique musical outputs through technical innovation in sound synthesis and arrangement."
                        icon={<MusicIcon sx={{ fontSize: 40 }} />}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ServiceItem 
                        title="Custom Code & Web Development" 
                        description="Writing bespoke code and creating modern, functional websites. We build robust, scalable solutions tailored exactly to your business needs."
                        icon={<CodeIcon sx={{ fontSize: 40 }} />}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ServiceItem 
                        title="Interactive Thinking Sessions" 
                        description="Facilitated deep-dives for philosophical individuals. We explore the existence of humanity, the future of AI, and other existential concepts in a collaborative environment."
                        icon={<ThinkingIcon sx={{ fontSize: 40 }} />}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ServiceItem 
                        title="Growth Consulting" 
                        description="Strategic guidance to help your company grow. We combine technical solutions with creative thinking to unlock new opportunities and optimize your workflow."
                        icon={<GrowthIcon sx={{ fontSize: 40 }} />}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Services;
