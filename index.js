/******** Feito por Lindionez Macedo ********/
const biblia = require('./database/biblia.json')
const { useFork } = require('./fork')

const { util } = require('./tools')

/** 
* Return all book
* @param {string} livro 
*/
const getLivro = (livro) => {
    let result = []; resultExtremeAntiBugChato = []
    Object.keys(biblia).forEach(i => {
        if (biblia[i].nome.replace(/ /gi, '').toLowerCase() === livro.replace(/ /gi, '').toLowerCase()) resultExtremeAntiBugChato = i // It is important to stay here, to avoid problems with accentuation
        if (!resultExtremeAntiBugChato.length && biblia[i].abv.replace(/ /gi, '').toLowerCase() === livro.replace(/ /gi, '').toLowerCase()) resultExtremeAntiBugChato = i // It is important to stay here, to avoid problems with accentuation
        if (util.retira_acentos(biblia[i].nome.replace(/ /gi, '')).toLowerCase() === util.retira_acentos(livro.replace(/ /gi, '')).toLowerCase()) result = i // result ignoring accents
        if (!result.length && util.retira_acentos(biblia[i].abv.replace(/ /gi, '')).toLowerCase() === util.retira_acentos(livro.replace(/ /gi, '')).toLowerCase()) result = i // result ignoring accents
    });
    return biblia[resultExtremeAntiBugChato.length ? resultExtremeAntiBugChato : result]
}

/** 
* Return the entire requested chapter.
* @param {string} livro 
* @param {string} numero 
* @param {boolean} toString 
*/
const getCapitulo = (livro, numero, toString = true) => {
    let versiculos = ''
    const capitulo = !Number(numero) && numero.includes(':') ? numero.substring(0, numero.indexOf(':')) : numero
    const livro1 = getLivro(livro)
    if (livro1 === undefined || capitulo === 0 || !Number(capitulo) || livro1.capitulos.length < (capitulo - 1)) return { status: false }
    for (let i = 0; i < livro1.capitulos[capitulo - 1].length; i++) {
        versiculos += `*${i + 1}:* ${livro1.capitulos[capitulo - 1][i]}\n`
    }
    return { status: true, nome: livro1.nome, capitulo: capitulo, escrita: toString ? versiculos : livro1.capitulos[capitulo - 1] }
}

/** 
* Return only the requested verse.
* @param {string} livro 
* @param {string} numero 
*/
const getVersiculo = (livro, numero) => {
    const versiculo = !Number(numero) && numero.includes(':') ? numero.substring(numero.lastIndexOf(':') + 1) : numero
    const vsReplace = () => versiculo.replace(/(^|\D)0([1-9]|10)\b/g, function (match, p1, p2) {
        return p1 + p2;
    });
    const vs = !!Number(numero) ? versiculo : vsReplace()
    const capitulo = getCapitulo(livro, numero, false)
    if (!capitulo.status || vs === 0 || !Number(vs) || capitulo.escrita.length < (vs - 1)) return { status: false }
    return { status: true, nome: capitulo.nome, capitulo: capitulo.capitulo, versiculo: vs, escrita: capitulo.escrita[vs - 1] }
}

const getRandomLivro = () => {
    const random = biblia[Math.floor(Math.random() * biblia.length)]
    return random
}

/** 
* Return a random chapter.
*/
const getRandomCapitulo = () => {
    const livro = getRandomLivro()
    const random = Math.floor(Math.random() * livro.capitulos.length)
    return { status: true, nome: livro.nome, capitulo: (random + 1), escrita: livro.capitulos[random] }
}

/** 
* Return a random verse.
*/
const getRandomVersiculo = () => {
    const capituloJson = getRandomCapitulo()
    const random = Math.floor(Math.random() * capituloJson.escrita.length)
    return { status: true, nome: capituloJson.nome, capitulo: capituloJson.capitulo, versiculo: (random + 1), escrita: capituloJson.escrita[random] }
}

/** 
* Returns an array of all found locations.
* @param {string} palavra 
*/
const pesquisarPalavra = async (palavra) => {
    return await useFork('pspalavra', palavra)
}

/** 
* Returns a random verse where the word is included.
* @param {string} palavra 
*/
const pesquisar = async (palavra) => {
    const resultadoFinal = await useFork('palavra', palavra)
    if (resultadoFinal === null) return { status: false }
    const getVs = getVersiculo(resultadoFinal.livro, `${resultadoFinal.capitulo}:${resultadoFinal.versiculo}`)
    return getVs
}

// const get = async () => { console.log(await pesquisar('jesus')); process.exit() }
// get()

module.exports = {
    getLivro,
    getCapitulo,
    getRandomCapitulo,
    getRandomVersiculo,
    getVersiculo,
    pesquisarPalavra,
    pesquisar
}
