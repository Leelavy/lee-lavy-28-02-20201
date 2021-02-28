import React from 'react';
import DayWeatherCard from './DayWeatherCard';
import styled from 'styled-components';

const FiveDaysWeatherSection = () => {
  return (
    <StyledDaysContainer>
      <DayWeatherCard />
      <DayWeatherCard />
      <DayWeatherCard />
      <DayWeatherCard />
      <DayWeatherCard />
    </StyledDaysContainer>
  );
}

const StyledDaysContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-right: 2rem;
`;

export default FiveDaysWeatherSection;