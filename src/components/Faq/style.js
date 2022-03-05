import styled from "styled-components";
import title from '../../images/2nd_edition/faq-1500.png'

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

S.Bullet = styled.div`
    display: grid;
    width: 70%;
    grid-template-columns: 10% 90%;
    color: white;
    padding-top: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 700px) {
        width: 100%;
        grid-template-columns: 15% 75%;
    }
`

S.BulletImage =  styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    background-image: url(${({ shape }) => (shape)});
    background-position: top;
    background-size: 40%;
    background-repeat: no-repeat;
`

S.BulletText = styled.div`
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
    
`
export default S;