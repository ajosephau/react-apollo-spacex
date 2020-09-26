import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import LaunchWrapper from "./Launch/LaunchWrapper";

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, useQuery, gql } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
      link: new HttpLink({
      uri: 'https://api.spacex.land/graphql/',
      }),
      cache: new InMemoryCache(),
    });
  };
  
  const GET_LAUNCHES = gql`
      query getLaunches {
        launches(order: "launch_year") {
          id
          mission_name
          upcoming
          launch_year
          launch_success
          }
      }
  `;
  
  const LaunchesQuery = () => {
    const { loading, error, data } = useQuery(GET_LAUNCHES);
    
      if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        console.error(error);
        return <div>Error!</div>;
      }
      return <LaunchesQuery launches={data.launches} />;
    };

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="https://assignar.com/">
        Anthony Joseph 👷 for Assignar!
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
