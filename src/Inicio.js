import styled from "styled-components"

export function Inicio() {
    return (
        <Container>
            <div>
                <h2>SOY<br/>BASTIAN<br/>OLIVARES</h2>
                <h3>Ingeniero en <br/>Ejecución Informática</h3>
            </div>
            <div></div>
        </Container>
    );
}

const Container = styled.div`
    div{
        margin-top: 4vw;
        padding-right:2vw;
        width:100%;
        height:100px;

        h2{
            font-family: 'Hind Siliguri', sans-serif;
            font-size: 8rem;
            text-align:right;
            color: white;
        }

        h3{
            font-family: 'Hind Siliguri', sans-serif;
            font-size: 2rem;
            text-align:right;
            color: white;
        }
    }
    position:absolute;
    top: 6vw;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    
   
`
