import React from 'react';
import S from './style';
import circle from '../../images/circle.png'
import rectangle from '../../images/rectangle.png'
import triangle from '../../images/traingle.png'
import star from '../../images/star.png'
import romb from '../../images/romb.png'

const Faq = () => {
  return (
      <>

      <S.Container name="faq">
        <S.Title />
        <S.Bullet>
              <S.BulletImage shape={circle}/>
              <S.BulletText>
                    <h2>
                        Wen Mint?
                    </h2>
                    <p>
                        There will be exactly 4269 released in total, the public sale will take place on XXXXX at XXX PST | XXX UTC. Early Settlers will be able to mint XXXXX at XXX PST | XXX UTC
                    </p>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={rectangle}/>
              <S.BulletText>
                    <h2>
                      Price Plz?
                    </h2>
                    <p>
                      1 SOL for public mint.
                    </p>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={triangle}/>
              <S.BulletText>
                    <h2>
                      What is SOL?
                    </h2>
                    <p>
                      Solana (SOL) is a blazing fast blockchain with virtually no transaction fees. Transfers in seconds, not hours.
                    </p>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={star}/>
              <S.BulletText>
                    <h2>
                      How Do I Mint? 
                    </h2>
                    <p>
                      Get yourself some SOL from a trusted exchange (FTX, Coinbase, Binance). You’ll need slightly more than 1 SOL to cover the transaction cost (usually less than a penny). Set up an in browser wallet extension, we recommend Phantom. Send that precious SOL to your wallet you’re all set for mint day!
                    </p>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={romb}/>
              <S.BulletText>
                    <h2>
                      Where's the roadmap?
                    </h2>
                    <p>
                      There is no roadmap. There are also no gimmicks, false promises, or rugs (there are plenty of those on the market already). We're all about the art, the games, and the good vibes. Our community will be grown through actions, not words!
                    </p>
              </S.BulletText>
        </S.Bullet>
      </S.Container>
      
      </>
  );
};

export default Faq;
