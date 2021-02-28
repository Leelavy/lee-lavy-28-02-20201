import React from 'react';
import styled from 'styled-components';
import { WiDaySunny } from 'weather-icons-react';

const DayWeatherCard = () => {

  return (
    <StyledDayCard>
      <p>Mon</p>
      <WiDaySunny size={40} color='#a6b3c9' />
      <p>30°</p>
      <p>25°</p>
    </StyledDayCard>
  );
}

const StyledDayCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #DEE2EB;
  width: 100%;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 0.8rem;

  p {
    color: #a6b3c9;
    margin: 0 0.2rem;
  }
`;

export default DayWeatherCard;