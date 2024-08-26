document.addEventListener('DOMContentLoaded', function() {
  // Generar un número aleatorio entre 1 y 100
  var randomNumber = Math.floor(Math.random() * 100) + 1;

  // Obtener elementos del DOM
  var guessInput = document.getElementById('guessInput');
  var message = document.getElementById('message');

  // Función para verificar el número adivinado
  function checkGuess() {
    // Obtener el número ingresado por el jugador
    var userGuess = parseInt(guessInput.value);

    // Verificar si el número es válido
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = 'Ingresa un número válido entre 1 y 100.';
      return;
    }

    // Comparar el número ingresado con el número aleatorio
    if (userGuess === randomNumber) {
      message.textContent = '¡Felicidades! Adivinaste el número.';
      message.style.color = 'green';
      guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
      message.textContent = 'El número es mayor. Intenta nuevamente.';
      message.style.color = 'red';
    } else {
      message.textContent = 'El número es menor. Intenta nuevamente.';
      message.style.color = 'red';
    }

    // Limpiar el campo de entrada
    guessInput.value = '';
    guessInput.focus();
  }

  // Asignar el evento onclick al botón
  var guessButton = document.getElementById('guessButton');
  guessButton.addEventListener('click', checkGuess);
});