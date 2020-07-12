import React from "react";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";

import { Container, Content } from "./styles";

import store from "./store";

import Upload from "./components/Upload";

function App() {
  return (
    <Container>
      <Provider store={store}>
        <Content>
          <Upload />
        </Content>
        <GlobalStyle />
      </Provider>
    </Container>
  );
}

export default App;
