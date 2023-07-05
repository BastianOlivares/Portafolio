import styled from "styled-components"

export function NavBar() {
    return(
        <NavegatorBar>
            <ul>
                <li><a href="#d">INICIO </a></li>
                <li><a href="#f">BIOGRAFÍA </a></li>
                <li><a href="#g">HABILIDADES</a></li>
                <li><a href="#h">PORTAFOLIO</a></li>
                <li><a href="#h">MI LINEA</a></li>
                <li><a href="#j">CONTACTO</a></li>
            </ul>
        </NavegatorBar>
    );
}

const NavegatorBar = styled.nav`
    ul{
        display: flex;
        align-items:center;
        justify-content:center;
        
        li{
            
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: bold;
            margin-inline:3vw;

            a{
                text-decoration:none;
                color:white;

                &:hover {
                    color: orange;
                }
            }
        }
    }
    display:flex;
    position:absolute;
    width:100%;
    z-index:1;
    height: 6vw;
    align-items:center;
    justify-content:center;
    background: rgba(189,189,189, .3);
    box-shadow: 0px 10px 15px black;
`;