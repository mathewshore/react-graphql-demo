import React from 'react';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo/ApolloProvider';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppContent from './AppContent';
import theme from './theme';
import './App.css';


const client = new ApolloClient({
    uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'
});

const App = () => (
    <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
            <AppContent />
        </MuiThemeProvider>
    </ApolloProvider>
);

export default App;
