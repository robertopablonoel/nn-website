import styled from "styled-components";
import title from '../../images/team.png'

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

S.TeamWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`

S.Member = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 200px;
    text-align: center;
    align-items: top;
    margin:30px;
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