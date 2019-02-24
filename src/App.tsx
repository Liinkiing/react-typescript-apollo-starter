import React, { FunctionComponent } from "react"
import styled from "styled-components"

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {
  return (
    <AppInner>
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <main>
        <h2>App content</h2>
      </main>
    </AppInner>
  );
}

export default App
