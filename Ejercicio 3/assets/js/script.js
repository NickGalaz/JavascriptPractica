function suma() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;

    console.log(valor1);

    var suma = parseInt(valor1) + parseInt(valor2);
    alert("la suma es " + suma);

}

function resta() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resta = parseInt(valor1) - parseInt(valor2);
    if (resta < 0) {
        alert("la resta es 0");
    } else {
        alert("la resta es " + resta);
    }
}
