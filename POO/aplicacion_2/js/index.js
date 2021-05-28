const textA = document.querySelector('#cositas');
const listaA = document.querySelector('#listaa');
const listB = document.querySelector('#listab');

const tareas = new listA();
let indexSpan =0;
escucha();

function escucha (){
    document.getElementById('tareas').onsubmit = getTareas;
}

function getTareas (event){
    event.preventDefault();
    if (textA.value.trim() == "") {
        return;
    }    
    tareas.Tareamas(listaA,null,textA.value);
    document.querySelectorAll('span')[indexSpan].addEventListener('click', RemoveTareas);
    indexSpan++;
}

function RemoveTareas(event){
    console.log("hola bb")
    if (event.target.nodeName != "SPAN") return; 
    let libye = event.target.parentElement.parentElement;
    tareas.Tareamas(listB,null,libye.textContent);
    libye.remove();
    indexSpan--;
}


