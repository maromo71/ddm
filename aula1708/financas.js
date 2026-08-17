// Função que realiza o fetch para a AwesomeAPI e RETORNA a Promise (return fetch)
function buscarCotacoes(moeda, numeroDias) {
    const url = `https://economia.awesomeapi.com.br/json/daily/${moeda}/${numeroDias}`;
    return fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar cotações na API. Verifique os parâmetros selecionados.");
            }
        });
}

// Manipulação do DOM e evento de clique
document.addEventListener("DOMContentLoaded", function() {
    const btnBuscar = document.getElementById("btnBuscar");
    const selectMoeda = document.getElementById("moeda");
    const inputDias = document.getElementById("numeroDias");
    const containerResultado = document.getElementById("containerResultado");
    const alertErro = document.getElementById("alertErro");
    const spinner = document.getElementById("spinner");

    btnBuscar.addEventListener("click", function() {
        const moeda = selectMoeda.value;
        const dias = inputDias.value;

        if (!dias || dias <= 0) {
            exibirErro("Por favor, informe uma quantidade válida de dias (mínimo 1).");
            return;
        }

        // Exibe o spinner e oculta mensagens/tabelas anteriores
        spinner.classList.remove("d-none");
        containerResultado.classList.add("d-none");
        alertErro.classList.add("d-none");

        // Executa a função que utiliza return fetch
        buscarCotacoes(moeda, dias)
            .then(function(dados) {
                spinner.classList.add("d-none");
                if (dados && dados.length > 0) {
                    renderizarDados(dados);
                } else {
                    exibirErro("Nenhum dado retornado para a consulta.");
                }
            })
            .catch(function(erro) {
                spinner.classList.add("d-none");
                exibirErro(erro.message);
            });
    });
});

// Função para renderizar os dados na tabela e nos cards informativos
function renderizarDados(listaCotacoes) {
    const containerResultado = document.getElementById("containerResultado");
    const infoTitulo = document.getElementById("infoTitulo");
    const tabelaCorpo = document.querySelector("#tabelaCotacoes tbody");

    // O primeiro item da lista traz a cotação mais recente
    const cotacaoAtual = listaCotacoes[0];
    infoTitulo.textContent = `${cotacaoAtual.name} (${cotacaoAtual.code}/${cotacaoAtual.codein})`;

    // Limpa registros anteriores da tabela
    tabelaCorpo.innerHTML = "";

    // Preenche a tabela com o histórico de dias
    listaCotacoes.forEach(function(item) {
        const tr = document.createElement("tr");

        // Formatação de data
        const dataFormatada = item.create_date 
            ? new Date(item.create_date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
            : new Date(item.timestamp * 1000).toLocaleDateString('pt-BR');

        // Formatação numérica
        const bid = parseFloat(item.bid).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
        const ask = parseFloat(item.ask).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
        const high = parseFloat(item.high).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
        const low = parseFloat(item.low).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
        const pctChange = parseFloat(item.pctChange);

        // Badge de variação com cor dinâmica
        const badgeClasse = pctChange >= 0 ? "bg-success" : "bg-danger";
        const pctTexto = (pctChange >= 0 ? "+" : "") + pctChange.toFixed(2) + "%";

        tr.innerHTML = `
            <td>${dataFormatada}</td>
            <td class="fw-bold text-primary">R$ ${bid}</td>
            <td>R$ ${ask}</td>
            <td class="text-success">R$ ${high}</td>
            <td class="text-danger">R$ ${low}</td>
            <td><span class="badge ${badgeClasse}">${pctTexto}</span></td>
        `;

        tabelaCorpo.appendChild(tr);
    });

    // Exibe o container de resultado
    containerResultado.classList.remove("d-none");
}

// Exibe alertas de erro na tela
function exibirErro(mensagem) {
    const alertErro = document.getElementById("alertErro");
    alertErro.textContent = mensagem;
    alertErro.classList.remove("d-none");
}
