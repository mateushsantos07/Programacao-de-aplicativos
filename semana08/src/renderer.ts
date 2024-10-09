
import Tarefa from './Tarefa';
import './index.css';
import Swal from 'sweetalert2';

var tarefas: Tarefa[] = [];

declare global {
    interface Window {
        addPeloEnter: (event: KeyboardEvent) => void;
        addTarefa: () => void;
        trocaConcluir: (id: number) => void;
        trocaEditar: (id: number) => void;
        trocaDelete: (id: number) => void;
    }
}

function addPeloEnter(evento: any) {
    console.log(evento)
    if (evento.key === 'Enter') {
        addTarefa();
    }
}

export function addTarefa() {
    const input = document.getElementById("tarefa-text") as HTMLInputElement;
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === "") {
        alert("Você tentou adicionar uma tarefa sem texto")
        return;
    }

    const novaTarefa = new Tarefa(tarefaTexto)

    console.log(tarefas)

    tarefas.push(novaTarefa);
    render();
    input.value = "";
    input.focus();
    console.log(tarefas)
}

function render() {
        const listaTarefas = document.getElementById("lista-tarefa") as HTMLUListElement;
        listaTarefas.innerHTML = ""; //Limpa a lista para renderizar

        for (var i = 0; i < tarefas.length; i++) {
            const li = document.createElement("li");

            if (tarefas[i].getCompleted() === true) {
                li.classList.add("completed");
            }

            const span = document.createElement("span")
            span.textContent = tarefas[i].getText();

            const concluir = document.createElement("button")
            concluir.textContent = tarefas[i].getCompleted() ? "Desmarcar" : "Concluir";
            concluir.classList.add("check");
            concluir.setAttribute("onclick", `trocaConcluir(${tarefas[i].getId()})`)

            const editar = document.createElement("button")
            editar.textContent = "Editar"
            editar.classList.add("edit");
            editar.setAttribute("onclick", `trocaEditar(${tarefas[i].getId()})`)

            const deletar = document.createElement("button")
            deletar.textContent = "Deletar"
            deletar.classList.add("delete");
            deletar.setAttribute("onclick", `trocaDelete(${tarefas[i].getId()})`)

            const div = document.createElement("div")
            div.appendChild(concluir);
            div.appendChild(editar);
            div.appendChild(deletar);

            li.appendChild(span);
            li.appendChild(div);

            listaTarefas.appendChild(li);
        }

    }

    function trocaConcluir (id: number) {
        const index = tarefas.findIndex(tarefa => tarefa.getId() === id)
        const valorAtual = tarefas[index].getCompleted();
        tarefas[index].setCompleted(!valorAtual);
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
        render();
    }

    async function editarTarefa (id: number ){
        const index = tarefas.findIndex(tarefa => tarefa.getId() === id)
        //const novoTexto = prompt("EDITAR TEXTO DA TAREFA", tarefas[index].getText())
        
        const { value } = await Swal.fire({
            title: "Editar tarefa",
            input: "text",
            inputLabel: "Edite o texto da tarefa",
            inputValue: tarefas[index].getText(),
            showCancelButton: true,
        });


        if(value !== undefined && value.trim() !== ''){
            tarefas[index].setText(value.trim());
            localStorage.setItem('tarefas', JSON.stringify(tarefas))
            render();
        }

        console.log(value)
        //tarefas[index].setText(novoTexto)
    }

    function trocaDelete (id: number ){
        const tarefasFiltradas = tarefas.filter(tarefa => tarefa.getId() !== id);
        tarefas = tarefasFiltradas;
        localStorage.setItem("Tarefas", JSON.stringify(tarefas))
        render();
    }

    window.addPeloEnter = addPeloEnter;
    window.addTarefa = addTarefa;
    window.trocaConcluir = trocaConcluir;
    window.trocaEditar = editarTarefa;
    window.trocaDelete = trocaDelete;