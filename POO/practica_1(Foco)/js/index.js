const Prender = new prender();
document.addEventListener('click', prueba);

function prueba(){    
    Prender.on(event.target.id);
    console.log(Prender.estado);
}


