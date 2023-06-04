document.getElementById('input-submit').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var subject = document.getElementById('input-subject').value;
    var message = document.getElementById('input-message').value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;
    var isValid = true;

    if (name.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        isValid = false;
        return;
    }

    if (email.trim() === '') {
        alert('Por favor, ingrese su email.');
        isValid = false;
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese un email valido.');
        isValid = false;
        return;
    }

    if (subject.trim() === '') {
        alert('Por favor, ingrese un numero de telefono.');
        isValid = false;
        return;
    } else if(!phonePattern.test(subject)){
        alert('Por favor, ingrese un numero de telefono valido. (10 numeros)')
        isValid = false;
    }

    if (message.trim() === '') {
        alert('Por favor, ingrese un mensaje.');
        isValid = false;
        return;
    }

    if(isValid){
        alert('Gracias! Nos estaremos contactando con usted');
        document.querySelector('form').submit();
    }
    
});
