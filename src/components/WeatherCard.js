import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { WiStrongWind, WiHumidity, WiThermometer } from 'weather-icons-react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const WeatherCard = ({ title, value, measureUnit }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <StatDiv>
          <Line />
          <StyledDataDiv>
            <StatTitle>{title}</StatTitle>
            <StatValue>{`${value} ${measureUnit}`}</StatValue>
            <SpaceDiv />
            {title === 'Wind' ? (<WiStrongWind size={40} color='#00286B' />)
              : title === 'Humidity' ? (<WiHumidity size={40} color='#00286B' />)
                : (<WiThermometer size={40} color='#00286B' />)}
          </StyledDataDiv>
        </StatDiv>
      </Card>
    </div>
  );
}

const SpaceDiv = styled.div`
  flex-grow: 1;
`;

const StatValue = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const StatTitle = styled.p`
  font-size: 0.8rem;
  color: #adb6c5;
  margin-bottom: 0.2rem;
`;

const Card = styled.div`
  display: flex;
  background-color: #EAEDF2;
  border-radius: 1rem;
`;

const StatDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.2rem;
`;

const StyledDataDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
`;

const Line = styled.div`
  height: 100%;
  width: 0.3rem;
  background: black;
`;

export default WeatherCard;