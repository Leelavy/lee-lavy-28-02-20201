import React from 'react';
import styled from 'styled-components';
import CurrentWeather from '../components/CurrentWeather';
import FiveDaysWeather from '../components/FiveDaysWeather';
import SearchBar from '../components/SearchBar';

const Home = () => {

  return (
    <StyledContainer>
      <SearchBar />
      <CurrentWeather />
      <FiveDaysWeather />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Home;