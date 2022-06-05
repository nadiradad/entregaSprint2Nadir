let miListado = [];

/* Evento Click de Boton ENVIAR */
document.getElementById("enviar").addEventListener("click", calcularGastos);

/* Defino la funcion para el boton calcular */
function calcularGastos(nombre, gasto) {

    document.getElementById("alert-datos").classList.add('d-none');
    document.getElementById("alert-datos").classList.remove('d-block'); //

    nombre = document.getElementById("nombre").value;
    gasto = document.getElementById("gasto").value;

    if (nombre == "" || gasto == "") {
        document.getElementById("alert-datos").classList.add('d-block');
        document.getElementById("alert-datos").classList.remove('d-none'); //si no escribio nada en el input, muestro una alerta
    } else {
        const objGastos = { nombre, gasto }
        miListado.push(objGastos); //agrego el nombre y lo que gasto al array
        console.log(miListado);
        let suma = 0;
        let divison = 0;
        document.getElementById("listado").innerHTML = "";
        for (let value of miListado) {
            document.getElementById("listado").innerHTML += '<li class="list-group-item">' + value.nombre + ": $" + value.gasto + '</li>';
            suma += parseInt(value.gasto);
            console.log(suma);
            document.getElementById("suma-total").innerHTML = '<li class="list-group-item list-group-item-dark fw-semibold">Total: $' + suma + '</li>';
        }
        divison += suma / miListado.length
        console.log(divison);
        document.getElementById("division-total").innerHTML = '<li class="list-group-item list-group-item-success fw-bold">Cada uno debe aportar: $' + divison + '</li>';
    }
    document.getElementById("nombre").value = "";
    document.getElementById("gasto").value = "";

};
