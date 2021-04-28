const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

guardar.addEventListener('keyup',Almacenar);
mostrar.addEventListener('click', muestra);

let index = 0;
let num = [];
let z = 0;

function Almacenar(event) {

    if (event.key != "Enter") {
        return;        
    } 

    if (isNaN(guardar.value)){
        alert("Ingresa un numero");
        guardar.value="";
        return;
    }    

    if (guardar.value == "") {
        alert("Ingresa un valor");
        guardar.value="";
        return;
    }

    

    z = Number (guardar.value);
    guardar.value="";

    for (i = 0; i < z; i++) {
        
        let y = prompt(`Ingrese el ${i+1}° Valor`);

        if (isNaN(y) == false) {
            
            if (num.indexOf(Number (y)) < 0) {
                num[i] = Number(y);
                index++;
                console.log(num);
            } else {
                alert(`El Numero ${y} ya esta en el Arreglo`);
                i = i - 1;  
            }            
        } else{
            alert("Es Necesario ingresar un numero");
            i = i - 1;
        }
        
    }
}

function muestra() {
    const lista = document.getElementById("lista");

    lista.innerHTML = `El Array es ${num}`;
    index = 0;
    num = [];
}



