function crearProducto(nombre, precio, stock) {

    if (!nombre || precio <= 0 || stock < 0) {
        throw new Error("Datos del producto no válidos");
    }

    return {
        nombre: nombre,
        precio: precio,
        stock: stock
    };
}


function venderProducto(producto, cantidad) {

    if (cantidad <= 0) {
        throw new Error("Cantidad no válida");
    }

    if (cantidad > producto.stock) {
        throw new Error("Stock insuficiente");
    }

    producto.stock = producto.stock + cantidad;

    return producto.stock;
}


function calcularValorInventario(productos) {

    return productos.reduce(
        (total, producto) =>
            total + (producto.precio * producto.stock),
        0
    );
}


module.exports = {
    crearProducto,
    venderProducto,
    calcularValorInventario
};