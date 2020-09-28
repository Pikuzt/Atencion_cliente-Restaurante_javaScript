const usuario ={
    nombre:"carlos",
    edad: 30,
    deuda: 0
}

let pedido =[]
let costoPedido = 0

const mostrarMenu = () => {
    console.log('CODIGO -  NOMBRE PRODUCTO - PRECIO')
    productos.forEach(producto => console.log(producto.codigo+' - '+producto.nombre+' - $'+producto.costo))
}

const pedirProducto = cod => {
    if (!cod) return 'Ingrese un codigo valido.'

   const productoEncontrado =  productos.find(producto => producto.codigo === cod)
   if (!productoEncontrado) return 'El producto no existe'

   pedido.push(productoEncontrado)
   console.log('El produco se agregado. el pedido es:')
   return verPedido()
    
}

const verPedido = () => pedido

const calcularCosto = () =>{
    let costo = 0
    for(producto of pedido){
        costo += producto.costo
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () =>{
    calcularCosto()
    usuario.deuda = costoPedido
    pedido = []
    costoPedido = 0
    return usuario.nombre +' debes de pagar $ '+usuario.deuda+ ' dolares'
}

const pagarPedido = montoEntregado =>{
    
    if (montoEntregado < usuario.deuda){
        return 'es necesario mas dinero.'
    }else if(montoEntregado === usuario.deuda){
        usuario.deuda = 0
        return 'tu pedido ha sido pagado'
    }else{
        usuario.deuda = 0
        resta = parseFloat(montoEntregado) - parseFloat(usuario.deuda)
        return 'Pedido pagado el cambio es: $'+ resta
    }
}

