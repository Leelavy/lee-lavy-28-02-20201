import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadCurrentWeather, loadWeatherByLocation } from './redux/actions/weatherActions';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import Appbar from './components/Appbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { darkProps, lightProps } from './theme';
import Loader from './components/Loader';
import ErrorModal from './components/ErrorModal';
import { defaultCityKey } from './utils';

const App = () => {

  const lightTheme = createMuiTheme(lightProps);
  const darkTheme = createMuiTheme(darkProps);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(loadWeatherByLocation(position.coords.latitude, position.coords.longitude))
      });
    } else {
      loadCurrentWeather({ Key: defaultCityKey })
    }
  }, []);

  const handleModeClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyles theme={darkMode ? darkTheme : lightTheme} />
        <Loader />
        <ErrorModal />
        <Appbar onModeClick={handleModeClick} darkMode={darkMode} />
        <StyledContainer>
          <StyledContent>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favorites" component={Favorites} />
            </Switch>
          </StyledContent>
        </StyledContainer>
      </BrowserRouter>
    </ThemeProvider>
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
