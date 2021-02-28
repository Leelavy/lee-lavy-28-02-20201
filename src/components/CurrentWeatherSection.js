import React from 'react';
import styled from 'styled-components';
import WeatherCard from './WeatherCard';
import Sun from '../images/Sun.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    position: 'absolute',
    borderRadius: '1rem',
    right: 20,
    top: 20,
    letterSpacing: '0.1rem',
  },
}));

const CurrentWeatherSection = () => {

  const classes = useStyles();

  return (
    <StyledWeatherSection>
      <StyledDataDiv>
        <StyledCityName>Tel Aviv</StyledCityName>
        <StyledCountryDiv>
          <StyledCountryName>Israel</StyledCountryName>
          <Line />
        </StyledCountryDiv>
        <Degrees>28°</Degrees>
        <WeatherText>Cloudy</WeatherText>
        <Precipitation>No Precipitation</Precipitation>
      </StyledDataDiv>
      <StyledStatsDiv>
        <WeatherCard title="Wind" value="25" measureUnit="KM/H" />
        <WeatherCard title="Humidity" value="75" measureUnit="%" />
        <WeatherCard title="Realfeel" value="36" measureUnit="°" />
      </StyledStatsDiv>
      <StyledWeatherImageDiv>
        <StyledWeatherImage src={Sun} alt="sun" />
      </StyledWeatherImageDiv>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<FavoriteIcon />}
      >
        Add to favorites
      </Button>
    </StyledWeatherSection>

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

const StyledWeatherSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 2rem 0;
  background: #dee2eb;
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledDataDiv = styled.div`
  display: flex;
  flex-direction: column;
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
  background: black;
`;

const Degrees = styled.h1`
  margin: 1.5rem 0;
  font-size: 10rem;
  font-weight: bold;
`;

export default CurrentWeatherSection;