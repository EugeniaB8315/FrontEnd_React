
//componente de estado con componente basado en funciones

import styles from '../styles/container.module.css'

//definir un estado con componente funcionales

import { useState } from 'react';

const VegetaF =() =>{

//variables locales
const imageUp="https://vegeta-flexiones.netlify.app/static/media/up.fd9f3c14.png";
const imageDown="https://vegeta-flexiones.netlify.app/static/media/down.2f147ccd.png";

const [contador,setContador]=useState(1)
const [flexion, setFlexion] =useState(0)
const [image, setImage] = useState(imageUp)

const incrementar = () =>{
    setContador(contador+1)
    if(contador % 2 === 0){
    setImage(imageUp)
    setFlexion(flexion+1)
    }
    else{setImage(imageDown)}

}



//render en un componente funcional es solo con el RETURN

return(

    <div className = {styles.container}>
        <button onClick={incrementar} className={styles.btn}> PushUp</button>
        <img src={image} alt="VegetaF"  />
        <h2>{flexion}</h2>
    </div>

 )
};

export default VegetaF;