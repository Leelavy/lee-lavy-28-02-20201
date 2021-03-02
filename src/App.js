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

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: '#00286B',
    },
    secondary: {
      main: '#005DAF',
    },
    action: {
      disabledBackground: '#6a9ecc',
      disabled: '#EAEDF2',
    },
    common: {
      paper: '#DEE2EB',
      card: '#DEE2EB',
      bullet: '#EAEDF2',
      body: '#EAEDF2',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#1d1e20',
    },
    secondary: {
      main: '#286aa3',
    },
    action: {
      disabledBackground: '#6a9ecc',
      disabled: '#EAEDF2',
    },
    common: {
      paper: '#363636',
      card: '#2e2e2e',
      bullet: '#2e2e2e',
      body: '#3f3f3f',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  }
});

const App = () => {

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
