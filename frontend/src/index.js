import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { createApolloClient } from 'utils/apollo-client';
import { StoreProvider } from 'store';
import dotenv from 'dotenv';

import 'normalize.css';
import theme from 'theme';

import App from 'components/App/App';
dotenv.config();

// GraphQL HTTP URL
const API_URL = 'http://localhost:4000/graphql';

// GraphQL WebSocket (subscriptions) URL.
// If its url is not set in .env then it has same url, host and pathname
const WEBSOCKET_API_URL = 'ws://localhost:4000/graphql';
const websocketApiUrl = WEBSOCKET_API_URL
  ? WEBSOCKET_API_URL
  : API_URL.replace('https://', 'ws://').replace('http://', 'ws://');

// Create a Apollo client
const apolloClient = createApolloClient(API_URL, websocketApiUrl);

render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
