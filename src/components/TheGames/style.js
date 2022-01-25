import styled from "styled-components";
import title from '../../images/the_games.png'

const S = {}

S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    margin-top: 50px;
    position: relative;
    z-index: 1;
`

S.Title = styled.div`
    height: 350px;
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
export default S;