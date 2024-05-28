const inputText = document.querySelectorAll('input');
const form = document.getElementById('form');

inputText.forEach (input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("verified");
        } else {
            input.classList.remove("verified");
        }
    })
});

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    msgError();
});

function validateInputs() {
    inputText.forEach(input => {
        if (input.value === "") {
            input.classList.add("invalid");
        }
    });
};

function msgError() {
    const spanError = document.querySelectorAll('span');

    inputText.forEach(input => {
        if (input.value ==="") {
            spanError.forEach(span => {
                span.classList.add("error-msg")
            });
        }
    });
}