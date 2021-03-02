import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadCurrentWeather } from '../redux/actions/weatherActions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    position: 'absolute',
    borderRadius: '50%',
    right: 10,
    top: 10,
  },
}));

const FavoriteCard = ({ city, weather, onFavDelete }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(loadCurrentWeather(city));
  }

  const handleDeleteClick = (e) => {
    e.preventDefault();
    onFavDelete(city.Key);
  }

  return (
    <StyledLink to="/">
      <StyledFavorite onClick={handleFavoriteClick}>
        {city && weather && (
          <>
            <StyledCityName>{city.LocalizedName}</StyledCityName>
            <StyledCountryName>{city.Country.LocalizedName}</StyledCountryName>
            <Degrees>{weather.Temperature.Metric.Value}°</Degrees>
            <WeatherText>{weather.WeatherText}</WeatherText>
          </>
        )}
        <IconButton
          className={classes.button}
          aria-label="delete"
          onClick={handleDeleteClick}
        >
          <HighlightOffIcon fontSize="large" />
        </IconButton>
      </StyledFavorite>
    </StyledLink >
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledFavorite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  border-radius: 1rem;
  background: #DEE2EB;
  padding: 1rem;
  cursor: pointer;

  transition: transform .2s;
  position: relative;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(0.95);
  }
`;

const WeatherText = styled.p`
  font-weight: bold;
  margin: 0.2rem 0;
`;

const StyledCityName = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const StyledCountryName = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Degrees = styled.h1`
  margin: 1.5rem 0 0 2rem;
  font-size: 5rem;
  font-weight: bold;
`;

export default FavoriteCard;