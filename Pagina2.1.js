function agregarAlCarrito() {
    const talla = document.getElementById("talla").value;
    const cantidad = document.getElementById("quantity").value;

    // Obtener el carrito actual de la página 2.1 del almacenamiento local
    let carrito = JSON.parse(localStorage.getItem("carritoPagina21")) || [];

    // Ruta de la imagen del producto
    const imagen = "Imagenes/Jadore.png"; // Reemplaza con la ruta correcta de la imagen

    // Crear un objeto con los detalles del producto
    const producto = {
        nombre: "J'adore",
        precio: 210,
        talla: talla,
        cantidad: cantidad,
        imagen: imagen // Agrega la ruta de la imagen aquí
    };

    // Agregar el nuevo producto al carrito de la página 2.1
    carrito.push(producto);

    // Convertir el carrito de la página 2.1 a una cadena JSON y guardarlo en el almacenamiento local
    localStorage.setItem("carritoPagina21", JSON.stringify(carrito));

    // Redirigir a la página del carrito de compras (página 3)
    window.location.href = "Pagina3.html";
}

