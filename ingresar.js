function ingresarUsuario(mensaje) {
    let pedir = prompt(mensaje);
    return pedir;
}
function pedirCantidad(mensaje1) {
    let perdir1 = parseInt(prompt(mensaje1));
    return perdir1;
}

function ingresarExistencias() {
    let categorias = "";
    let cantidad = 0;
    let cantidadPro = 0;
    let producto = "";
    let mostrar = "";
    categorias = ingresarUsuario("ingrese la categoria");
    producto = ingresarUsuario("Ingrese el producto");

    if (categorias == "granos") {
        switch (producto) {
            case producto = "arroz":
                cantidad = localStorage.getItem("arroz");
                cantidadPro = pedirCantidad("ingresa la cantidad del producto");
                localStorage.setItem("arroz", parseInt(cantidad) + cantidadPro)
                console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("arroz"));
                break;
    
            case producto = "frijoles":
                cantidad = localStorage.getItem("frijoles")
                cantidadPro = pedirCantidad("ingresa la cantidad del producto");
                localStorage.setItem("frijoles", parseInt(cantidad) + cantidadPro)
                console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("frijoles"));
                break;
    
            case producto = "lentejas":
                cantidad = localStorage.getItem("lentejas")
                cantidadPro = pedirCantidad("ingresa la cantidad del producto");
                localStorage.setItem("lentejas", parseInt(cantidad) + cantidadPro);
                console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("lentejas"));
                break;
    
            default:
                break;
        }
    }
  
if (categorias == "aseo") {
   
    switch (producto) {
        case producto = "jabon":
            cantidad = localStorage.getItem("jabon")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("jabon", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("jabon"));
            break;

        case producto = "limpido":
            cantidad = localStorage.getItem("limpido")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("limpido", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("limpido"));
            break;

        case producto = "champu":
            cantidad = localStorage.getItem("champu")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("champu", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("champu"));
            break;

        default:
            break;
    }
}
  
if (categorias == "carnes") {
  
    switch (producto) {
        case producto = "res":
            cantidad = localStorage.getItem("res")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("res", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("res"));
            break;
    
        case producto = "cerdo":
            cantidad = localStorage.getItem("cerdo")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("cerdo", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("cerdo"));
            break;

        case producto = "pescado":
            cantidad = localStorage.getItem("champu")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("pescado", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("pescado"));
            break;

        default:
            break;
    }
}
  
if (categorias == "lacteos") {
    switch (producto) {
        case producto = "kumis":
            cantidad = localStorage.getItem("kumis")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("kumis", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("kumis"));
            break;
    
        case producto = "yogurt":
            cantidad = localStorage.getItem("yogurt")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("yogurt", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("yogurt"));
            break;

        case producto = "leche":
            cantidad = localStorage.getItem("leche")
            cantidadPro = pedirCantidad("ingresa la cantidad del producto");
            localStorage.setItem("leche", parseInt(cantidad) + cantidadPro);
            console.log("La cantidiad del", producto, "ha sido actualizada a", localStorage.getItem("leche"));
            break;

        default:
            break;
    }
}
mostrar = prompt("¿Deseas ver la lista actualizada? \n 1. si \n 2. no");
if (mostrar == "1" ) {
    console.log(localStorage);
} else {
    console.log("Gracias por utilizar nuestro programa");
}
}
export { ingresarExistencias, ingresarUsuario, pedirCantidad };