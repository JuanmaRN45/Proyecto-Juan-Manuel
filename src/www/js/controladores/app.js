"use strict" //activo modo estricto
import {Modelo} from '../modelos/modelo.js'
import {VistaNav} from '../vistas/vistaNav.js'
import {VistaLiga} from '../vistas/vistaLiga.js'
import {VistaAlta} from '../vistas/vistaAlta.js'
import {VistaEquipos} from '../vistas/vistaEquipos.js'
import {VistaModTabla} from '../vistas/vistaModTabla.js'
import {VistaModEquipo} from '../vistas/vistaModEquipo.js'

/**
 * Clase Controlador que administra las vistas
 */
class Controlador {
	/**
	 * Constructor de la clase Controlador
	 * Cuando carga la web ejecuta el método iniciar
	 */
	constructor() {
		window.onload=this.iniciar.bind(this)
	}

	/**
	 * Método iniciar que es el primero en ejecutarse cuando se carga la pantalla
	 */
	iniciar() {
		console.log('¡WONDER LEAGUE!')
		this.modelo=new Modelo(this, this.iniciarVistas.bind(this))
	}

	/**
	 * Método iniciarVistar que se ejecuta al iniciar el modelo
	 */
	iniciarVistas() {
		console.log('hola')
		this.nav = document.getElementsByTagName('nav')[0]
		this.vistaNav = new VistaNav(this.nav, this)

        this.divLiga = document.getElementById('liga')
        this.vistaLiga = new VistaLiga(this.divLiga, this)

        this.divEquipos = document.getElementById('equipos')
        this.vistaEquipos = new VistaEquipos(this.divEquipos, this)

		//SETEO DE LAS DISTINTAS VISTAS DENTRO DE LA VISTA CATEGORIAS(LOS DISTINTOS DIVS QUE HAY)
		this.divAlta=document.getElementById("alta");
		this.vistaAlta=new VistaAlta(this.divAlta, this);

		this.divModTabla = document.getElementById('modTabla')
        this.vistaModTabla = new VistaModTabla(this.divModTabla, this)

		this.divModEquipo = document.getElementById('modEquipo')
		this.vistaModEquipo = new VistaModEquipo(this.divModEquipo, this)
		this.pulsarNavLiga()		// Iniciar en vista listado
	}

	ocultarVistas(){
		this.vistaLiga.mostrar(false)
		this.vistaEquipos.mostrar(false)
		this.vistaAlta.mostrar(false)
		this.vistaModTabla.mostrar(false)
		this.vistaModEquipo.mostrar(false)
	}
	/**
	 * Atención a la pulsación sobre el enlace de categorías
	 */
	pulsarNavLiga() {
		this.ocultarVistas()
		this.vistaLiga.mostrar(true)
	}

	/**
	 * Atención a la pulsación del enlade de reflexiones
	 */
	pulsarNavEquipos() {
		this.ocultarVistas()
		this.vistaEquipos.mostrar(true)
	}

	pulsarModTabla() {
		this.ocultarVistas()
		this.vistaModTabla.mostrar(true)
	}

	pulsarModEquipo() {
		this.ocultarVistas()
		this.vistaModEquipo.mostrar(true)
	}

	pulsarAlta() {
		this.ocultarVistas()
		this.vistaAlta.mostrar(true)
	}

	getModelo() {
		return this.modelo
	}
}
const app = new Controlador()

