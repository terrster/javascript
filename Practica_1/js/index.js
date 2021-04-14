let para = document.getElementById('mainpara');

let btnmum = document.getElementById('Numeric');

let btntxt = document.getElementById('Text');

let btnbool = document.getElementById('Bool');

btntxt.addEventListener('click', Writetxt);

btnmum.addEventListener('click', WriteNum);

btnbool.addEventListener('click', WriteBool);

function WriteNum(){
    let numval = 2 + 2;
    para.textContent = numval;
}

function Writetxt(){
    let txtval = "Jonathan Villegas";
    para.textContent = txtval;
}

function WriteBool(){
    let boolvalue = true;
    para.textContent = boolvalue;
}