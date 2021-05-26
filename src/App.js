import styled from 'styled-components';
import GlobalStyle from './style/GlobalStyle';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5f616e;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <h1>Hello</h1>
    </Wrapper>
  );
}

export default App;
