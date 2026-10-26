// src/api.js
const FILMES_MOCK = [
    { id: '1', titulo: 'Matrix', ano: 1999, sinopse: 'Um programador descobre a verdade sobre a realidade.' },
    { id: '2', titulo: 'Interestelar', ano: 2014, sinopse: 'Exploradores viajam por um buraco de minhoca no espaço.' },
    { id: '3', titulo: 'O Poderoso Chefão', ano: 1972, sinopse: 'O patriarca de uma dinastia do crime organizado.' },
    { id: '4', titulo: 'Pulp Fiction: Tempo de Violência', ano: 1994, sinopse: 'Histórias entrelaçadas de criminosos em Los Angeles.' },
    { id: '5', titulo: 'A Origem', ano: 2010, sinopse: 'Um ladrão invade os sonhos das pessoas para roubar segredos corporativos.' },
    { id: '6', titulo: 'Clube da Luta', ano: 1999, sinopse: 'Um homem insone cria um clube subterrâneo de combate.' },
    { id: '7', titulo: 'Forrest Gump: O Contador de Histórias', ano: 1994, sinopse: 'Um homem com coração puro testemunha grandes eventos históricos.' },
    { id: '8', titulo: 'O Cavaleiro das Trevas', ano: 2008, sinopse: 'Batman enfrenta o Coringa em uma batalha pelo destino de Gotham.' },
    { id: '9', titulo: 'O Senhor dos Anéis: O Retorno do Rei', ano: 2003, sinopse: 'A batalha final pelo destino da Terra-média e do Um Anel.' },
    { id: '10', titulo: 'Cidade de Deus', ano: 2002, sinopse: 'A ascensão da violência e do tráfico em uma favela carioca vista pelas lentes de Buscapé.' },
    { id: '11', titulo: 'Gladiador', ano: 2000, sinopse: 'Um general romano traído busca vingança contra o imperador corrupto.' },
    { id: '12', titulo: 'O Silêncio dos Inocentes', ano: 1991, sinopse: 'Uma agente do FBI consulta um serial killer preso para capturar outro.' },
    { id: '13', titulo: 'Parasita', ano: 2019, sinopse: 'Uma família em dificuldades infiltra-se gradualmente no lar de uma família rica.' },
    { id: '14', titulo: 'De Volta para o Futuro', ano: 1985, sinopse: 'Um adolescente viaja acidentalmente para o ano de 1955 em um DeLorean.' },
    { id: '15', titulo: 'Os Bons Companheiros', ano: 1990, sinopse: 'A ascensão e queda de Henry Hill dentro da máfia nova-iorquina.' },
    { id: '16', titulo: 'O Show de Truman', ano: 1998, sinopse: 'Um homem descobre que toda a sua vida é transmitida ao vivo como um reality show.' },
    { id: '17', titulo: 'Central do Brasil', ano: 1998, sinopse: 'Uma ex-professora ajuda um menino órfão a procurar o pai que nunca conheceu.' },
    { id: '18', titulo: 'Star Wars: Episódio V - O Império Contra-Ataca', ano: 1980, sinopse: 'Os rebeldes enfrentam o Império enquanto Luke Skywalker treina com o Mestre Yoda.' },
    { id: '19', titulo: 'Whiplash: Em Busca da Perfeição', ano: 2014, sinopse: 'Um baterista jovem e ambicioso é levado ao limite por um instrutor impiedoso.' },
    { id: '20', titulo: 'Vingadores: Ultimato', ano: 2019, sinopse: 'Os heróis sobreviventes tentam reverter as ações de Thanos no universo.' },
];
// Simula uma chamada assíncrona (como se fosse buscar na internet)
export const buscarFilmes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FILMES_MOCK);
        }, 1000); // Demora 1 segundo para "carregar"
    });
};