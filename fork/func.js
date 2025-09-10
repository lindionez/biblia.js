/******** Feito por Lindionez Macedo ********/
const biblia = require('../database/biblia.json')
const { util, cache } = require('../tools')

const save = []
const cacheSave = []

const check = (palavra) => {
    const position = save.findIndex(e => e.palavra === palavra);
    return position !== -1 ? position : false;
}

/** 
* Returns an array of all found locations.
* @param {string} palavra 
*/
const pesquisarPalavra = (palavra) => {
    if (cache.hasCache(palavra, cacheSave)) return cache.getCache(palavra, cacheSave)
    const checarPalavraJaUsada = check(palavra)
    if (checarPalavraJaUsada !== false) return save[checarPalavraJaUsada].result
    let positions = [];
    biblia.forEach(livro => {
        if (livro.capitulos && Array.isArray(livro.capitulos)) {
            livro.capitulos.forEach((capítulo, i) => {
                if (Array.isArray(capítulo)) {
                    capítulo.forEach((bloco, j) => {
                        if (typeof bloco === 'string' && util.retira_acentos(bloco).toLowerCase().includes(util.retira_acentos(palavra.toLowerCase()))) {
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
    save.push({ palavra: palavra, result: positions })
    cache.setCache(palavra, positions, cacheSave)
    return positions;
}

/** 
* Returns a random verse where the word is included.
* @param {string} palavra 
*/
const pesquisar = (palavra) => {
    const result = pesquisarPalavra(palavra)
    if (!result.length) return null
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