import React from "react"
import ReactDOM from "react-dom"
import { ApolloClient, HttpLink } from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks"
// Importing both ApolloProvider from react-apollo-hooks and react-apollo
// allows to use either hooks or component in the same app
import { InMemoryCache } from "apollo-cache-inmemory"
import App from "./App"
import GlobalStyle from "./styles/global"
import * as serviceWorker from "./serviceWorker"

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <GlobalStyle/>
      <App/>
    </ApolloHooksProvider>
  </ApolloProvider>
  , document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
