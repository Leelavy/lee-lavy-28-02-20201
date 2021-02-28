import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import Appbar from './components/Appbar';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Appbar />
      <StyledContainer>
        <StyledContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </StyledContent>
      </StyledContainer>
    </BrowserRouter>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const StyledContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

export default App;
