import { esquema } from "./model.js";
import { ingresarUsuario, ingresarExistencias } from "./ingresar.js";
import { eliminarExistencias } from "./eliminar.js";
function eleccionUsuario() {
    let categorias = "";
    let actualizado = "";
    let eliminado = "";
    window.alert("Podras escoger entre: \n 1. Mostrar cantidad de productos disponibles \n 2. Ingresar productos \n 3. Eliminar productod");
    let pedir = ingresarUsuario("¿Que desea hacer?");
    switch (pedir) {
        case "1":
            console.log(localStorage);   
            break;
        case "2":
            actualizado = ingresarExistencias();
            break;
        case "3":
            eliminado = eliminarExistencias();
            break;
        default: 
        console.log("ingrese una opcion valida");
        break;
    } 
}
eleccionUsuario();