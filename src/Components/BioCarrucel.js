import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export function CarrucelBiografia() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <Tarjetas clas>
        <h2>SOBRE MI</h2>
        <div className="boxSobreMi">
          <div className="boxParrafos"><p>aqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de miaqui va un parrasfo de miaqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de miaqui va un parrasfo de miaqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de miaqui va un parrasfo de miaqui va un parrasfo de mi</p></div>
          <div className="boxParrafos"><p>aqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de miaqui va un parrasfo de miaqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de miaqui va un parrasfo de miaqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de mi aqui va un parrasfo de miaqui va un parrasfo de miaqui va un parrasfo de mi</p></div>
        </div>
      </Tarjetas>
      <Tarjetas clas>
        <h2>EXPERIENCIA</h2>
        <div>PraCtica</div>
        <div>EmbedX</div>
        <div>pROYECTO tITULO</div>
      </Tarjetas>
      <Tarjetas clas>
        <h2>FORMACIÓN</h2>
        <div>PraCtica</div>
        <div>EmbedX</div>
        <div>pROYECTO tITULO</div>
      </Tarjetas>
      <Tarjetas clas>
        <h2>AFICIONES</h2>
        <div>ICONO</div>
        <div>ICONO</div>
        <div>ICONO</div>
      </Tarjetas>
      
    </Slider>
  );
}

const Tarjetas = styled.div`
  h2{
    text-align: center;
    font-family: 'Hind Siliguri', sans-serif;
    font-size: 3rem;
    color: white;   
  }

  .boxSobreMi{
    
    .boxParrafos{
      width: 50vh;
      background-color: green;
    }

    display:flex;
    justify-content: space-around;
    background-color: orange;
    
  }

  width: 100%;
  max-height: 30vh;
  background-color: pink;
`