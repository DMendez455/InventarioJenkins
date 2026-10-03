let productos = [];

function agregarProducto() {

    const nombre = document.getElementById("nombre").value;
    const precio = Number(document.getElementById("precio").value);
    const stock = Number(document.getElementById("stock").value);

    if (nombre === "" || precio <= 0 || stock < 0) {
        alert("Ingrese datos válidos");
        return;
    }

    const producto = {
        id: Date.now(),
        nombre: nombre,
        precio: precio,
        stock: stock
    };

    productos.push(producto);

    mostrarProductos();
    limpiarFormulario();
}


function mostrarProductos() {

    const tabla = document.getElementById("tablaProductos");

    tabla.innerHTML = "";

    productos.forEach(producto => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>Q${producto.precio.toFixed(2)}</td>
            <td>${producto.stock}</td>
            <td>
                <button
                    class="btn-eliminar"
                    onclick="eliminarProducto(${producto.id})">
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}


function eliminarProducto(id) {

    productos = productos.filter(
        producto => producto.id !== id
    );

    mostrarProductos();
}


function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
}