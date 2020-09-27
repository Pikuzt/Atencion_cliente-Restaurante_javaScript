const productos = [
    {
        nombre: "Hamburguesa simple",
        costo: 20,
        codigo:"p1001"
    },
    {
        nombre: "Hamburguesa doble",
        costo: 30,
        codigo:"p1002"
    },
    {
        nombre: "papas fritas",
        costo: 8,
        codigo:"p1003"
    },

    {
        nombre: "refresco personal",
        costo: 6,
        codigo:"p1004"
    }

]
const mostrarMenu = () => {
    console.log('CODIGO -  NOMBRE PRODUCTO - PRECIO')
    productos.forEach(producto => console.log(producto.codigo+' - '+producto.nombre+' - $'+producto.costo))
}

console.log(mostrarMenu())