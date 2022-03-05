import React from 'react';
import S from './style';
import monster1 from '../../images/2nd_edition/monster1.png'
import monster2 from '../../images/2nd_edition/monster2.png'
import monster3 from '../../images/2nd_edition/monster3.png'
import arrow1 from '../../images/2nd_edition/arrow1.png'
import arrow2 from '../../images/2nd_edition/arrow2.png'

const Artist = () => {
  return (
      <>
      <S.Container name="artist">
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
      <S.Text>
            Elena Bastyte was born the first triplet of independent Lithuania. She and her sisters grew up in Užupis, the art district of Vilnius, where she began art school at the age of twelve. One year into her practice, she drew the first Naughty Neighbor. This extra-dimensional being lived in her notebook for nine more years, while she graduated art school and began studying at the University of Berlin. Now she’s ready to give these little monsters life.
            <br/>
            <br/>
            <b>~</b>
            <br/>
            <br/>
            <a href="http://www.elenabastyte.com">Check out her website!</a>
      </S.Text>
      </S.ArtistBody>
      </S.Container>
      </>
  );
};

export default Artist;
