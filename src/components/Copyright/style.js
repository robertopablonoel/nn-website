import styled from "styled-components";
import neighbor from '../../images/neighbor.png'

const S = {}

S.Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    margin-top: 100px;
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
`

S.CopyImage = styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${neighbor});
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
`

S.CopyText = styled.div`
    text-align: center;
    h2 {
        font-size: 12px;
        font-weight: bold;
        color: white;
    }
    p {
        font-size: 10px;
        color: white;
    }
`
export default S;