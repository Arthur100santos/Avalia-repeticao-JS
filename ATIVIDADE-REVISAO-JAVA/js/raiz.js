function Calcula() {
    var inNumber = document.getElementById('inNumber');
    var outResultado = document.getElementById('outResultado');
    var number = Number(inNumber.value);
    
    if (number == '') {
        outResultado.textContent = `numero valido por favor.`;
        inNumber.focus();
        return;
    }
    var raiz = Math.sqrt(number);
    if (raiz == Math.floor(raiz)) {
        outResultado.textContent = `O valor da Raiz é ${raiz}`;
    } else {
        outResultado.textContent = `Não há raiz quadrada para o número ${number}`
    }
}

var btRaiz = document.getElementById('btRaiz').addEventListener('click', Calcula);