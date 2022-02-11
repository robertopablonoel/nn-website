import React from 'react';
import S from './style';
import monster1 from '../../images/2nd_edition/monster1.png'
import monster2 from '../../images/2nd_edition/monster2.png'
import monster3 from '../../images/2nd_edition/monster3.png'
import arrow1 from '../../images/2nd_edition/arrow1.png'
import arrow2 from '../../images/2nd_edition/arrow2.png'

const Team = () => {
  return (
      <>

      <S.Container name="team">
        <S.Title />
        <S.MonsterWrapper>
          <S.Monster>
            <S.MonsterImage monster={monster1}/>
            <h2>
                  2013
            </h2>
            <p>
                  Hand draw
            </p>
          </S.Monster>
          <S.ArrowImage arrow={arrow1}/>
          <S.Monster>
            <S.MonsterImage monster={monster2}/>
            <h2>
                  2021 
            </h2>
            <p>
                  Digital
            </p> 
          </S.Monster>
          <S.ArrowImage arrow={arrow2} style={{marginTop: '6em'}}/>
          <S.Monster>
            <S.MonsterImage monster={monster3}/>
            <h2>
                  2022 
            </h2>
            <p>
                  Digital
            </p>
          </S.Monster>
        </S.MonsterWrapper>
        <S.ArtistBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula 
            purus in neque ultrices, eu ullamcorper augue laoreet. Donec mi nunc, 
            pharetra vel risus non, hendrerit vulputate tellus. In in nunc at odio pulvinar 
            faucibus. In a lobortis felis. Nullam justo nisl, feugiat vel vestibulum ac, 
            interdum quis mi. Integer in diam vel nunc mattis gravida non in felis.
        </S.ArtistBody>
      </S.Container>
      
      </>
  );
};

export default Team;