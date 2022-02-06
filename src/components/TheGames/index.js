import React from 'react';
import S from './style';

const TheGames = () => {
  return (
      <>

      <S.Container name="the games">
        <S.Title />
        <S.GamesBody>
        Neighbors will participate in several rounds to win airdrops and evolve their characters. Game mechanics incentivize long-term cooperation while providing opportunities for strategic play. The best behaving neighbors will become part of The Good Neighbor DAO which will be run using proceeds from the mint and royalties.
        </S.GamesBody>
        <S.VideoSection>
          <S.VideoWrapper>
            <iframe src="https://www.youtube.com/embed/S0qjK3TWZE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </S.VideoWrapper>
        </S.VideoSection>
        
      </S.Container>
      
      </>
  );
};

export default TheGames;
