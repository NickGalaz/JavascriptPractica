// Seleccionar los 3 elementos input del form
let name = document.getElementById('nombre');
let subject = document.getElementById('asunto');
let message = document.getElementById('mensaje');

// Seleccionar los textos de ayuda de los inputs
let errorName = document.querySelector('.errorNombre');
let errorSubject = document.querySelector('.errorAsunto');
let errorMessage = document.querySelector('.errorMensaje');
let textResult = document.querySelector('.resultado');

let form = document.getElementById('formulario');
form.addEventListener('submit', function(event){
    event.preventDefault();
    validate();
});

function validateName() {
    let name = document.getElementById('nombre');
    let result = /[a-zA-Z]/gim.test(name.value);
    if (result === false) {
        textResult.style.color = "transparent";
        errorName.style.color = "red";
        errorName.innerHTML = "El nombre es requerido";
    } else {
        errorName.style.color = "transparent";
        return true;
    }
}

function validateSubject() {
    let subject = document.getElementById('asunto');
    let result = /[a-zA-Z]/gim.test(subject.value);
    if (result === false) {
        textResult.style.color = "transparent";
        errorSubject.style.color = "red";
        errorSubject.innerHTML = "El asunto es requerido";
    } else if (result === true) {
        errorSubject.style.color = "transparent";
        return true;
    }
}

function validateMessage() {
    let message = document.getElementById('mensaje');
    let result = /[a-zA-Z]/gim.test(message.value);
    if (result === false) {
        textResult.style.color = "transparent";
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "El mensaje es requerido";
    } else if (result === true){
        errorMessage.style.color = "transparent";
        return true;
    }
}

function validate() {
    validateName();
    validateSubject();
    validateMessage();
    if (validateName() === true && validateSubject() === true && validateMessage() === true) {
        textResult.style.color = "green";
        textResult.innerHTML = "Mensaje enviado con éxito!!!";
    } else {
        return;
    }
}