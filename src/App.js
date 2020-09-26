import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import LaunchWrapper from "./Launch/LaunchWrapper";

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
      link: new HttpLink({
      uri: 'https://api.spacex.land/graphql/',
      }),
      cache: new InMemoryCache(),
    });
  };
  
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="https://assignar.com/">
        Anthony Joseph <span role="img" aria-label="construction-worker">👷</span> for Assignar!
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          SpaceX Launches
        </Typography>
        <LaunchWrapper />
        <Copyright />
      </Box>
    </Container>
    </ApolloProvider>
  );
}
