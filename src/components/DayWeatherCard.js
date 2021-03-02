import React from 'react';
import styled from 'styled-components';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiCloudyWindy, WiMoonrise } from 'weather-icons-react';

const DayWeatherCard = ({ day }) => {

  const getDayOfWeek = () => {
    var timestamp = day.EpochDate;
    var a = new Date(timestamp * 1000);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[a.getDay()]
  }

  const getWeatherIcon = () => {
    const icon = day.Day.Icon;
    if ((icon >= 1 && icon <= 4) || icon == 32) {
      return (<WiDaySunny size={40} color='#a6b3c9' />);
    }
    else if (icon >= 5 && icon <= 11) {
      return (<WiCloudy size={40} color='#a6b3c9' />);
    }
    else if ((icon >= 12 && icon <= 18) || (icon >= 39 && icon <= 40)) {
      return (<WiRain size={40} color='#a6b3c9' />);
    }
    else if ((icon >= 19 && icon <= 29) || (icon >= 43 && icon <= 44)) {
      return (<WiSnow size={40} color='#a6b3c9' />);
    }
    else if (icon == 31 || icon == 32) {
      return (<WiCloudyWindy size={40} color='#a6b3c9' />);
    }
    else if (icon >= 33 || icon <= 38) {
      return (<WiMoonrise size={40} color='#a6b3c9' />);
    }
    else {
      return (<WiCloudy size={40} color='#a6b3c9' />);
    }
  }

  return (
    <StyledDayCard>
      <p>{getDayOfWeek()}</p>
      {getWeatherIcon()}
      <p>{day.Temperature.Maximum.Value}°</p>
      <p>{day.Temperature.Minimum.Value}°</p>
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