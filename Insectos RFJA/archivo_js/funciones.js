// Función para abrir el modal y mostrar la información
function abrirModal(titulo, descripcion) {
    // Establece el título y la descripción dentro del modal
    document.getElementById("modal-title").innerText = titulo;
    document.getElementById("modal-description").innerText = descripcion;

    // Muestra el modal
    document.getElementById("modal").style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    // Oculta el modal
    document.getElementById("modal").style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    // Si el clic es fuera del modal, lo cerramos
    if (event.target == modal) {
        cerrarModal();
    }
}

