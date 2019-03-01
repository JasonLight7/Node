//Taquilla//
var mongoose= require('mongoose'); //Llama al modelo//
var Schema= mongoose.Schema; //Funcion que se utiliza con el uso de mongoose//
var pelicula= new Schema({
	//Con el string se utiliza los textos//
	//Con el number se utiliza los numeros//
	//Con el date se utiliza las fechas//
	NOMBRE: String, 
	DURACIONMINUTOS: Number, 
	GENERO: String, 
	IDIOMASUB: String,
	SINOPSIS: String,
	CLASIFICACION: String,
	PRECIO: Number,
	HORAINICIO: Number,
	FECHA: Date,
	MINUTOINICIO: Number,
	ASIENTOS:{
		A1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		A6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
// Grupo A//

		B1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		B5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		
		B6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
// Grupo B//		

		C1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		C6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

// Grupo C//	

		D1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		D5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
// Grupo D/		


		E1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		E2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		E3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		E4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

// Grupo E//		
		F1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},
		F2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		F3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		F4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

// Grupo E//			

		G1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		G2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		G3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		G4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

// Grupo G//	
		H1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		H2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		H3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		},

		H4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number,
		}},
// Grupo H//	

IMAGEN: String,
ESTADO: Number


});
module.exports=mongoose.model('Pelicula', pelicula);


