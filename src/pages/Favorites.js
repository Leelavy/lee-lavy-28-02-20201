import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavoritesWeather, updateFavorites } from '../redux/actions/favoritesActions';
import styled from 'styled-components';
import FavoriteCard from '../components/FavoriteCard';

const Favorites = () => {

  const dispatch = useDispatch();
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
    <StyledContainer>
      <StyledTitleArea>
        <h1>FAVORITES</h1>
        <Line />
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
    </StyledContainer>
  );
}

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GridContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Line = styled.div`
  width: 40%;
  height: 0.3rem;
  margin: 1rem 0;
  background: #00286B;
`;

const StyledTitleArea = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default Favorites;