const numeros = [2, 5, 7, 8, 3];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

const resultado = document.getElementById("resultado");
resultado.innerText = "La suma de los elementos en la matriz es: " + suma;
