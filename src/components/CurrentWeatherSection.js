import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/actions/favoritesActions';
import styled from 'styled-components';
import WeatherCard from './WeatherCard';
import Sun from '../images/Sun.svg';
import Cloudy from '../images/Cloudy.svg';
import Moon from '../images/Moon.svg';
import Rain from '../images/Rain.svg';
import Windy from '../images/Windy.svg';
import Snow from '../images/Snow.svg';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import { getDegree } from '../utils';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    position: 'absolute',
    borderRadius: '1rem',
    right: 20,
    top: 20,
    letterSpacing: '0.1rem',
  },
  paper: {
    borderRadius: 0,
    boxShadow: 'none',
    position: 'relative',
    display: 'flex',
    width: '100%',
    margin: '1.5rem 0 2rem 0',
    padding: '2rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    background: theme.palette.common.paper,
  },
}));

const CurrentWeatherSection = () => {

  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentWeather = useSelector(state => state.weather.currentWeather[0]);
  const cityDetails = useSelector(state => state.weather.currentCity);
  const favoriteCities = useSelector(state => state.favorites.favoriteCities);
  const measureUnit = useSelector(state => state.measureUnit.measureUnit);

  const handleFavoriteClick = () => {
    dispatch(addToFavorites(cityDetails));
  }

  const isFavorite = () => {
    for (const city of favoriteCities) {
      if (city.LocalizedName === cityDetails.LocalizedName) {
        return true;
      }
    }
    return false;
  }

  const getWeatherImage = () => {
    const icon = currentWeather.WeatherIcon;
    if ((icon >= 1 && icon <= 4) || icon == 32) {
      return (Sun);
    }
    else if (icon >= 5 && icon <= 11) {
      return (Cloudy);
    }
    else if ((icon >= 12 && icon <= 18) || (icon >= 39 && icon <= 40)) {
      return (Rain);
    }
    else if ((icon >= 19 && icon <= 29) || (icon >= 43 && icon <= 44)) {
      return (Snow);
    }
    else if (icon == 31 || icon == 32) {
      return (Windy);
    }
    else if (icon >= 33 || icon <= 38) {
      return (Moon);
    }
    else {
      return (Cloudy);
    }
  }

  return (
    <Paper className={classes.paper}>
      {Object.keys(cityDetails).length !== 0 && (
        <>
          <StyledDataDiv>
            <StyledCityName>{cityDetails.LocalizedName}</StyledCityName>
            <StyledCountryDiv>
              <StyledCountryName>{cityDetails.Country.LocalizedName}</StyledCountryName>
              <Line color={theme.palette.secondary.main} />
            </StyledCountryDiv>
            <Degrees>{getDegree(currentWeather.Temperature.Metric.Value, measureUnit)}°</Degrees>
            <WeatherText>{currentWeather.WeatherText}</WeatherText>
            <Precipitation>{currentWeather.HasPrecipitation ? currentWeather.PrecipitationType : "No Precipitations"}</Precipitation>
          </StyledDataDiv>
          <StyledStatsDiv>
            <WeatherCard title="Wind" value={currentWeather.Wind.Speed.Metric.Value} measureUnit="km/h" />
            <WeatherCard title="Humidity" value={currentWeather.RelativeHumidity} measureUnit="%" />
            <WeatherCard title="Realfeel" value={getDegree(currentWeather.RealFeelTemperature.Metric.Value, measureUnit)} measureUnit="°" />
          </StyledStatsDiv>
          <StyledWeatherImageDiv>
            <StyledWeatherImage src={getWeatherImage()} alt="sun" />
          </StyledWeatherImageDiv>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            disabled={isFavorite()}
            className={classes.button}
            startIcon={<FavoriteIcon />}
            onClick={handleFavoriteClick}
          >
            {isFavorite() ? "Followed" : "Add To Favorites"}
          </Button>
        </>
      )}
    </Paper>

  );
}

const StyledWeatherImage = styled.img`
  width: 20rem;
`;

const StyledWeatherImageDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledStatsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
`;

const WeatherText = styled.p`
  font-weight: bold;
  margin: 0.2rem 0;
`;

const Precipitation = styled.p`
  font-size: 0.8rem;
`;

const StyledDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

const StyledCityName = styled.p`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const StyledCountryDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledCountryName = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Line = styled.div`
  width: 3rem;
  height: 0.3rem;
  background: ${props => props.color};
`;

const Degrees = styled.h1`
  margin: 1.5rem 0;
  font-size: 10rem;
  font-weight: bold;
`;

export default CurrentWeatherSection;