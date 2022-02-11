import styled from "styled-components";
import title from '../../images/2nd_edition/team-1500.png'

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

S.TeamWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
`

S.Member = styled.div`
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

S.MemberImage = styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${({ member }) => (member)});
    height: 200px;
    width: 200px;
`
export default S;