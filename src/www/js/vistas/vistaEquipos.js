"use strict" //activo modo estricto
import {Vista} from './vista.js'

export class VistaEquipos extends Vista {

	/**
     * Contructor de la clase VistaEquipos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador
          this.div2 = document.getElementById('liEquipos');
          this.div2.onclick=this.listar.bind(this)
               
	}

     listar(){
          const peticion =window.indexedDB.open("WonderLeague")
          peticion.onsuccess= (evento) =>{
               this.bd=evento.target.result;	
               console.log('Base de datos cargada.')
               const objectStore =this.bd.transaction('Equipos', 'readonly').objectStore('Equipos')
               const peticion = objectStore.getAll()
               peticion.onsuccess=function(){
                    let lista= peticion.result
                    this.listado=lista
                    this.div = document.getElementById('equipos')
                    this.imgescudo = this.div.getElementsByTagName('img')[0]
                    this.imgescudo.src = this.listado[0]['escudo']

                    this.nombre = this.div.getElementsByTagName('p')[0]
                    this.nombre.textContent = this.listado[0]['nombre']

                    this.desc = document.getElementsByClassName('descripcion')[0]
                    this.desc.textContent = this.listado[0]['descripcion']

                    this.fech = this.div.getElementsByTagName('p')[2]
                    this.fech.textContent = this.listado[0]['fechaCreacion']

                    this.com = this.div.getElementsByTagName('p')[3]
                    this.com.textContent = this.listado[0]['comunidad']
                    this.asc = this.div.getElementsByTagName('p')[4]
                    if(this.listado[0]['ascendido'][1]== null){
                         this.asc.textContent = this.listado[0]['ascendido'][1]
                    }
                    else{
                         this.asc.textContent = this.listado[0]['ascendido'][0]
                    }
               }
          }
     }
}