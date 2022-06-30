import "./styles.css";

/*
• Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada
*/

function butacas(arreglo: boolean[]) {
  let butacasOcupadas: number = 0;
  let butacasLibres: number = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == true) {
      butacasOcupadas++;
    } else {
      butacasLibres++;
    }
  }
  console.log(
    "Butacas Ocupadas: " + butacasOcupadas + " Butacas Libres: " + butacasLibres
  );
}

let array: boolean[] = new Array(true, false, true, false, false, true, false);

butacas(array);
