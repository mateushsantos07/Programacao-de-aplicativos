var tarefas = [];

function addTarefa(){
    const input = document.getElementById("tarefa");
    const tarefaTexto = input.value.trim();
    
    if(tarefaTexto === ""){
        alert("Você tentou adicionar uma tarefa sem texto")
        return;
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 1000000),
        text: tarefaTexto,
        completed: false
    }
    tarefas.push(novaTarefa);
    render();
    input.value = "";
    input.focus();
    console.log(tarefas)
}

function render() {
    const listaTarefas = document.getElementById("lista-tarefa")
    listaTarefas.innerHTML = "";

    for(var i  = 0; i < tarefas.length; i++){
        const li = document.createElement("li");

        if(tarefas[i].completed === true){
            li.classList.add("completed");
        }

        const span = document.createElement("span")
        span.textContent = tarefas[i].text;

        const concluir = document.createElement("button")
        concluir.textContent = tarefas[i].completed ? "Desmarcar" : "Concluir";
        concluir.classList.add("check");

        const editar = document.createElement("button")
        editar.textContent = "Editar"
        editar.classList.add("edit");

        const deletar = document.createElement("button")
        deletar.textContent = "Deletar"
        deletar.classList.add("delete");

        const div = document.createElement("div")
        div.appendChild(concluir);
        div.appendChild(editar);
        div.appendChild(deletar);

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }
}