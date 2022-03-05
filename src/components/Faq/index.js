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
                      The Neighborhood will span the cities of New York, Hong Kong, and Miami. It will bridge the physical gap between these web3 powerhouses.
                    </p>
                    <p>
                      On move in day, holders will be granted the keys to their new cribs, where they can host other Neighbors, show off their art, and bool. Think twitter spaces, but in your digital living quarters.
                    </p>
              </S.BulletText>
        </S.Bullet>
        <S.Bullet>
              <S.BulletImage shape={rectangle}/>
              <S.BulletText>
                    <h2>
                      How will we do this?
                    </h2>
                    <p>
                    The project will be broken into four phases, following the evolution of the Neighbors: Egg, Larvae, Pupa, and Bug.
                    </p>
                    <br/>
                    <ul>
                      <li> <b style={{ color: '#fee57f' }}>Egg:</b> On mint, holders will receive a beautiful, baby neighbor with one or two super active meta volcanoes.  </li>
                      <li> <b style={{ color: '#80d8fe' }}>Larvae:</b> Mother Neighbor Elena casts an naughtilus animiticus spell on her babies and the meta volcanoes come to life as GIFs. </li>
                      <li> <b style={{ color: '#b389fe' }}>Pupa:</b> The Neighbors are granted the keys to the hottest digital cribs on the market. Think club penguin, but for the moon one of New York, Hong Kong, and Miami. </li>
                      <li> <b style={{ color: '#ff98d5' }}>Bug:</b> The Intra-dimensional Cocoon Hatches </li>
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
                      <li> 100% of the mint proceeds and 50% of royalties will go to a community chest. </li>
                      <li> Neighbors will vote on the usage of the funds through our on-chain Town Hall. </li>
                      <li> As a community, we will build a digital Neighborhood, bringing together the web3 capitals of the world. </li>
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
