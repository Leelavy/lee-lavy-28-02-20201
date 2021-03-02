import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadWeatherByLocation, loadFiveDaysWeather } from './redux/actions/weatherActions';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import Appbar from './components/Appbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { darkProps, lightProps } from './theme';
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const lightTheme = createMuiTheme(lightProps);
  const darkTheme = createMuiTheme(darkProps);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(loadWeatherByLocation(position.coords.latitude, position.coords.longitude))
        dispatch(loadFiveDaysWeather())
      });
    } else {
      console.log("Geolocation Not Available");
    }
  }, []);

  const handleModeClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyles theme={darkMode ? darkTheme : lightTheme} />
        <Appbar onModeClick={handleModeClick} darkMode={darkMode} />
        <StyledContainer>
          <StyledContent>
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
              </Switch>
            </AnimatePresence>
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
