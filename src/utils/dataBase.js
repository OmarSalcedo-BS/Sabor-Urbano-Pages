const API_BASE_URL = 'http://localhost:8081/api';

// Referencias a elementos del DOM
const formNuevoComentario = document.getElementById('form-nuevo-comentario');
const comentarioDescripcionInput = document.getElementById('comentario-descripcion');
const listaComentarios = document.getElementById('lista-comentarios');
const nombreUsuarioInput = document.getElementById('nombre-usuario');

// LEER - Cargar comentarios desde la base de datos
async function cargarComentarios() {
    try {
        const response = await fetch(`${API_BASE_URL}/comentarios`);
        const comentarios = await response.json();

        listaComentarios.innerHTML = '';

        if (comentarios.length === 0) {
            listaComentarios.innerHTML = '<p class="no-comments">No hay comentarios aún. ¡Sé el primero en comentar!</p>';
            return;
        }

        comentarios.forEach(comentario => {
            const item = document.createElement('div');
            item.className = 'comentario-item';
            item.innerHTML = `
                <div class="comentario-content">
                    <p class="nombre-usuario">${comentario.NombreUsuario}</p>
                    <p class="comentario-descripcion">${comentario.Descripcion}</p>
                    <span class="comentario-fecha">${new Date(comentario.FechaComentario).toLocaleDateString('es-ES')}</span>
                </div>
            `;
            listaComentarios.appendChild(item);
        });

    } catch (error) {
        console.error('Error al cargar comentarios:', error);
        listaComentarios.innerHTML = '<p class="error-message">Error al cargar los comentarios</p>';
    }
}

// CREAR - Agregar nuevo comentario
async function crearComentario(descripcion) {
    try {
        const nuevoComentario = {
            NombreUsuario: nombreUsuarioInput.value.trim() || 'Anónimo',
            Descripcion: descripcion,
            FechaComentario: new Date().toISOString().split('T')[0]
        };

        const response = await fetch(`${API_BASE_URL}/comentarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoComentario)
        });

        if (response.ok) {
            
            comentarioDescripcionInput.value = '';
            
            await cargarComentarios();

           
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'success',
                    title: '¡Comentario enviado!',
                    text: 'Gracias por tu opinión',
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        } else {
            throw new Error('Error al enviar el comentario');
        }

    } catch (error) {
        console.error('Error al crear comentario:', error);

        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo enviar el comentario. Inténtalo de nuevo.'
            });
        }
    }
}


if (formNuevoComentario) {
    formNuevoComentario.addEventListener('submit', async (e) => {
        e.preventDefault();

        const descripcion = comentarioDescripcionInput.value.trim();

        if (descripcion.length < 10) {
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Comentario muy corto',
                    text: 'Por favor escribe al menos 10 caracteres'
                });
            }
            return;
        }

        await crearComentario(descripcion);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    if (listaComentarios) {
        cargarComentarios();
    }
});
