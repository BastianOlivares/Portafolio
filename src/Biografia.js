import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarrucelBiografia } from "./Components/BioCarrucel";

//hacerlo con un objeto
export function MiBiografi() {
    return (
        <AreaBiografia>
            <AreaFotoPerfil></AreaFotoPerfil>
            <CarrucelBiografia />
        </AreaBiografia>
    );
}

const AreaBiografia = styled.div`
    width:100%;;
    height:60vh;
    background-color: rgb(143, 43, 4);
    position: relative;
    box-shadow: 0px -10px 20px black;
    box-shadow: 0px -10px 20px black;
`

const AreaFotoPerfil = styled.div`
    position: relative;
    top: -100px;
    left: 0;
    right:0;
    margin-inline: auto;
    width:25vh;
    height:25vh;
    background-color: rgb(87, 27, 3);
    border-radius: 50%;
    box-shadow: 0px -10px 20px black;
`