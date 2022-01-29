let nombre = "Luis";
let apellido = "Guzmán";
let nombreUsuarioPlatzi = "LuisGuzman1988";
let edad = 33;
let correoElectrónico = "luisguzman1988@gmail.com"
let mayorEdad = true;
let dineroAhorrado = 3000;
let deudas = 1700;
let nickname = "Luisito"

var nombreCompleto = `${nombre} ${apellido}`;
var dineroReal = dineroAhorrado - deudas;

console.log(nombreCompleto);
console.log(dineroReal);

function miFuncion() {
    let fullName = `${nombre} ${apellido}`;
    return `Mi nombre es ${fullName} pero prefiero que me digas ${nickname}`;
}

console.log(miFuncion());