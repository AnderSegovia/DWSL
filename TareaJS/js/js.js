var operacion = prompt("Ingrese un numero de operacion \n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Divicion");
var n1 = prompt("Ingrese el primer numero ");
var n2 = prompt("Ingrese el segundo numero");
n1 = parseInt(n1)
n2 = parseInt(n2)


var resultado = 0
operacion = parseInt(operacion)
switch (operacion) {
    case 1:
        resultado = n1 + n2;
        document.write("La Suma es: " + resultado)
        break;
    case 2:
        resultado = n1 - n2;
        document.write("La Resta es: " + resultado)
        break;
    case 3:
        resultado = n1 * n2;
        document.write("La Multiplicacion es: " + resultado)
        break;
    case 4:
        resultado = n1 / n2;
        document.write("La Division es: " + resultado)
        break;
    default:
        alert("Ingresa una opcion valida")
        break;
}