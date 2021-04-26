const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

guardar.addEventListener('keyup',Almacenar);
mostrar.addEventListener('click', muestra);

let index = 0;
let num = [0,0,0,0,0,0,0,0,0,0];
let z = 0;

function Almacenar(event) {
    
    let hold = [];

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

    let y = prompt(`Ingrese el numero del indice (0-9) donde queira ingresar el valor`);

    hold.push = (`${Number(y)}`);

    console.log(hold);

    console.log(hold.includes(Number(y)));

    // if (hold.includes(Number(y)) == true) {
    //     alert("Ya hay un numero en esa pocision");
    // }


    let total = Number(guardar.value);
    console.log(total);

    if (isNaN(y) || y > 9) {
        alert ("Ingresa un valor valido");
        return;
    }

    y = Number(y);

    if (index <= 9) {
        num[y] = Number(guardar.value);
        index++;
        z = total + z;
        guardar.value="";
        console.log(num);
    } else{
        guardar.value="";
        alert("Ya pra puto")
    }
    console.log(z)
}

function muestra() {
    const lista = document.getElementById("lista");
    let menRes = z/index;

    lista.innerHTML = `El Array es ${num} la media de los valores es: ${menRes}`;
    index = 0;
    num = [0,0,0,0,0,0,0,0,0,0];
}



