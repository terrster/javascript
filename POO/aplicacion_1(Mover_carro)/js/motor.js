class motor {

    teclas(event){
        
        let teclapulsada = event.key;
        Direccion.movimiento(teclapulsada);        
    }
}

document.addEventListener('keydown', inicio);
const Direccion = new direccion;

function inicio(event) {

    let carro = document.getElementById('carro');
    
    
    const Motor = new motor;

    Motor.teclas(event);
    
}