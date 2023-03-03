var jugadores = localStorage.getItem("jugadores");
jugadores = JSON.parse(jugadores);
jugadores = [];

//Almacenar datos en local storage y guardarlos en un vector
function Agregar() {
  var nombre = document.getElementById("idNombre").value;
  var jugador = JSON.stringify({
    Nombre: nombre
  });

  jugadores.push(jugador);
  localStorage.setItem("jugadores", JSON.stringify(jugadores));

  console.log(jugadores);
}