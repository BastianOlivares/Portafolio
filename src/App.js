

//components
import {NavBar} from './NavBar';
import {Inicio} from'./Inicio';
import {Habilidades} from './Habilidades'
import { MiBiografi } from './Biografia';

//image
import coffeeVibes from './coffeeVibes.png';
import coffeeComputer from'./coffeeComputer.png';
import portafolio from './portafolio.png'

import {Parallax} from 'react-parallax' //efecto de movimiento
import { Portafolio } from './Portaflio';


function App() {
  return (
    <>

      <div>
        <Parallax bgImage={coffeeVibes} strength={400}>
          <div style={{height: "100vh"}}>
              <NavBar></NavBar>
              <Inicio></Inicio>
              
          </div>
        </Parallax>

        <MiBiografi></MiBiografi>
        
        <Parallax bgImage={coffeeComputer} strength={400}>
          <div style={{height: "100vh"}}>
            <Habilidades></Habilidades>
          </div>
        </Parallax>

        
        <Parallax bgImage={portafolio} strength={400}>
          <div style={{height: "100vh"}}>
            <Portafolio></Portafolio>
          </div>
        </Parallax>
        
         
        
        
      </div>
    </>
  );
}



export default App;
