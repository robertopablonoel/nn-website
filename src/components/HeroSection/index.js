import React from 'react';
import S from './style';

const HeroSection = () => {
  return (
      <>

      <S.HeroContainer>
          <S.HeroGif />
          <S.HeroTitle />
          <S.HeroBody>
          10000 randomly generated Neighbors; bridging the web3 corridor of Hong Kong, New York, and Miami.
          <br/>
          ~
          <br/>
          Watch them evolve from eggs to bugs and form the hottest Neighborhood of the metaverse.
          <br/>

          </S.HeroBody>
      </S.HeroContainer>
      
      </>
  );
};

export default HeroSection;
