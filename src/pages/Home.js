import React from 'react';
import styled from 'styled-components';
import CurrentWeatherSection from '../components/CurrentWeatherSection';
import FiveDaysWeatherSection from '../components/FiveDaysWeatherSection';
import SearchBar from '../components/SearchBar';

const Home = () => {

  return (
    <StyledContainer>
      <SearchBar />
      <CurrentWeatherSection />
      <FiveDaysWeatherSection />
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