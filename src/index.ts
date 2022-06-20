let tablaMultiplicar = Number(
  prompt("Ingresar el valor de la tabla de multiplicar")
);
let hasta = Number(prompt("Ingresar el valor hasta el que se multiplicará"));
let numero: number;
let contador: number = 0;

for (
  numero = tablaMultiplicar;
  numero <= hasta * tablaMultiplicar;
  numero += tablaMultiplicar
) {
  console.log(tablaMultiplicar*contador);
  contador += 1;
}
