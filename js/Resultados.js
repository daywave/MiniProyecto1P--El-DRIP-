function Agregar() {

    if(jugadores == null){
  
      jugadores=[];
  
    } 
    
    else {
  
      var nombre = document.getElementById("idNombre").value;
      var puntaje = 0;
      var tiempo = 0;
  
      var jugador = JSON.stringify({
        Nombre: nombre,
        Puntaje: puntaje,
        Tiempo: tiempo
      });
  
      jugadores.push(jugador);
      localStorage.setItem("jugadores", JSON.stringify(jugadores));
  
      document.getElementById("idNombre").value="";
  
      console.log(jugadores);
      
    }
  }
  

