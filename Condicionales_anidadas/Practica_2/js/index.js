const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',OperacionOl);

// function Operacion(){
//     const num1 = Number (document.getElementById('num1').value);    

//     const respuesta = document.getElementById('res');
    
//     if (num1>999) {
//         respuesta.innerHTML = `Error el numeor tiene mas de 3 digitos`
//     } else {
//         if (num1>99) {
//             respuesta.innerHTML = `El numero tiene 3 digitos`
//         } else {
//             if (num1>9) {
//                 respuesta.innerHTML = `El numero tiene 2 digitos`
//             } else {
//                 respuesta.innerHTML = `El numero tiene 1 digito`
//             }
//         }
//     }
// }

function OperacionOl(){
    const num1 = Number (document.getElementById('num1').value);    

    const respuesta = document.getElementById('res');

    if ((num1 > 99) && (num1 < 999)) {
        respuesta.innerHTML = `El numeor tiene 3 digitos`
    }else if (num1>9 && num1 < 999) {
        respuesta.innerHTML = `El numeor tiene 2 digitos`
    }else if (num1>=0 && num1 < 9){
        respuesta.innerHTML = `El numeor tiene 1 digitos`
    }else{
        respuesta.innerHTML = `Error el numeor tiene mas de 3 digitos`
    }
}
