/******** Feito por Lindionez Macedo ********/
const biblia = require('../biblia.json')

const retira_acentos = (str) => {
    const com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    const sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaeeeeiiiionoooooouuuuybyr";
    let novastr = "";
    for (i = 0; i < str.length; i++) {
        var troca = false;
        for (a = 0; a < com_acento.length; a++) {
            if (str.substr(i, 1) == com_acento.substr(a, 1)) {
                novastr += sem_acento.substr(a, 1);
                troca = true;
                break;
            }
        }
        if (troca == false) {
            novastr += str.substr(i, 1);
        }
    }
    return novastr;
}

/** 
* Returns an array of all found locations.
* @param {string} palavra 
*/
const pesquisarPalavra = (palavra) => {
    let positions = [];
    biblia.forEach(livro => {
        if (livro.capitulos && Array.isArray(livro.capitulos)) {
            livro.capitulos.forEach((capítulo, i) => {
                if (Array.isArray(capítulo)) {
                    capítulo.forEach((bloco, j) => {
                        if (typeof bloco === 'string' && retira_acentos(bloco).toLowerCase().includes(retira_acentos(palavra.toLowerCase()))) {
                            positions.push({
                                livro: livro.nome,
                                capitulo: i + 1,
                                versiculo: j + 1,
                            });
                        }
                    });
                }
            });
        }
    });
    return positions;
}

/** 
* Returns a random verse where the word is included.
* @param {string} palavra 
*/
const pesquisar = (palavra) => {
    const result = pesquisarPalavra(palavra)
    if (!result.length) return { status: false }
    const resultadoFinal = result[Math.floor(Math.random() * result.length)]
    return resultadoFinal
}

process.on('message', msg => {
    const { id, tipo, get } = msg

    switch (tipo) {
        case 'pspalavra': process.send({ id: id, result: pesquisarPalavra(get) }); break
        case 'palavra': process.send({ id: id, result: pesquisar(get) }); break
    }

})