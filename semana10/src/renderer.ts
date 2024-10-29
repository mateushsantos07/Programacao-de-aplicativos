import Veiculo from './entity/Veiculo';
import './index.css';

var listaVeiculos: Veiculo[] = [];
document.getElementById("botao-cadastrar")?.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();

  let modelo = document.getElementById("modelo") as HTMLInputElement
  let cor = document.getElementById("cor") as HTMLInputElement
  let ano = document.getElementById("ano") as HTMLInputElement
  let preco = document.getElementById("preco") as HTMLInputElement
  let placa = document.getElementById("placa") as HTMLInputElement
  let imagem = document.getElementById("imagem") as HTMLInputElement

  const novaVeiculo = new Veiculo(modelo.value, cor.value, Number(ano.value), Number(preco.value), placa.value, imagem.value)

  listaVeiculos.push(novaVeiculo);

  (window as any).bancoAPI.createVeiculo(novaVeiculo);

  modelo.value = "";
  cor.value = "";
  ano.value = "";
  preco.value = "";
  placa.value = "";
  imagem.value = "";

  let aside = document.getElementById("lista-veiculo");
  aside.innerHTML = "";

  for (let i = 0; i < listaVeiculos.length; i++) {
    aside.innerHTML += `
        <div class="card">
        <img src="${listaVeiculos[i].getImagem()}" alt="">
        <div class="dados">
          <strong>${listaVeiculos[i].getModelo()}</strong>
          <span>Cor: ${listaVeiculos[i].getCor()}</span>
          <span>Ano: ${listaVeiculos[i].getAno()}</span>
          <span>Preço: ${listaVeiculos[i].getPreco()}</span>
          <span>Placa: ${listaVeiculos[i].getPlaca()}</span>
        </div>
        <div class="botao-card">
          <button id="botao-ver">Detalhes</button>
          <button id="botao-deletar">Excluir</button>
        </div>
      </div>
        `;
  }

})
