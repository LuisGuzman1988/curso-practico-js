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

// Practica de las condicionales else if

// const tipoDeSuscripcion = prompt("Elige entre los planes 'Free', 'Basic', 'Expert' y 'Expert+'");

// if (tipoDeSuscripcion === "Free") {
//     console.log("Solo puedes tomar los cursos gratis");

// } else if (tipoDeSuscripcion === "Basic") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

// } else if (tipoDeSuscripcion === "Expert") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

// } else if (tipoDeSuscripcion === "Expert+") {
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }

// Practica condicionales solo con if

// const tipoDeSuscripcion1 = prompt("Elige entre los planes 'Free', 'Basic', 'Expert' y 'Expert+'");

// if (tipoDeSuscripcion1 === "Free") {
//     console.log("Solo puedes tomar los cursos gratis");

// } else {
//     if (tipoDeSuscripcion1 === "Free") {
//         console.log("Solo puedes tomar los cursos gratis");

//     } else {
//         if (tipoDeSuscripcion1 === "Basic") {
//             console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

//         } else {
//             if (tipoDeSuscripcion1 === "Expert") {
//                 console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

//             } else {
//                 if (tipoDeSuscripcion1 === "Expert+") {
//                     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

//                 }
//             }
//         }
//     }
// }


//Ciclos

// let i = 0;

// while (i < 5) {
//     console.log("El valor de is es: " + i);
//     i++;
// }

// i = 10;

// while (i >= 2) {
//     console.log("El valor de i es: " + i);
//     i--;
// }

//Preguntale al usuario

var respuesta = prompt("Cuánto es 2 + 2?");

if (respuesta == 4) {
    console.log("Felicidades!");
} else {
    console.log("Volvamos a empezar :(");
}
