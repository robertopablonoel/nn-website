import React from 'react';
import S from './style';

const Copyright = () => {
  return (
      <>

      <S.Container>
            <S.CopyImage/>
            <S.CopyText>
                  <h2>
                        Copyright 2022, Naughty Neighbors
                  </h2>
                  <p>
                        Built on the Ethereum blockchain
                  </p>
            </S.CopyText>
        
      </S.Container>
      
      </>
  );
};

export default Copyright;
