import React from 'react';
import styled from 'styled-components';
import CurrentWeatherSection from '../components/CurrentWeatherSection';
import FiveDaysWeatherSection from '../components/FiveDaysWeatherSection';
import SearchBar from '../components/SearchBar';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const Home = () => {

  return (
    <StyledContainer
      variants={pageAnimation(0, -200)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SearchBar />
      <CurrentWeatherSection />
      <FiveDaysWeatherSection />
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Home;