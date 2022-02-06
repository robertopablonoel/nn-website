import styled from "styled-components";
import title from '../../images/the_games.png'

const S = {}

S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 960px) {
        margin-top: 25px;
    }
`

S.Title = styled.div`
    padding-top: 13.3%;
    background-position: center;
    width: 80%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${title});
    z-index: 2;
`;

S.GamesBody = styled.div`
    width: 70%;
    font-size: 22px;
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
`;

S.VideoSection = styled.div`
    width: 60%;
    @media screen and (max-width: 960px) {
        width: 90%
    }
`

S.VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */ 
    width: 100%;
    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
export default S;