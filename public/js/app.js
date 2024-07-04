import { showAlertWithHooks } from './utils.js';



// Obtener el elemento del botón y añadir un event listener
document.getElementById('open-alert').addEventListener('click', function () {
  // Usar la función del archivo de utilidades para abrir la alerta
  showAlertWithHooks(app, 'Esto es una alerta!', 'Título de la Alerta');
});