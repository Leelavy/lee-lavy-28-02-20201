import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavoritesWeather, updateFavorites } from '../redux/actions/favoritesActions';
import styled from 'styled-components';
import FavoriteCard from '../components/FavoriteCard';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 0,
    boxShadow: 'none',
    width: '100%',
    background: 'none',
  },
}));

const Favorites = () => {

  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const favoriteCities = useSelector(state => state.favorites.favoriteCities);
  const favoriteCitiesWeather = useSelector(state => state.favorites.favoriteCitiesWeather);
  const [noFavDisplay, setNoFavDisplay] = useState(false);

  useEffect(() => {
    dispatch(loadFavoritesWeather(favoriteCities))
    if (favoriteCities.length === 0) {
      setNoFavDisplay(true);
    }
  }, [favoriteCities])

  const handleFavDelete = (key) => {
    const filtered = favoriteCities.filter(city => city.Key != key)
    dispatch(updateFavorites(filtered));
  }

  return (
    <StyledContainer
      variants={pageAnimation(200, 0)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Paper className={classes.paper}>
        <StyledTitleArea>
          <h1>FAVORITES</h1>
          <Line color={theme.palette.secondary.main} />
        </StyledTitleArea>
        <GridContainer>
          <StyledFavorites>
            {favoriteCities && favoriteCitiesWeather && favoriteCities.map((city, i) => {
              const weather = favoriteCitiesWeather[i];
              return (
                <FavoriteCard
                  city={city}
                  weather={weather}
                  onFavDelete={handleFavDelete}
                  key={i}
                />)
            })
            }
            {noFavDisplay ? (<StyledNoFavs>You have no favorites.</StyledNoFavs>) : ''}
          </StyledFavorites>
        </GridContainer>
      </Paper>
    </StyledContainer>

  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
`;

const StyledNoFavs = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: lighter;
  font-size: 2rem;
`;

const StyledFavorites = styled.div`
  z-index: 1;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 0.2fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

const GridContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Line = styled.div`
  width: 40%;
  height: 0.3rem;
  margin: 1rem 0;
  background: ${props => props.color};
`;

const StyledTitleArea = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default Favorites;