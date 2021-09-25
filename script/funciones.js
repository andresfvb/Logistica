var paquetes = [];
var camiones = [];
function ingresarPaquete(){
    var paquete = parseInt(document.getElementById("paquete").value);
    paquetes.push(paquete);
    console.log(paquetes);
};

function cargarCamion(){
    let mayor = paquetes[0];
    let mayor2 = 0;
    let resultado = 0
    var camion = parseInt(document.getElementById("camion").value);
    for (x = 1; x < paquetes.length; x++){
        for (j = 0; j < paquetes.length; j++){
            if ((camion-paquetes[j]) > 30)
                if (mayor < paquetes[j]){
                    mayor = paquetes[j];
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
        

    }
    console.log(mayor);
    console.log(mayor2);
    if((camion-(mayor+mayor2) == 30)){
        camiones.push([mayor,mayor2])
        console.log(camiones);
        let posicion = paquetes.indexOf(mayor);
        paquetes.splice(posicion, 1);
        posicion = paquetes.indexOf(mayor2)
        paquetes.splice(posicion, 1)
    }else{
        console.log("Este camion no se puede cargar")
    }
    
}