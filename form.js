document.getElementById('input-submit').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var subject = document.getElementById('input-subject').value;
    var message = document.getElementById('input-message').value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;
    var isValid = true;

    var errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = ''; // Clear previous error messages

    if (name.trim() === '') {
        var error = document.createElement('p');
        error.textContent = 'Por favor, ingrese su nombre.';
        errorContainer.appendChild(error);
        isValid = false;
    }

    if (email.trim() === '') {
        var error = document.createElement('p');
        error.textContent = 'Por favor, ingrese su email.';
        errorContainer.appendChild(error);
        isValid = false;
    } else if (!emailPattern.test(email)) {
        var error = document.createElement('p');
        error.textContent = 'Por favor, ingrese un email válido.';
        errorContainer.appendChild(error);
        isValid = false;
    }

    if (subject.trim() === '') {
        var error = document.createElement('p');
        error.textContent = 'Por favor, ingrese un número de teléfono.';
        errorContainer.appendChild(error);
        isValid = false;
    } else if (!phonePattern.test(subject)) {
        var error = document.createElement('p');
        error.textContent = 'Por favor, ingrese un número de teléfono válido. (10 números)';
        errorContainer.appendChild(error);
        isValid = false;
    }

    if (message.trim() === '') {
        var error = document.createElement('p');
        error.textContent = 'Por favor, ingrese un mensaje.';
        errorContainer.appendChild(error);
        isValid = false;
    }

    if (isValid) {
        var successMessage = document.createElement('p');
        successMessage.textContent = '¡Gracias! Nos estaremos contactando con usted';
        errorContainer.appendChild(successMessage);
        document.querySelector('form').submit();
    }
});
