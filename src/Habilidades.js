import styled from "styled-components";

export function Habilidades(){
    return(
        <Grafico>
            <h2>Habilidades</h2>
            <h3>Mis conocimientos de Software</h3>
            <ul>
                <li> <div className="alinearIzq">HTML</div> <BarraProgreeso porcentaje="10%"><div></div></BarraProgreeso> <span> 10%</span></li>
                <li> <div className="alinearIzq">CSS</div> <BarraProgreeso porcentaje="30%"><div></div></BarraProgreeso> <span> 30%</span></li>
                <li> <div className="alinearIzq">JAVASCRIPT</div> <BarraProgreeso porcentaje="50%"><div></div></BarraProgreeso> <span> 50%</span></li>
                <li> <div className="alinearIzq">C</div> <BarraProgreeso porcentaje="60%"><div></div></BarraProgreeso><span> 60%</span> </li>
                <li> <div className="alinearIzq">PYTHON</div> <BarraProgreeso porcentaje="30%"><div></div></BarraProgreeso> <span> 30%</span></li>
                <li> <div className="alinearIzq">DART</div> <BarraProgreeso porcentaje="30%"><div></div></BarraProgreeso> <span> 30%</span></li>
                <li> <div className="alinearIzq">JAVA</div> <BarraProgreeso porcentaje="30%"><div></div></BarraProgreeso> <span> 30%</span></li>
                <li> <div className="alinearIzq">PHP</div> <BarraProgreeso porcentaje="30%"><div></div></BarraProgreeso> <span> 30%</span></li>
            </ul>
        </Grafico>
    );
}

const Grafico= styled.div`
    h2{
        text-align: center;
        font-family: 'Hind Siliguri', sans-serif;
        font-size: 4rem;
        color: white;
    }

    h3 {
        text-align: center;
        font-family: 'Hind Siliguri', sans-serif;
        font-size: 1rem;
        color: white;
    }

    ul{
        margin-top: 50px;
        font-family: 'Hind Siliguri', sans-serif;

        li{
            color: white;
            font-size: 2rem;
            display: flex;
            margin: 20px;

            .alinearIzq{
                width: 30%;
            }
            
        }
    }
    margin-top: 100px;
    margin-inline: 100px;
`;

const BarraProgreeso = styled.div`

    div{
        position: relative;
        width: ${(props) => props.porcentaje};
        height:20px;
        background-color: orange;
        border-radius: 2em;
        overflow: hidden;
    }

    width: 60%;
    
`
