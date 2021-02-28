import React from 'react';
import styled from 'styled-components';
import FavoriteCard from '../components/FavoriteCard';

const Favorites = () => {

  return (
    <StyledContainer>
      <StyledTitleArea>
        <h1>FAVORITES</h1>
        <Line />
      </StyledTitleArea>
      <GridContainer>
        <StyledFavorites>
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </StyledFavorites>
      </GridContainer>
    </StyledContainer>
  );
}

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