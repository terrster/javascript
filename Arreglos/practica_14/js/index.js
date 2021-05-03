const mostrar = document.getElementById("Calcular");
mostrar.addEventListener('click', muestra);

let numeros = [];


function muestra() {
    const lista = document.getElementById("lista");

    for (let i = 0; i < 10; i++) {
        numeros[i] = i;       
    }

    lista.innerHTML = `<div class="alert alert-success" role="alert">
    El arreglo ${numeros} invertido es ${numeros.reverse()}
    </div>`;
    numeros = [];
}





