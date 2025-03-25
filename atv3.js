function somar (numero1, numero2, numero3) {

    console.log(arguments);
    return numero1 + numero2 + numero3 + arguments[3];
}

console.log(somar(10,59,"teste"));