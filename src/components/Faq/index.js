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
                        What is The Neighborhood?
                    </h2>
                    <p>
                        We believe there’s no reason a Neighborhood should have physical boundaries. Our core team members are located across Hong Kong, New York, and Miami. 
                        The Neighborhood will bridge the physical gap between these three temporal hubs of the decentralized world.
                    </p>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={rectangle}/>
              <S.BulletText>
                    <h2>
                      How will we do this?
                    </h2>
                    <ul>
                      <li> Concurrent pop up events and experiences along the Neighborhood circuit. </li>
                      <li> Integration with landmark institutions. </li>
                      <li> Community building through on and off chain collaborative games and communication channels. </li>
                    </ul>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={triangle}/>
              <S.BulletText>
                    <h2>
                      Where will the funds go?
                    </h2>
                    <ul>
                      <li> 75% of the mint proceeds and 50% of royalties will go to a community chest owned by The Naughty Neighbors. </li>
                      <li> The rest will be split between charity and operational costs. </li>
                      <li> Neighbors will vote on the usage of the community funds through our on-chain Town Hall. </li>
                    </ul>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={star}/>
              <S.BulletText>
                    <h2>
                      Ok, where can I buy one?
                    </h2>
                    <ul>
                      <li> Purchase ETH (Ethereum) through a trusted exchange (Binance, Coinbase, FTX etc.) </li>
                      <li> Download the <a link="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Metamask</a> browser extension, and send yourself some ETH </li>
                      <li> Once the project goes live, you will be able to purchase a Neighbor through our website by clicking the “mint” button and signing the prompted transaction. </li>
                      <li> Whitelist holders will get early access to this functionality. </li>
                      <li> We will announce the mint date in the coming weeks, stay tuned to our <a link="https://twitter.com/TheNeighborsDao">twitter</a> for updates on whitelisting! </li>
                    </ul>
              </S.BulletText>
        </S.Bullet>
        {/* <S.Bullet>
              <S.BulletImage shape={romb}/>
              <S.BulletText>
                    <h2>
                      Where's the roadmap?
                    </h2>
                    <p>
                      There is no roadmap. There are also no gimmicks, false promises, or rugs (there are plenty of those on the market already). We're all about the art, the games, and the good vibes. Our community will be grown through actions, not words!
                    </p>
              </S.BulletText>
        </S.Bullet> */}
      </S.Container>
      
      </>
  );
};

export default Faq;
