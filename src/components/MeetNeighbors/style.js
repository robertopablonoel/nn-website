import styled from "styled-components";
import gif from '../../images/GIF.gif';
import title from '../../images/meet_the_neighbors.png'


const S = {}

S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    margin-top: 150px;
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