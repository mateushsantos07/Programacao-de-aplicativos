/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import Tarefa from './Tarefa';
import './index.css';

var tarefas: Tarefa[] = [];

declare global {
    interface Window {
        addPeloEnter: (event: KeyboardEvent) => void;
        addTarefa: () => void;
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

    window.addPeloEnter = addPeloEnter;
    window.addTarefa = addTarefa;
