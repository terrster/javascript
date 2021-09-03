document.addEventListener('click', ValidateHit);

function ValidateHit(event) {
    document.getElementById('img');
    document.getElementById('Parte');
    let rect = img.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);

    let cx = img.clientWidth;
    let cy = img.clientHeight;

    let px = cx / 3;
    let py = cy / 3;

    let pxx = px / 4;
    let pyy = py / 3;
    // Parte Superior
    if ((x > 0 && x < px) && (y > 0 && y < py)) {

        console.log("Intenta en otro lado cariño");
        Parte.innerHTML = "Intenta en otro lado cariño";

    } else if ((x > px && x < (px * 2)) && (y > 0 && y < py)) { // Cara y Hombro

        if ((x > (px + (pxx * 2.5)) && x < ((px * 2) - (pxx * .5))) && (y > pyy && y < (py - (pyy / 3)))) {// Cara
            console.log("Cara");
            Parte.innerHTML = "Cara";
        } else if ((x > (px + (pxx * 1.5)) && x < (px + (pxx * 2.5))) && (y > (py - (pyy / 2)) && y < py)) {// Hombro
            console.log("Hombro");
            Parte.innerHTML = "Hombro";
        } else {
            console.log("Ya falta poco");
            Parte.innerHTML = "Ya falta poco";
        }

    } else if ((x > (px * 2) && x < cx) && (y > 0 && y < py)) {
        console.log("Mas abajo <3");
        Parte.innerHTML = "Mas abajo <3";

    } // Parte Media 
    else if ((x > 0 && x < px) && (y > py && y < (py * 2))) { // Mano

        if (x > 0 && x < (pxx * 1.5)) {
            console.log("No")
            Parte.innerHTML = "A Donde vas";
        } else if (x > (pxx * 2) && x < (px - (pxx * .5))) {
            console.log("Mano")
            Parte.innerHTML = "Mano";
        } else {
            console.log("Cerca pero te falta");
            Parte.innerHTML = "Cerca pero te falta";
        }

    } else if ((x > px && x < (px * 2)) && (y > py && y < (py * 2))) { // Brazo izquierdo y torzo creo
        console.log("p5");
        if ((x > px && x < (px * 1.5)) && (y < ((py * 2) - (pyy * 1.7)))) {
            Parte.innerHTML = "Brazo Izquierdo";
        } else if (x > (px * 1.5) && x < (px * 2)) {
            if (y > py && y > ((py * 2) - (pyy * 1.5))) {
                if (x < ((px * 2) - (pxx * .5))) {
                    Parte.innerHTML = "Torzo";
                } else {
                    Parte.innerHTML = "cerca";
                }
            } else {
                Parte.innerHTML = "Pechos";
            }
        } else {
            Parte.innerHTML = "Cerca";
        }
    } else if ((x > (px * 2) && x < cx) && (y > py && y < (py * 2))) {

        if (x > (cx-(pxx*2)) && x < cx) {
            Parte.innerHTML = "Lo voy a disfrutar";
        } else if((x > (px*2) && x < ((px*2) + (pxx))) && (y > (py + pyy))){
            Parte.innerHTML = "Brazo Derecho";
        } else {
            Parte.innerHTML = "Vamos Tocame";
        }

    }
    // Parte inferior
    else if ((x > 0 && x < px) && (y > (py * 2) && y < cy)) {
        console.log("p7");
        Parte.innerHTML = "Ven No muerdo";
    } else if ((x > px && x < (px * 2)) && (y > (py * 2) && y < cy)) {
        if (x > (px + pxx) && x < (px * 2)) {
            Parte.innerHTML = "Pierna Derecha";
        } else {
            Parte.innerHTML = "Pierna Izquierda";
        }
    } else if ((x > (px * 2) && x < cx) && (y > (py * 2) && y < cy)) {
        console.log("p9");
        Parte.innerHTML = "Vamos a jugar tu tranquilo";
    }

    console.log("Ancho" + cx, "Largo" + cy);


    
 

}