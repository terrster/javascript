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
        li.classList = "list-group-item  text-break";
        li.textContent = contenido;

        const btnx = document.createElement('button');
        btnx.classList = "close";

        const span = document.createElement('span');
        span.classList = 'badge badge-primary badge-pill text-danger';
        span.textContent = "X";

        ul.appendChild(li);
        li.appendChild(btnx);
        btnx.appendChild(span);

    }

    removeTarea(Tareali){
        const lidel = Tareali.target
    }
}