import React from 'react';
import styled from 'styled-components';

const FavoriteCard = () => {

  return (
    <StyledFavorite>
      <StyledCityName>Tel Aviv</StyledCityName>
      <StyledCountryName>Israel</StyledCountryName>
      <Degrees>28°</Degrees>
      <WeatherText>Cloudy</WeatherText>
    </StyledFavorite>
  );
}

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