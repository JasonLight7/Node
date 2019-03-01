function agregaimgdepeliculaaldiv(imgenbase64,iddeldiv,iddelapelicula)
    
    {
        document.getElementById(iddeldiv).innerHTML += "<img src='"+imgenbase64+"' height='42' width='42' id= '"iddelapelicula"' onclick='cargataquilla('"+iddelapelicula+"')'>"
    }
    
    function cargarpeliculasdelmesyanno()
    {
        let clasepeliculainstanciada = new Pelicula();
               clasepeliculainstanciada.peliculapormesyanno(document.getElementById("mesactual").value,document.getElementById("annoactual").value).then(function(response) {
                   
 for(var elemento in response)
     {
         var fechadelapeliculaactual = new Date(response[elemento].FECHA);
         agregaimgdepeliculaaldiv(response[elemento].IMAGEN,fechadelapeliculaactual.getDate() + 1,response[elemento]._id);
         
     }
                   
                   
                   
                   
}, function(error) {
 console.log(error);
});
        
        
    }
                   
                   
                   
                   
}, function(error) {
 console.log(error);
});
        
        