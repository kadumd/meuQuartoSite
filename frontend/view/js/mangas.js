const main = document.querySelector(".mangas")
const promiseDosDados = await fetch("../database/listaDeAnimes.json");
const dadosDoServidor = await promiseDosDados.json();

dadosDoServidor.forEach(executar)

function executar(oi) {
    console.log(oi)
    const card = document.createElement("div")
    card.classList.add("card")

    const capa = document.createElement("img")
    capa.classList.add("capa")
    capa.src = oi.capa

    const nome = document.createElement("p")
    nome.classList.add("nome")
    nome.textContent = oi.nome

    const dataDeLancamento = document.createElement("p")
    dataDeLancamento.classList.add("data-de-lancamento")
    dataDeLancamento.textContent = oi.data_de_lançamento

    const episodios = document.createElement("p")
    episodios.classList.add("episodios")
    episodios.textContent = oi.episódios




    card.appendChild(capa)
    card.appendChild(nome)
    card.appendChild(dataDeLancamento)
    card.appendChild(episodios)
    main.appendChild(card)
}