import { ApolloClient, InMemoryCache, createHttpLink, gql, from } from '@apollo/client';

export const generalSettings = gql`
  query Settings($name: String!) {
    settings(_name: $name) {
      canBeAdmin
      admin
      all {
        siteMessage
        slackChannel
      }
    }
  }
`;