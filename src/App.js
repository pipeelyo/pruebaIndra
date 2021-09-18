import React, { Fragment, useState, useRef, useEffect, Component } from "react";
import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";



const tablaFestivos = [
  {id_festivo: '926', dia_festivo: '2021-07-01', descripcion: 'prueba', id_proceso: '368', drop: <FontAwesomeIcon icon={faTrash} />},
  {id_festivo: '943', dia_festivo: '2021-07-12', descripcion: 'ooo', id_proceso: '368',drop: <FontAwesomeIcon icon={faTrash}/>},
  {id_festivo: '964', dia_festivo: '2021-07-15', descripcion: '', id_proceso: '368', drop: <FontAwesomeIcon icon={faTrash}/>},
  {id_festivo: '968', dia_festivo: '2021-04-21', descripcion: '', id_proceso: '368', drop: <FontAwesomeIcon icon={faTrash}/>},
];

const columnas = [
  {
    name: 'Id Festivo',
    selector: 'id_festivo',
    sortTable: true
  },
  {
    name: 'Dia Festivo',
    selector: 'dia_festivo',
    sortTable: true
  },
  {
    name: 'Descripción',
    selector: 'descripcion',
    sortTable: true
  },
  {
    name: 'Id Proceso',
    selector: 'id_proceso',
    sortTable: true
  },
  {
    name: 'Accion',
    selector: 'drop',
    sortTable: true
  }
];

const paginacionOpciones = {
  rowsPerPagesText: 'Filas por Páginas',
  rangeSeparatorText: true,
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}
class App extends Component {

  state = {
    busqueda: '',
    festivos: []
  }

  onChange=async e=>{
    e.persist()
    await this.setState({busqueda: e.target.value})
    this.filtrarElementos();
  }

  filtrarElementos = () =>{
    var search =tablaFestivos.filter(item =>{
      if(item.dia_festivo.includes(this.state.busqueda) ||
      item.id_festivo.includes(this.state.busqueda) || 
      item.descripcion.normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.id_proceso.includes(this.state.busqueda)
      ){
        return item;
      }
    })

    this.setState({festivos: search})
  }

  componentDidMount(){
    this.setState({festivos: tablaFestivos})
  }
  render() {
    return (
      <div className="container">
      <div className="table-responsive col-md-12">
          <div className="barraBusqueda">
          <input
            type="text"
            placeholder="Buscar"
            className="textField"
            name="busqueda"
            value= {this.state.busqueda}
            onChange={this.onChange}
          />
            <button type="button" className="btnBuscar" >
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
        <DataTable 
          columns = {columnas}
          data = {this.state.festivos}
          pagination
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          fixedHeaderScrollHeight= "600px"
          noDataComponent={<span>No se encontró ningún elemento</span>}
        />
      </div>
      </div>
     
    );
  } 
    
}

export default App;
