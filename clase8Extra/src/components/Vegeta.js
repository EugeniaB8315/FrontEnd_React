/////componente de estado con componente basado en clases
import React from 'react'
import  styles from '../styles/container.module.css'

class Vegeta extends React.Component{

//variables locales,  se usa con this.imageUp
imageUp="https://vegeta-flexiones.netlify.app/static/media/up.fd9f3c14.png";
imageDown="https://vegeta-flexiones.netlify.app/static/media/down.2f147ccd.png";


constructor(){

    super();
    //componente de estado inicial
    //tiene compomnete de estado, o multiples
    this.state = {
        contador:1,
        image: this.imageUp,
        flexion:0
    }
//siempre se pone las funciones de esta forma
    this.incrementar = this.incrementar.bind(this);

}

//metodo para button, cambiar de estado a vegeta
 

//metodo para incrementar la variable.   contador y flexion,
//se necesita de this.state o sea del estado del vegeta inicial..
//cuando contador sea par, debe cambiar de estado de la imagen
incrementar = ()=>{
    
    this.setState({
        contador:this.state.contador+1,
        image:(this.state.contador %2===0? this.imageUp: this.imageDown),
        flexion:(this.state.contador%2===0 ? this.state.flexion + 1 : this.state.flexion)

    }
    )

}

//render unico metodo obligatorio

render(){

    return(

        <div className = {styles.container}>
            <button onClick={this.incrementar} className={styles.btn}> PushUp</button>
            <img src={this.state.image} alt="Vegeta"  />
            <h2>{this.state.flexion}</h2>
        </div>
    )
   }
};

export default Vegeta;
