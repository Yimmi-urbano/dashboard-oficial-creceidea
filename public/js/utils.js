// utils.js

// Función para inicializar Framework7 y abrir una alerta con hooks
export function showAlertWithHooks(app, message, title) {
    // Crear el contenido del modal
    const alertContent = `
      <div class="dialog-inner">
        <div class="dialog-title">${title}</div>
        <div class="dialog-text">${message}</div>
      </div>
      <div class="dialog-buttons">
        <span class="dialog-button dialog-button-bold">Aceptar</span>
      </div>
    `;
  
    // Abrir la alerta con el contenido
    const dialog = app.dialog.create({
      content: alertContent
    });
  
    dialog.open();
  
    // Hooks para detectar cambios en el modal
    dialog.on('open', function () {
      console.log('El modal ha sido abierto.', dialog);
    });
  
    dialog.on('close', function () {
      console.log('El modal ha sido cerrado.', dialog);
    });
  }
  