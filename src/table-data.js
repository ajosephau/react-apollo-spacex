import { useQuery, gql } from "@apollo/client";

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
        launches(limit: 10) {
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