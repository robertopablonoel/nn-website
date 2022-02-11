import styled from "styled-components";
import gif from '../../images/GIF.gif';
import title from '../../images/2nd_edition/meet_the_neighbors-1500.png'


const S = {}

S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    padding-top: 1em;
    position: relative;
    z-index: 1;
`

S.Title = styled.div`
    padding-top: 13.3%;
    margin-top: 6%;
    margin-bottom: 4%;
    background-position: center;
    width: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${title});
    z-index: 2;
    @media screen and (max-width: 1000px) {
        height: 100px;
        width: 60%;
    }
    @media screen and (max-width: 700px) {
        width: 75%;
    }
    @media screen and (max-width: 480px) {
        width: 90%;
    }
`;

S.NeighborWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
`

S.Neighbor = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 250px;
    text-align: center;
    align-items: top;
    margin:10px;
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

S.NeighborImage = styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${({ neighbor }) => (neighbor)});
    height: 300px;
    width: 250px;
`

export default S;