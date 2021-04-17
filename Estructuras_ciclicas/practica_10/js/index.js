const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',ventas);

function ventas(){   
    
    let total = 0;
    let a = 0, b =0 , c = 0;
    let a1 = 0, b1 = 0, c1 = 0;
    let d1 = "", d2 = "", d3 = ""; 
    let x = true; 
    
    while (x == true) {

        let venta = prompt(`Ingrese venta`); 
           
           if (isNaN(venta)) {
               alert('Es Necesario que se Ingrese un Numero');  
           }
           if (venta == null) {
               x = false;
           } else if (venta>1000) {
               venta = Number (venta);
               a = a + venta;
               a1++;
               d1 +=`                
                ${a1}° Venta fue de ${venta}
                `;
           } else if(venta>500 && venta<=1000){
               venta = Number (venta);
               b = b + venta;
               b1++;
               d2 +=`                
                ${b1}° Venta fue de ${venta}
                `;
           } else{
               venta = Number (venta);
               c = c+ venta;
               c1++;
               d3 +=`                
                ${c1}° Venta fue de ${venta}
                `;
           }
           total = a + b + c;                              
    } 
    let respuesta = document.getElementById('res'); 
    let lista = document.getElementById('lista');

    lista.innerHTML = `<span class="badge bg-info rounded-pill">Ventas mayores a 1000</span>

    <li class="list-group-item">${d1}</li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Se realizaron ${a1} ventas mayores a 1000
    <span class="badge bg-primary rounded-pill">Total ${a} Pesos</span>    
    </li>
    <span class="badge bg-info rounded-pill">Ventas mayores a 500 y menores o iguales a 1000</span>
    <li class="list-group-item">${d2}</li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Se realizaron ${b1} ventas mayores a 500 y menores o iguales a 1000
    <span class="badge bg-primary rounded-pill">Total ${b} Pesos</span>    
    </li>
    <span class="badge bg-info rounded-pill">Ventas menores o iguales a 500</span>
    <li class="list-group-item">${d3}</li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Se realizaron ${c1} ventas menores o iguales a 500
    <span class="badge bg-primary rounded-pill">Total ${c} Pesos</span>    
    </li>`;

    respuesta.innerHTML = `El total de ventas del dia es: ${total} Pesos`;

}