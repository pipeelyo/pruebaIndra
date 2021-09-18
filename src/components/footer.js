import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class footer extends Component {
     vecinos(){

    }
    render() {
        let vecinos = () =>{
            let entrada = document.getElementById("entrada").value;
            let salida = [];
            let html = '';
            for (let i = 0; i < entrada.length; i++) {
                if(entrada[i] == entrada[i+1] && entrada[i] == 0 ){
                    salida[salida.length] = 0
                }else if(entrada[i] == entrada[i+1] && entrada[i] == 1 ){
                    salida[salida.length] = 1
                }else if(entrada[i] == 0){
                    salida.push(1);
                }else if(entrada[i] == 1){
                    salida.push(0);
                }
            }
            for (let i = 0; i < salida.length; i++) {
                html += salida[i];
            }
            document.getElementById("salida").innerHTML = html;
        }
        return (
            <div className="container">
                <hr />
                <p>Andres Felipe Garcia Caycedo - prueba desarrollador INDRA</p>
                <p>prueba Parte 1</p>
                <input type="text" placeholder="digite la entrada para el punto 1" id="entrada"/>
                <button onClick={vecinos}>respuesta</button>
                <div id="salida"></div>
            </div>
        )
    }
}