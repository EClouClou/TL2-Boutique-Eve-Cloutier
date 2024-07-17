const form = document.querySelector('#newsletter-form');
const email = document.querySelector('#email');
const submission = document.querySelector('.fa-solid' && '.fa-paper-plane');
const successMessage = document.querySelector(".success-message");

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Ajoute l'événement du clic sur le bouton Soumettre (son action étant par défaut 'submit').

    if (email.value.includes('@')) {
        successMessage.classList.remove('hidden');
        submission.classList.add('hidden');
        email.classList.add('hidden');
        form.reset();
    }
});

        /*if(!email.value.includes('@')) {
            e.preventDefault();
            errorEmail.textContent = 'L\'adresse courriel doit contenir un arobase.';
            email.focus();
        } else {
            errorEmail.textContent = 'Merci e votre inscription!';
        }*/
