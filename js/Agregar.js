var jugadores = localStorage.getItem("jugadores");
jugadores = JSON.parse(jugadores);
jugadores = [];

//Almacenar datos en local storage y guardarlos en un vector
function Agregar() {
  
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

  console.log(jugadores);
}