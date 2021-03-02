import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadWeatherByLocation, loadFiveDaysWeather } from './redux/actions/weatherActions';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import Appbar from './components/Appbar';

const App = () => {

  const dispatch = useDispatch();

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
