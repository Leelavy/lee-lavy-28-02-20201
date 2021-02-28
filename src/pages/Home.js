import React, { useEffect } from 'react';
import styled from 'styled-components';
import CurrentWeatherSection from '../components/CurrentWeatherSection';
import FiveDaysWeatherSection from '../components/FiveDaysWeatherSection';
import SearchBar from '../components/SearchBar';

const Home = () => {

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Geolocation Not Available");
    }
  }, []);

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