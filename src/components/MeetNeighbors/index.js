import React from 'react';
import S from './style';
import jealous from '../../images/jealous.png'
import gluttonous from '../../images/gluttonous.png'
import greedy from '../../images/greedy.png'
import lazy from '../../images/lazy.png'
import lust from '../../images/lust.png'
import proud from '../../images/proud.png'
import angry from '../../images/angry.png'

const MeetNeighbors = () => {
  return (
      <>

      <S.Container name="meet the neighbors">
          <S.Title />
          <S.NeighborWrapper>
              <S.Neighbor>
                <S.NeighborImage neighbor={greedy}/>
                <h2>
                  Greedy Gary
                </h2>
                <p>
                  Life is the ultimate wager, but Gary will do anything for a buck.
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={angry}/>
                <h2>
                  Angry Andy
                </h2>
                <p>
                  Ooogha bugha
                  <br/>
                  ¡Fuck you!
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={gluttonous}/>
                <h2>
                  Hungry Harry
                </h2>
                <p>
                  Gluttony was never so glamorous – or potassium packed.
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={lazy}/>
                <h2>
                  Lazy Lenny
                </h2>
                <p>
                Slug of Slugs & Sloth of Sloths
                <br/>
                <i>In action</i>
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={jealous}/>
                <h2>
                  Jealous Jenny 
                </h2>
                <p>
                  呷醋，妒忌
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={proud}/>
                <h2>
                  Proud Penny
                </h2>
                <p>
                ✨Fragile in Fortitude, but Shining✨
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={lust}/>
                <h2>
                  Lustful Lucy
                </h2>
                <p>
                  Horny singles near you! 
                </p>
              </S.Neighbor>
          </S.NeighborWrapper>
      </S.Container>
      
      </>
  );
};

export default MeetNeighbors;
