
class direccion{
    distanciax = 0;
    distanciay = 2;

    constructor(){
        this.distanciax = 0;
        this.distanciay = 2;
    }
    

    movimiento(tecla){

        let carro = document.getElementById('carro');
        
        
        switch(tecla){
            
            case 'ArrowRight':
                console.log('derecha', carro.offsetLeft);
                carro.style.left = `${this.distanciax++}%`;
                carro.style.transform = "rotate(0deg)"
                break;
            case 'ArrowLeft':
                carro.style.left = `${this.distanciax--}%`;
                carro.style.transform = "rotateY(180deg)"
                break;
            case 'ArrowUp':
                console.log('arriba');
                carro.style.top = `${this.distanciay--}%`;
                carro.style.transform = "rotate(-90deg)"
                break;
            case 'ArrowDown':
                console.log('abajo');
                carro.style.top = `${this.distanciay++}%`;
                carro.style.transform = "rotate(90deg)"
                break;         
        }
    }
    choque (){
        let carro = document.getElementById('carro');
        let div = document.getElementById('circulacion');

        let z = (div.clientWidth - carro.clientWidth);
        div.style.overflow = 'hidden';
        if (carro.offsetLeft < 0 ) {
            carro.style.left = `${this.distanciax=1}%`
        } else if (carro.offsetLeft > z){
            carro.style.offsetLeft = `${this.distanciax--}%`
        } else if (carro.offsetTop < 0 ){
            carro.style.top = `${this.distanciay=2}%`
        } else if (carro.offsetTop > div.clientHeight - carro.clientHeight){
            carro.style.top = `${this.distanciay--}%`;
        }
    }
}
