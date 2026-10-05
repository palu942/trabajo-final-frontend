document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formRegistro');
    const mensajeRespuesta = document.getElementById('mensajeRespuesta');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtención de valores
        const nombre = document.getElementById('nombreCompleto').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const programa = document.getElementById('programa').value;

        // Validaciones en el cliente
        if (nombre === '' || correo === '' || telefono === '' || programa === '') {
            mensajeRespuesta.style.color = '#dc3545';
            mensajeRespuesta.textContent = 'Por favor, complete todos los campos obligatorios.';
            return;
        }

        // Simulación de envío de datos vía POST
        mensajeRespuesta.style.color = '#198754';
        mensajeRespuesta.textContent = 'Procesando registro...';

        setTimeout(() => {
            mensajeRespuesta.textContent = `¡Registro exitoso, ${nombre}! Nos pondremos en contacto contigo en breve.`;
            form.reset();
        }, 1200);
    });
});