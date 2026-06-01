import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;
  let title: string = 'Oops!';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h2" gutterBottom color="error">
          {title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, fontStyle: 'italic', color: 'text.secondary' }}>
          {errorMessage}
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
