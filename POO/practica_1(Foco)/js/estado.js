class prender{

    estado = false;

    on(boton){
        while (boton == 'estado') {
            if (this.estado == false) {
                this.estado = true;
                document.getElementById('imagenfoco').src = "./../assets/imagen1.png"
                break;
            } else {
                this.estado = false;
                document.getElementById('imagenfoco').src = "./../assets/foco.png"
                break;
            }  
        }    
    }
}



