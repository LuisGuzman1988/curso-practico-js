// Código del cuadrado


function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrada(lado) {
    return lado * lado;
} 


function perimetroTriangulo(lado, base) {
    return (lado * 2) + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 



// codigo del circulo


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

function cuadradoArea() {

}

function cuadradoPerimetro() {

}

// Aquí vamos a interactuar con el HTML


function calcularPerimetroCuadrado() {
    const input = document.getElementById("ImputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("ImputCuadrado");
    const value = input.value;
    const area = areaCuadrada(value);
    alert(area);
}



