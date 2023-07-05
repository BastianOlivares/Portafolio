import styled from "styled-components";
import { MdApartment, MdWork, MdSchool, MdAssuredWorkload } from "react-icons/md";



export function Portafolio () {
    return(
        <MisPoryectos>
            <h2>PORTAFOLIO</h2>
            <div className='subtitulo'>
                <h3>Mis proyectos</h3>
                <a href="#Y">VER MAS </a>
            </div>
            <CarruselPoryecto>
                <TarjetaCarrusel color="255, 165, 0"><div className="centrar"><MdApartment size="100px" color="white" /><div className="esconder">MUNICIPALIDA<br/>QUILLOTA</div></div></TarjetaCarrusel>
                <TarjetaCarrusel color="143, 43, 4"><div className="centrar"><MdAssuredWorkload size="100px" color="white" /><div className="esconder">EMBEDX</div></div></TarjetaCarrusel>
                <TarjetaCarrusel color="87, 27, 3"><div className="centrar"><MdSchool size="100px" color="white" /><div className="esconder">PROYECTO<br/>TITULO</div></div></TarjetaCarrusel>
                <TarjetaCarrusel color="58, 18, 3"><div className="centrar"><MdWork size="100px" color="white" /><div className="esconder">PORTAFOLIO</div></div></TarjetaCarrusel>
            </CarruselPoryecto>
            
        </MisPoryectos>
    );
}

const MisPoryectos = styled.div`
    h2{
        text-align: center;
        font-family: 'Hind Siliguri', sans-serif;
        font-size: 4rem;
        color: white;   
    }

    .subtitulo{
        font-family: 'Hind Siliguri', sans-serif;
        color:white;
        font-size: 1rem;
        margin-top: 20px;
        display: flex;  
        align-items:center;
        justify-content:center;     

        a{
            font-weight: bold;
            margin-left: 16px;
            text-decoration:none;
            color:white;
            color: rgb(58, 18, 3);
        }
    }
    
    position: relative;
    padding-top: 150px;
    width: 100%;
    
`;

const CarruselPoryecto = styled.div`
    box-shadow: 0px 0px 15px black;
    display: flex;
    margin-top: 100px;
    margin-inline: auto;
    width: 50%;
    height: 400px;
    background-color: red;
`;

const TarjetaCarrusel = styled.div`
    :hover{
        width: 140%;
        opacity:1;

        .esconder{
            font-family: 'Hind Siliguri', sans-serif;
            visibility: visible;
            opacity: 1;
        }
    }

    .centrar {
        margin-inline: auto;
        display: flex;
        flex-direction: column;
    }

    .esconder {
        margin-top: 10px;
        color: white;
        visibility: hidden;
        display: inline-block;
        text-align: center;
    }

    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: 1;
    background-color: rgb(${(props) => props.color});
    opacity: .8;
    transition: .5s ease;
`