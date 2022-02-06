import React from 'react';
import S from './style';
import sohrob from '../../images/sohrob.png'
import jeffrey from '../../images/jeffrey.png'
import roberto from '../../images/roberto.png'
import elena from '../../images/elena.png'

const Team = () => {
  return (
      <>

      <S.Container name="team">
        <S.Title />
        <S.TeamWrapper>
          <S.Member>
            <S.MemberImage member={roberto}/>
            <h2>
                  BitwiseBerto
            </h2>
            <p>
                  Bit Arranger
            </p>
          </S.Member>
          <S.Member>
            <S.MemberImage member={elena}/>
            <h2>
                  Elena 
            </h2>
            <p>
                  Pixel Masher
            </p>
          </S.Member>
          <S.Member>
            <S.MemberImage member={jeffrey}/>
            <h2>
                  GoSmokeAJeffrey 
            </h2>
            <p>
                  Discordian Wizard
            </p>
          </S.Member>
          <S.Member>
            <S.MemberImage member={sohrob}/>
            <h2>
                  Sozzinald
            </h2>
            <p>
                  Community Manager
            </p>
          </S.Member>
        </S.TeamWrapper>
      </S.Container>
      
      </>
  );
};

export default Team;
