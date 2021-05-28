class listA{
    constructor(){
        

        if (typeof listA.instance === "object") {
            return listA.instance;
        }

        listA.instance = this;
        return this;
    }
    Tareamas(ul,origen,contenido){
        const li = document.createElement("li");
        li.classList = "list-group-item d-flex justify-content-between align-items-center  text-break";
        li.textContent = contenido;

        const btnx = document.createElement('button');
        btnx.classList = "btn btn-primary me-md-2 btn-sm";
        

        const span = document.createElement('span');
        span.classList = 'badge rounded-pill text-white';
        span.textContent = "X";

        ul.appendChild(li);
        li.appendChild(btnx);
        btnx.appendChild(span);

    }

    removeTarea(Tareali){
        const lidel = Tareali.target
    }
}