import { hot } from "react-hot-loader/root"
import React, { FC } from "react"
import styled from "styled-components/macro"

const AppInner = styled.div`
  
`

const App: FC = () => {
  return (
    <AppInner>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h2>App content</h2>
      </main>
    </AppInner>
  );
}

export default hot(
  App
)
