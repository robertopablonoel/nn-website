import styled from "styled-components";
import gif from '../../images/GIF.gif';
import title from '../../images/naughty_neighbors.png'
import title2 from '../../images/naughty_neighbors2.png'

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
    @media screen and (max-width: 960px) {
        background-image: url(${title2});
    }
`;


S.HeroBody = styled.div`
    width: 75%;
    font-size: 22px;
    color: #fff;
    text-align: center;
`;



export default S;