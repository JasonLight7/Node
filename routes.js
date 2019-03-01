var controllerpelicula = require('./controllerpelicula.js');

//Libreria donde se encuentra las funciones disponible con los url A...//
 
module.exports= function(app){

//La funcion app es express en el servidor//
	var clasepelicula= new controllerpelicula();
	//Si es un post devuelvame lo que contiene la funcion(con nombre)//
	app.post('/api/nuevapelicula', clasepelicula.Guardar); 
	app.post('/api/modificapelicula', clasepelicula.Modificar); 
	app.post('/api/eliminapelicula', clasepelicula.Eliminar); 
	app.post('/api/seleccionapelicula', clasepelicula.Seleccionartodos); 
	app.post('/api/seleccionarporfecha', clasepelicula.Seleccionarporfecha); 
	app.post('/api/seleccionarporid', clasepelicula.Seleccionarporid); 
	app.post('/api/seleccionarpornombre', clasepelicula.Seleccionarpornombre); 

app.get('*', function(req,res){ //localhost:8080 el signo * toma todo lo que no existe en el localhost
res.sendfile('./login.html'); // Carga unica de la visita

});


};