'use strict';

var telInput = document.getElementById('tel');
var errorMessage = document.querySelector('.survey-form__error');

telInput.addEventListener('keydown', function () {
    if (telInput.validity.patternMismatch) {
            errorMessage.classList.remove('is-hidden');
            console.log('is-hidden removed');
        }
    else {
        errorMessage.classList.add('is-hidden');
    }
});

