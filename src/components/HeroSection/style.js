import styled from "styled-components";
import gif from '../../images/GIF.gif';
import title from '../../images/naughty_neighbors.png'

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
    height: 180px;
    background-position: center;
    width: 80%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${title});
    z-index: 2;
`;


S.HeroBody = styled.div`
    width: 80%;
    font-size: 25px;
    color: #fff;
    text-align: center;
`;



export default S;