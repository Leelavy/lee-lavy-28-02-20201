import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { getDegree } from '../utils';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiCloudyWindy,
  WiMoonrise
} from 'weather-icons-react';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    boxShadow: 'none',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: '1rem',
    margin: '0 1rem',
    borderRadius: '0.8rem',
    fontSize: '0.9rem',
    background: theme.palette.common.paper,
  },
}));

const DayWeatherCard = ({ day }) => {

  const classes = useStyles();
  const measureUnit = useSelector(state => state.measureUnit.measureUnit);

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
    <Paper className={classes.paper}>
      <p>{getDayOfWeek()}</p>
      {getWeatherIcon()}
      <StyledTemp>{getDegree(day.Temperature.Maximum.Value, measureUnit)}°</StyledTemp>
      <StyledTemp>{getDegree(day.Temperature.Minimum.Value, measureUnit)}°</StyledTemp>
    </Paper>
  );
}

const StyledTemp = styled.p`
  margin-left: 0.3rem;
`;

export default DayWeatherCard;