import React from 'react';
import S from './style';

const HeroSection = () => {
  return (
      <>

      <S.HeroContainer>
          <S.HeroGif />
          <S.HeroTitle />
          <S.HeroBody>
          4269 randomly generated neighbors, these little humanoids may look cute, but they don’t play nice.
          Each neighbor has a fatal flaw representing one of the seven deadly sins. Individually, they’re some of the naughtiest creatures to ever roam the metaverse, but
          together they will thrive.<br/>WAGFMITTM 🚀🌕
          </S.HeroBody>
      </S.HeroContainer>
      
      </>
  );
};

export default HeroSection;
