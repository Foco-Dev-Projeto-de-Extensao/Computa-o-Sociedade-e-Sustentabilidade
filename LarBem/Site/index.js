// index.js
function copiarTelefone() {
    // Em vez de deixar o número fixo no JS, pegamos o que está escrito no HTML
    const label = document.getElementById('tel-label');
    const numero = '(81) 3225-0151'; // O número que será copiado

    navigator.clipboard.writeText(numero).then(() => {
        // Feedback visual
        label.textContent = 'Copiado! ✅';
        
        // Volta ao normal depois de 2 segundos
        setTimeout(() => {
            label.textContent = numero;
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

function copiarEmail() {
    const email = 'larbemelizabeth@gmail.com';
    const labelEmail = document.getElementById('email-label');

    navigator.clipboard.writeText(email).then(() => {
        labelEmail.textContent = 'E-mail copiado! ✅';
        
        setTimeout(() => {
            labelEmail.textContent = email;
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar e-mail: ', err);
    });
} 