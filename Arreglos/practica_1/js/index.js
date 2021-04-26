const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

guardar.addEventListener('keyup',Almacenar);
mostrar.addEventListener('click', muestra);

let index = 0;
let num = [];

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

    if (index <= 4) {
        num[index] = Number(guardar.value);
        index++;
        guardar.value="";
        console.log(num);
    } else{
        guardar.value="";
        alert("Ya pra puto")
    }
    
}

function muestra() {
    const lista = document.getElementById("lista");
    let menRes = "";

    for (let x = 0; x < index; x++) {

        menRes += `<li class="list-group-item">El numero que se encuentra en el incide ${x} es ${num[x]}</li>`; 
        
    }

    lista.innerHTML = menRes;
    index = 0;
    num = [];
}



