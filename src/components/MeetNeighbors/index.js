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
                  is spending all his money on lottery tickets, maybe one day he’ll hit 🤑
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={angry}/>
                <h2>
                  Angry Andy
                </h2>
                <p>
                  is in a blind rage, he just hit a honey pot with his brand new minting bot
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
                  just cant stop hitting snooze, he's permanently stuck in his own DMT-induced daze
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={jealous}/>
                <h2>
                  Jealous Jenny 
                </h2>
                <p>
                  FUDs from the mouth, covets from the heart
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={proud}/>
                <h2>
                  Proud Penny
                </h2>
                <p>
                  stone cold flexer, the self-proclaimed queen of the metaverse
                </p>
              </S.Neighbor>
              <S.Neighbor>
                <S.NeighborImage neighbor={lust}/>
                <h2>
                  Lustful Lucy
                </h2>
                <p>
                  the only thing all the other neighbors have in common 😜
                </p>
              </S.Neighbor>
          </S.NeighborWrapper>
      </S.Container>
      
      </>
  );
};

export default MeetNeighbors;
