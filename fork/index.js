/******** Feito por Lindionez Macedo ********/
const { fork } = require('child_process')
const func = fork(`${__dirname}/func.js`)
let salvo = []

func.on('message', msg => {
    salvo.push(msg)
})

const positionCheck = (id, _dir) => {
    const position = _dir.findIndex(item => item.id === id);
    return position !== -1 ? position : false;
}

const useFork = async (tipo, get) => {
    const id = Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
    func.send({ id: id, tipo: tipo, get: get })
    const resposta = await new Promise((resolve, reject) => {
        var pegar = setInterval(() => {
            const conferir = positionCheck(id, salvo)
            if (conferir !== false) {
                setTimeout(() => {
                    clearInterval(pegar)
                    clearTimeout(chega)
                    salvo.splice(conferir, 1)
                }, 500);
                resolve(salvo[conferir])
            }
        }, 2 * 1000);
        var chega = setTimeout(() => {
            clearInterval(pegar);
            resolve({ result: undefined })
        }, 60 * 1000);
    })
    return resposta?.result
}

module.exports = {
    useFork
}