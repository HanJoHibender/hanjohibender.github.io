import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { 
    Container, 
    Typography, 
    Box, 
    TextField, 
    Button, 
    Paper, 
    Stack 
} from '@mui/material';
import { 
    Send as SendIcon, 
    Person as PersonIcon, 
    Message as MessageIcon 
} from '@mui/icons-material';
import './Contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);
        
        const mailtoLink = `mailto:contact@hibender.io?subject=${subject}&body=${body}`;
        
        // Trigger the mail client
        window.location.href = mailtoLink;
        
        console.log('Form submitted via mailto:', { name, message });
    };

    return (
        <Container maxWidth="sm" className="contact-page-container" sx={{ py: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
                    Contact Us
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Have a question or want to collaborate? We'd love to hear from you.
                </Typography>
            </Box>

            <Paper 
                elevation={0} 
                sx={{ 
                    p: { xs: 3, md: 5 }, 
                    borderRadius: 4, 
                    border: '1px solid', 
                    borderColor: 'divider',
                    bgcolor: 'background.paper'
                }}
            >
                <Form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <PersonIcon sx={{ color: 'text.secondary', mr: 1 }} />
                                    ),
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            helperText={`${message.length}/1000`}
                            slotProps={{
                                formHelperText: {
                                    sx: { textAlign: 'right', fontWeight: 600 }
                                },
                                htmlInput: { maxLength: 1000 },
                                input: {
                                    startAdornment: (
                                        <MessageIcon sx={{ 
                                            color: 'text.secondary', 
                                            mr: 1.5,
                                            mb: 'auto', // Push to top
                                            mt: 0.5 // Align with first line of text
                                        }} />
                                    ),
                                    sx: { alignItems: 'flex-start' } // Ensure text starts at top
                                },
                            }}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="secondary" 
                            size="large"
                            endIcon={<SendIcon />}
                            sx={{ 
                                py: 1.5, 
                                fontSize: '1.1rem',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#e69d00', // Slightly darker orange
                                }
                            }}
                        >
                            Send Message
                        </Button>
                    </Stack>
                </Form>
            </Paper>

            <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                    Or reach out directly at 
                    <a href="mailto:contact@hibender.io" style={{ marginLeft: '8px', color: '#008288', fontWeight: 600, textDecoration: 'none' }}>
                        contact@hibender.io
                    </a>
                </Typography>
            </Box>
        </Container>
    );
};

export default Contact;
