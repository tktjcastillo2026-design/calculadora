// Función principal que hace la operación
function operar(tipo) {

  // Guardamos los valores en variables
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado;
  var operacion;
  var divResultado = document.getElementById("resultado");

  // Comprobamos que los campos no estén vacíos
  if (isNaN(num1) || isNaN(num2)) {
    divResultado.innerHTML = "⚠️ Por favor, introduce dos números.";
    divResultado.className = "resultado error";
    return;
  }

  // Usamos if/else para saber qué operación hacer
  if (tipo === "suma") {
    resultado = num1 + num2;
    operacion = num1 + " + " + num2;

  } else if (tipo === "resta") {
    resultado = num1 - num2;
    operacion = num1 + " - " + num2;

  } else if (tipo === "multiplicacion") {
    resultado = num1 * num2;
    operacion = num1 + " × " + num2;

  } else if (tipo === "division") {
    // No se puede dividir entre 0
    if (num2 === 0) {
      divResultado.innerHTML = "❌ No se puede dividir entre 0.";
      divResultado.className = "resultado error";
      return;
    }
    resultado = num1 / num2;
    operacion = num1 + " ÷ " + num2;
  }

  // Mostramos el resultado en pantalla
  divResultado.className = "resultado";
  divResultado.innerHTML = operacion + " = <span>" + resultado + "</span>";
}

// Función para limpiar todo
function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").innerHTML = "Aquí aparecerá el resultado...";
  document.getElementById("resultado").className = "resultado";
}