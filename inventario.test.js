const {
    crearProducto,
    venderProducto,
    calcularValorInventario
} = require('./inventario');


test('Crear un producto correctamente', () => {

    const producto = crearProducto('Teclado', 250, 10);

    expect(producto.nombre).toBe('Teclado');
    expect(producto.precio).toBe(250);
    expect(producto.stock).toBe(10);

});


test('Vender 3 unidades reduce el stock de 10 a 7', () => {

    const producto = crearProducto('Teclado', 250, 10);

    venderProducto(producto, 3);

    expect(producto.stock).toBe(7);

});


test('No permite vender más productos de los disponibles', () => {

    const producto = crearProducto('Mouse', 150, 5);

    expect(() => {
        venderProducto(producto, 10);
    }).toThrow('Stock insuficiente');

});


test('No permite crear productos con precio negativo', () => {

    expect(() => {
        crearProducto('Monitor', -1500, 5);
    }).toThrow('Datos del producto no válidos');

});


test('Calcula correctamente el valor total del inventario', () => {

    const productos = [
        crearProducto('Teclado', 250, 10),
        crearProducto('Mouse', 150, 20),
        crearProducto('Monitor', 1500, 5)
    ];

    const total = calcularValorInventario(productos);

    expect(total).toBe(13000);

});