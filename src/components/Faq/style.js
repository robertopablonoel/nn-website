import styled from "styled-components";
import title from '../../images/faq.png'
import circle from '../../images/circle.png'

const S = {}

S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    padding-top: 100px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 960px) {
        padding-top: 25px;
    }
`
S.Title = styled.div`
    padding-top: 13.3%;
    padding-bottom: 13.3%;
    background-position: center;
    width: 35%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${title});
    z-index: 2;
`;

S.Bullet = styled.div`
    display: grid;
    width: 70%;
    grid-template-columns: 10% 90%;
    color: white;
    padding-top: 10px;
    margin-bottom: 20px;
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
    h2 {
        font-size: 20px;
        color: white;
    }
    p {
        width:100%;
        font-size: 15px;
        color: white;
    }
`
export default S;