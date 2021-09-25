var paquetes = [];
var camiones = [];
function ingresarPaquete(){
    var paquete = parseInt(document.getElementById("paquete").value);
    paquetes.push(paquete);
    crearListaPaquete();
};

function crearListaPaquete(){
    var tarea = parseInt(document.getElementById("paquete").value);
    var elemento = document.createElement("li");
    var contenido = document.createTextNode(tarea);
    elemento.appendChild(contenido);
    document.getElementById("lista-paquetes").appendChild(elemento);
}
function crearCamion(){
    var tarea = parseInt(document.getElementById("camion").value);
    var elemento = document.createElement("li");
    var contenido = document.createTextNode(tarea);
    elemento.appendChild(contenido);
    document.getElementById("lista-camiones").appendChild(elemento);
}
function eliminarPaquete(mayor, mayor2){
    var buscar = paquetes.indexOf(mayor);
    var padre = document.getElementsByTagName("li")[0].parentNode;
    var primerelemento = document.getElementsByTagName("li")[buscar];
    padre.removeChild(primerelemento);
    paquetes.splice(buscar, 1);
    var buscar2 = paquetes.indexOf(mayor2);
    var segundoelemento = document.getElementsByTagName("li")[buscar2];
    padre.removeChild(segundoelemento);
    paquetes.splice(buscar2, 1)

}

function cargarCamion(){
    var mayor = 0;
    var mayor2 = 0;
    let resultado = 0
    var camion = parseInt(document.getElementById("camion").value);

        for (j = 0; j < paquetes.length; j++){
            if ((camion-paquetes[j]) > 30)
                if (mayor < paquetes[j]){
                    mayor = paquetes[j];
                }else{
                mayor
                }
        }
        for (j = 0; j < paquetes.length; j++){
            if (paquetes[j] != mayor)
                if (mayor2 < paquetes[j]){
                    resultado = paquetes[j]+mayor;
                    if ((camion-resultado) == 30){
                        mayor2 = paquetes[j];
                    }
                }
        
        

    }
    if(mayor2 == 0 || mayor == 0){
        crearCamion();
        document.getElementById("lista-camiones").append("Este camion no se puede cargar")
    }
    else if((camion-(mayor+mayor2) == 30)){
        camiones.push([mayor,mayor2])
        eliminarPaquete(mayor, mayor2);
        crearCamion();
        document.getElementById("lista-camiones").append("[" + mayor + ", " + mayor2 + "]")
        
    }else{
        crearCamion();
        document.getElementById("lista-camiones").append("Este camion no se puede cargar")
    }
    
}

