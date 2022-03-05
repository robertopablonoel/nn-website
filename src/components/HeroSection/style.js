import styled from "styled-components";
import gif from '../../images/GIF.gif';
import title from '../../images/2nd_edition/naughty_neighbors-1500.png'
import title2 from '../../images/2nd_edition/naughty_neighbors-1500-2.png'

const S = {}

S.HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    position: relative;
    z-index: 1;
`

S.HeroGif = styled.div`
    height: 350px;
    width: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${gif});
    z-index: 2;
`;

S.HeroTitle = styled.div`
    padding-top: 13.3%;
    background-position: center;
    width: 80%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${title});
    z-index: 2;
    @media screen and (max-width: 1000px) {
      background-image: url(${title2});
      height: 100px;
      margin-bottom: 4%;
      width: 60%;
    }
    @media screen and (max-width: 700px) {
        width: 75%;
    }
    @media screen and (max-width: 480px) {
        width: 90%;
        margin-bottom: 8%;
        margin-top: 5%;
    }
`;


S.HeroBody = styled.div`
    width: 75%;
    font-size: 22px;
    color: #fff;
    text-align: center;
    margin-bottom: 100px;
    @media screen and (max-width: 1000px) {
        font-size: 19px;
      }
    @media screen and (max-width: 700px) {
    font-size: 17px;
    }
    @media screen and (max-width: 480px) {
    font-size: 15px;
    width: 87%;
    }
`;



export default S;