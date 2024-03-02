Document.addEventListernet('DOMContentLoaded', function (){
    document.getElementById('form-sorteador').addEventListener('submit', function() {
        let numeroMaximo = document.getElementById('numero-maximo').ariaValueMax;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = math.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})