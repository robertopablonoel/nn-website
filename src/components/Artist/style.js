import styled from "styled-components";
import title from '../../images/2nd_edition/artist-1500.png'

const S = {}

S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    padding-top: 50px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 960px) {
        padding-top: 25px;
    }
`

S.Title = styled.div`
    padding-top: 13.3%;
    margin-bottom: 4%;
    background-position: center;
    height: 100px;
    width: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${title});
    z-index: 2;
    @media screen and (max-width: 1000px) {
        width: 60%;
    }
    @media screen and (max-width: 700px) {
        width: 75%;
    }
    @media screen and (max-width: 480px) {
        width: 90%;
    }
`;

S.MonsterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
`

S.Monster = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 200px;
    text-align: center;
    align-items: top;
    margin:0px 30px;
    h2 {
        padding-top: 10px;
        font-size: 20px;
        color: white;
    }
    p {
        width:100%;
        font-size: 15px;
        color: white;
    }
`

S.MonsterImage = styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${({ monster }) => (monster)});
    height: 200px;
    width: 200px;
`

S.ArtistBody = styled.div`
    width: 55%;
    font-size: 19px;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 1000px) {
        width: 75%;
    }
    @media screen and (max-width: 700px) {
        margin-top: -1.5em;
        font-size: 17px;
    }
    @media screen and (max-width: 480px) {
        font-size: 15px;
        width: 87%;
    }
`;

S.ArrowImage = styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${({ arrow }) => (arrow)});
    height: 100px;
    width: 100px;
    @media screen and (max-width: 1110px) {
        display: none;
    }

`

S.Text = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    line-height: 1.3;
    h2 {
        font-size: 25px;
        color: white;
        padding-bottom: 7px;
    }
    p {
        width:100%;
        font-size: 18px;
        color: white;
    }
    ul {
        width:100%;
        padding-left: 20;
        font-size: 18px;
    }
    a {
        color: #fee57f;
    }
    
`

export default S;