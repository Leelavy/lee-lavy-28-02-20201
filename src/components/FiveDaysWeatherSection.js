import React from 'react';
import { useSelector } from 'react-redux';
import DayWeatherCard from './DayWeatherCard';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FiveDaysWeatherSection = () => {

  const forecasts = useSelector(state => state.weather.fiveDaysWeather.DailyForecasts);

  return (
    <StyledDaysContainer>
      {forecasts && forecasts.map((day, i) =>
        <DayWeatherCard day={day} key={i} />
      )}
    </StyledDaysContainer>
  );
}

const StyledDaysContainer = styled(motion.div)`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-right: 2rem;
`;

export default FiveDaysWeatherSection;