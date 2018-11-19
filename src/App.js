import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppContent from './AppContent';


const client = new ApolloClient({
    uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'
});

const App = () => (
    <ApolloProvider client={client}>
        <div>App content</div>
        <AppContent />
    </ApolloProvider>
);

export default App;
