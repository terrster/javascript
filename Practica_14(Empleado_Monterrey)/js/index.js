const calculation = document.getElementById('ho');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const dias = Number (document.getElementById('dias').value);
    const noche = Number (document.getElementById('noche').value);
    const comidas = Number (document.getElementById('comidas').value);
    let nombre =  document.getElementById('n1').value;
    let apellido = document.getElementById('a1').value;

    // document.getElementById('dias').value='';
    // document.getElementById('noche').value='';
    // document.getElementById('comidas').value='';
    // document.getElementById('n1').value='';
    // document.getElementById('a1').value='';

    let costo = (dias * 100) + (dias * noche) + (comidas * dias);

    document.getElementById('nombre').innerHTML= `${nombre}`;
    document.getElementById('apellido').innerHTML= `${apellido}`;
    document.getElementById('totoal').innerHTML= `${costo}`;
    document.getElementById('th').innerHTML=`Costo Final del Hotel ${(dias * noche)}`;
    document.getElementById('tc').innerHTML=`Costo Total de Comidas  ${(dias * comidas)}`;
    document.getElementById('tv').innerHTML=`Viaticos ${(100 * dias)}`;
}