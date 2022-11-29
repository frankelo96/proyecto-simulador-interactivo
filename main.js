alert("Ingrese la opcion del producto que desea comprar, para salir ingrese 0")
let seleccionarProducto = Number(prompt("1-chomba $2000 2-remera $1750 3-pantalon $3200 4-buzo $4000"))
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}





while (seleccionarProducto != "0") {
    switch (seleccionarProducto) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto que selecciono es chomba, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
            console.log( "chomba", seleccionarProducto, "cantidad", seleccionarCantidad);
            break;

        case 2:
            seleccionarCantidad = Number(prompt("el producto que selecciono es remera, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1750)
            console.log( "remera", seleccionarProducto, "cantidad", seleccionarCantidad);
            break;

        case 3:
            seleccionarCantidad = Number(prompt("el producto que selecciono es pantalon, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3200)
            console.log( "pantalon", seleccionarProducto, "cantidad", seleccionarCantidad);
            break;

        case 4:
            seleccionarCantidad = Number(prompt("el producto que selecciono es buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 4000)
            console.log( "buzo", seleccionarProducto, "cantidad", seleccionarCantidad);
            break;

        default:
            break;


    }

    seleccionarProducto = Number(prompt("1-chomba $2000 2-remera $1750 3-pantalon $3200 4-buzo $4000"))

}

alert("el total de su compra es : " + total)



const envio = () => {
    if (total >= 2500) {
        alert("el envio es sin cargo")
    } else {
        total += 800
        alert("el envio tiene un costo de 800, el total es : " + total)
    }

}

envio()


const metodoDePago = () => {
    let metodo = prompt("ingrese metodo de pago, tarjeta, transferencia o efectivo")
    if (metodo == "tarjeta") {
        total *= 1.2
        console.log(total);
    } else if (metodo == "efectivo") {
        total /= 0.2
        console.log(total);
    }
}

metodoDePago()

