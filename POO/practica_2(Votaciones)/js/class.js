class UI {

    textvotar = ""
    votaciones;

    limpiarpantalla1(){
        this.textvotar = document.getElementById('pregunta').value;

        document.getElementById('pantalla1').style.display = 'none';
        document.getElementById('pantalla2').innerHTML = "";     
    }

    crearpantalla2(){
        const pantalla2 = document.getElementById('pantalla2');
        const divp2 = document.createElement('div');
        divp2.className = 'mt-3 mb-3 ctexto';
        divp2.innerText = this.textvotar;

        //Favor
        const buttona = document.createElement('button');
        buttona.innerText = "A Favor";
        buttona.setAttribute("class", "btn btn-outline-success btn-block mt-3");
        buttona.id = "btnFavor";
        //Contra
        const buttonb = document.createElement('button');
        buttonb.innerText = "En contra";
        buttonb.setAttribute("class", "btn btn-outline-warning btn-block mt-3");
        buttonb.id = "btnContra";
        //dhee
        const buttonc = document.createElement('button');
        buttonc.innerText = "Abstencion";
        buttonc.setAttribute("class", "btn btn-outline-info btn-block mt-3");
        buttonc.setAttribute("id", "btn")
        //fin
        const buttond = document.createElement('button');
        buttond.innerText = "Finalizar";
        buttond.setAttribute("class", "btn btn-outline-danger btn-block mt-3");
        buttond.id = "btnFin";

        pantalla2.appendChild(divp2)
        pantalla2.appendChild(buttona)
        pantalla2.appendChild(buttonb)
        pantalla2.appendChild(buttonc)
        pantalla2.appendChild(buttond)

    }

    validar(event){
       this.Votaciones.votonmas(event.target,id);
    }

    pantalla_res(){
        document.getElementById('pantalla1').style.display = 'initial';
        document.getElementById('formul').style.display = 'none';
        document.getElementById('iniciar').style.display = 'none';
        document.getElementById('pantalla2').innerHTML = "";
    }

    pantalla_res1(){
        this.textvotar = document.getElementById('pregunta').value;
        const pregunta = document.createElement('div');
        pregunta.className = "alert alert-dark";
        const favor = document.createElement('div');
        favor.className = "alert alert-success"
        const contra = document.createElement('div');
        contra.className = "alert alert-warning"
        const abstencion = document.createElement('div');
        abstencion.className = "alert alert-info"
        const boton = document.createElement('button');
        boton.className = "btn btn-outline-primary btn-lg btn-block";
        boton.id = 'regreso';

        document.getElementById('pantalla2').appendChild(pregunta);
        document.getElementById('pantalla2').appendChild(pregunta).innerText = this.textvotar;
        document.getElementById('pantalla2').appendChild(favor);
        document.getElementById('pantalla2').appendChild(favor).innerText = `${Votaciones.favor} Votos A Favor`;
        document.getElementById('pantalla2').appendChild(contra);
        document.getElementById('pantalla2').appendChild(contra).innerText = `${Votaciones.contra} Votos en Contra`;
        document.getElementById('pantalla2').appendChild(abstencion);
        document.getElementById('pantalla2').appendChild(abstencion).innerText = `${Votaciones.abstencion} Abstenciones`;
        document.getElementById('pantalla2').appendChild(boton);
        document.getElementById('pantalla2').appendChild(boton).innerText = "Repetir";
    }

    regreso(){
        document.getElementById('pantalla2').innerHTML = "";
        document.getElementById('formul').style.display = 'initial';
        document.getElementById('iniciar').style.display = 'initial';
    }
}



let boton = document.getElementById('iniciar');
boton.addEventListener('click',pantallas);

const Votaciones = new votaciones;

function pantallas() {
    document.getElementById('pantalla2').style.display = 'initial'; 
    const ui = new UI();
    ui.limpiarpantalla1();
    ui.crearpantalla2();
    document.addEventListener('click', validarclik);
}

function validarclik(event) {

    if (event.target.id !== 'btnFin' ) {
        Votaciones.votonmas(event.target.id);
    } else {
        const ui = new UI();
        ui.pantalla_res();
        ui.pantalla_res1();
        Votaciones.abstencion = 0;
        Votaciones.contra = 0;
        Votaciones.favor = 0;
        document.getElementById('regreso').addEventListener('click',regreso);
    }       
}

function regreso(){
    const ui = new UI();
    ui.regreso();
    
}



// class pregunta {
//     constructor(pregunta) {
//       this._pregunta = pregunta;
//     }
  
//     set pregunta(value) {
//       this._pregunta = value;
//     }
// }

// class respuesta {
//     constructor(respuesta) {
//       this._respuesta = respuesta;
//     }
//     set respuesta(value) {
//       this._respuesta = value;
//     }
// }
