const controllerpelicula = require('./controlerpelicula.js');
module.exports = (app) =>{
    let clasePelicula = new controllerpelicula();
    app.post('/api/nuevapelicula', clasePelicula.Guardar);
    app.post('/api/modificapelicula', clasePelicula.Modificar);
    app.post('/api/eliminapelicula', clasePelicula.Eliminar);
    app.post('/api/seleccionapelicula', clasePelicula.Seleccionartodos);
    app.post('/api/seleccionarporfecha', clasePelicula.Seleccionarporfecha);
    app.post('/api/seleccionarporid', clasePelicula.Seleccionarporid);
    app.post('/api/ssleccionarpornombre', clasePelicula.Seleccionarpornombre);
    app.get('*', (req,res) =>{res.sendfile('./login.html');});
};
    