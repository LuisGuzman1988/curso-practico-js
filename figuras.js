// Código del cuadrado

console.group("Cuadrado")


function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrada(lado) {
    return lado * lado;
} 

// codigo del triangulo

function perimetroTriangulo(lado, base){
    return (lado * 2) + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

console.groupEnd();


// codigo del circulo

console.group("Circulo");

function radioCirculo(radio) {
    return radio;
}

function diametroCirculo(radio) {
    return radio * 2
} 

const PI = Math.PI;

function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
} 

console.groupEnd();

