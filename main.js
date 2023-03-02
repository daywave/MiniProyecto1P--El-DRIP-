const CARDS = 6;

var animales = ["borrego", "caballo", "cerdo", "perro", "pollo", "vaca"];
var puntaje = 0;

window.onload = colocarAnimales(animales);


console.log(animales);

function mezclarArreglo(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function colocarAnimales(animales){
    mezclarArreglo(animales);

    var imagenes = document.getElementById("imagenes");
    var arrastrables = document.getElementById("arrastrables");
    var cajas = document.getElementById("cajas");

    //Imprime imagenes
    imagenes.innerHTML = '';
    let pleft = 50;
    let ptop = 0;
    for(let i=0; i<6; i++){
        //Coordenadas de top de imagen
        if(i%2==0){
            ptop = 350;
        } else{
            ptop = 425;
        }
        //Imprime imagenes
        imagenes.innerHTML += `
            <div style="position: absolute; left: ${pleft}px; top: ${ptop}px;">
                <img src="media/${animales[i]}.png" style="width: 100px;" alt="">
            </div>
        `;
        pleft+=200;
    }


    //Etiquetas con nombres de animales que se arrastran
    arrastrables.innerHTML = '';
    for(let i=0; i<6; i++){
        console.log('Animal:' + animales[i]);
        arrastrables.innerHTML += `
        <div class="textoAnimal" id="${animales[i]}" draggable="true" ondragstart="start(event)" ondragend="end(event)">${animales[i]}</div>
        `;
        console.log('<div class="animal"><img class="image" src="'+animales[i]+'.png" alt=""></div>');
    }

    //Cajas con texto donde se arrastraran las etiquetas
    cajas.innerHTML = '';
    let pleftC = 50;
    let ptopC = 0;
    for(let i=0; i<6; i++){
        //Coordenadas de top de imagen
        if(i%2==0){
            ptopC = 500;
        } else{
            ptopC = 400;
        }
        //Imprime caja
        cajas.innerHTML += `
        <div class="cajaAnimal" id="c-${animales[i]}" style="position: absolute; left: ${pleftC}px; top: ${ptopC}px;" ondragenter="return enter(event)" ondragover="return over(event)" ondragleave="return leave(event)" ondrop="return drop(event)"><p></p></div>
        `;
        console.log('<p>'+animales[i]+'</p>');
        pleftC+=200;
    }
}


function start(e) {
    console.log("inicia arrastre");
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Data", e.target.id); // Toma el elemento que se va a mover
    e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
    e.target.style.opacity = '0.4'; 
}

function end(e){
    console.log("termina arrastre");
    e.target.style.opacity = ''; // Pone la opacidad del elemento a 1 			
    e.dataTransfer.clearData("Data");
}

function enter(e) {
    console.log("entrar a area de soldato");
    e.target.style.border = '3px dotted #555'; 
}

function leave(e) {
    console.log("salir de area de soltado");			
    e.target.style.border = ''; 
}

function over(e) {
    
    console.log("elemento encima");
    
    var id = e.target.id; // Elemento sobre el que se arrastra
    
    // return false para que se pueda soltar
    if (id == 'c-pollo' || id == 'c-borrego' || id=='c-cerdo' || id=='c-perro' || id == 'c-caballo' || id == 'c-vaca'){
        return false; // Cualquier elemento se puede soltar sobre el div destino 1
    }

        return false; 
}


/**
* 
* Mueve el elemento
*
**/
function drop(e){

    var elementoArrastrado = e.dataTransfer.getData("Data"); // Elemento arrastrado
    console.log("en drop ---->*"+elementoArrastrado+"*");	
    console.log("en drop ---->*"+e.target.id+"*");

    console.log("TARGETID: " +e.target.id);
    console.log("ELEMENTOARRASTRADO: " +elementoArrastrado);

    if (((e.target.id=="c-borrego") && (elementoArrastrado == 'borrego') || ((e.target.id=="c-caballo") && (elementoArrastrado == 'caballo')) || ((e.target.id=="c-cerdo") && (elementoArrastrado == 'cerdo')) || ((e.target.id=="c-perro") && (elementoArrastrado == 'perro')) || ((e.target.id=="c-pollo") && (elementoArrastrado == 'pollo')) || ((e.target.id=="c-vaca") && (elementoArrastrado == 'vaca')) )){
        console.log("elemento soltado");

        console.log("ENTRA");

        e.target.appendChild(document.getElementById(elementoArrastrado));
        e.target.style.border = '';  // Quita el borde
    
        /*Inicia ... programacion utilizando la libreria jquery para obtener las coordenadas exactas
        del cursor y realizar en esa posicion el soltado*/

                tamContX = $('#'+e.target.id).width();
                tamContY = $('#'+e.target.id).height();

                
                console.log("e.target.id="+e.target.id);
                console.log("tamContX="+getComputedStyle(document.getElementById(e.target.id)).width);
                console.log("tamContX="+tamContX+" tamContY="+tamContY);
                
                tamElemX = $('#'+elementoArrastrado).width();
                tamElemY = $('#'+elementoArrastrado).height();
        
                
                posXCont = $('#'+e.target.id).position().left;
                posYCont = $('#'+e.target.id).position().top;

                // Posicion absoluta del raton
                x = e.layerX;
                y = e.layerY;

                // Si parte del elemento que se quiere mover se queda fuera se cambia las coordenadas para que no sea asi
                if (posXCont + tamContX <= x + tamElemX){
                    x = posXCont + tamContX - tamElemX;
                }

                if (posYCont + tamContY <= y + tamElemY){
                    y = posYCont + tamContY - tamElemY;
                }

                document.getElementById(elementoArrastrado).style.left = x + "px";
                document.getElementById(elementoArrastrado).style.top = y + "px";

    /*Termina en la linea de arriba ... programacion utilizando la libreria jquery para obtener las coordenadas exactas
      del cursor y realizar en esa posicion el soltado*/
                document.getElementById(elementoArrastrado).style.position = "absolute";

                alert("Felicidades")
                console.log("Intento exitoso")
                puntaje += 100;
                console.log(puntaje);
 }//FIN DEL IF CONDICIONALES
 else{
    console.log("LO HICISTE MAL PENDEJO");
    alert("LO HICISTE MAL PENDEJO");
 }
}



//INICIA CÓDIGO PARA EL TIEMPO

