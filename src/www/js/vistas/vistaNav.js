"use strict"
/**
 *	Implementa una vista del menú de navegación del administrador.
 */
export class VistaNav{
	/**
	 *	Constructor de la clase.
	 *	@param {HTMLElement} nav Nav de HTML en el que se desplegará la vista.
	 *	@param {Object} controlador Controlador de la vista del administrador.
	 */
	constructor(nav, controlador) {
		this.controlador = controlador
		this.nav = nav
		
		this.divLiga = document.getElementById('liga')
		this.divEquipos = document.getElementById('equipos')
		this.divAlta = document.getElementById('alta')
		this.divModEquipo = document.getElementById('modEquipo')
		this.divLstado = document.getElementById('listado')

		this.btnLiga = this.nav.getElementsByTagName('button')[0]
		this.btnEquipos = this.nav.getElementsByTagName('button')[1]
		this.btnBusqueda = this.nav.getElementsByTagName('button')[2]
		this.btnAnadir = this.divLiga.getElementsByTagName('button')[3]
		this.btnModTabla = this.divLiga.getElementsByTagName('button')[4]
		this.btnLiga.onclick = this.pulsarLiga.bind(this)
		this.btnEquipos.onclick = this.pulsarEquipos.bind(this)
		this.btnBusqueda.onclick = this.pulsarNavListado.bind(this)
		this.btnAnadir.onclick = this.pulsarAnadir.bind(this)
		this.btnModTabla.onclick = this.pulsarNavModTabla.bind(this)

		this.btnLiga2 = this.nav.getElementsByTagName('button')[5]
		this.btnEquipos2 = this.nav.getElementsByTagName('button')[6]
		this.btnModEquipo = this.divEquipos.getElementsByTagName('button')[7]
		this.btnLiga2.onclick = this.pulsarLiga.bind(this)
		this.btnEquipos2.onclick = this.pulsarEquipos.bind(this)
		this.btnModEquipo.onclick = this.pulsarNavModEquipos.bind(this)

		this.btnLiga3 = this.nav.getElementsByTagName('button')[8]
		this.btnEquipos3 = this.nav.getElementsByTagName('button')[9]
		this.btnEnviar2 = this.divAlta.getElementsByTagName('button')[10]
		this.btnLiga3.onclick = this.pulsarLiga.bind(this)
		this.btnEquipos3.onclick = this.pulsarEquipos.bind(this)
		this.btnEnviar2.onclick = this.pulsarLiga.bind(this)

		this.btnLiga4 = this.nav.getElementsByTagName('button')[11]
		this.btnEquipos4 = this.nav.getElementsByTagName('button')[12]
		this.btnEnviar3 = this.nav.getElementsByTagName('button')[13]
		this.btnLiga4.onclick = this.pulsarLiga.bind(this)
		this.btnEquipos4.onclick = this.pulsarEquipos.bind(this)
		this.btnEnviar3.onclick = this.pulsarLiga.bind(this)

		this.btnLiga5 = this.nav.getElementsByTagName('button')[14]
		this.btnEquipos5 = this.nav.getElementsByTagName('button')[15]
		this.btnEnviar4 = this.divModEquipo.getElementsByTagName('button')[16]
		this.btnLiga5.onclick = this.pulsarLiga.bind(this)
		this.btnEquipos5.onclick = this.pulsarEquipos.bind(this)
		this.btnEnviar4.onclick = this.pulsarEquipos.bind(this)

		this.btnLiga6 = this.nav.getElementsByTagName('button')[17]
		this.btnEquipos6 = this.nav.getElementsByTagName('button')[18]
		this.btnModEquipo2 = this.divLstado.getElementsByTagName('button')[19]
		this.btnLiga6.onclick = this.pulsarLiga.bind(this)
		this.btnEquipos6.onclick = this.pulsarEquipos.bind(this)
		this.btnModEquipo2.onclick = this.pulsarNavModEquipos.bind(this)
		
		
	}

	
	pulsarLiga() {
		this.controlador.pulsarNavLiga()
	}

	pulsarEquipos() {
		this.controlador.pulsarNavEquipos()
	}

	pulsarAnadir() {
		this.controlador.pulsarAlta()
	}

	pulsarNavModTabla() {
		this.controlador.pulsarModTabla()
	}

	pulsarNavModEquipos() {
		this.controlador.pulsarModEquipo()
	}

	pulsarNavListado() {
		this.controlador.pulsarListado()
	}
}