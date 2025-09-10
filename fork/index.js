/******** Feito por Lindionez Macedo ********/
const { fork } = require('child_process');
const func = fork(`${__dirname}/func.js`);

// armazenar resolvers pendentes
const pending = new Map();

// escuta as mensagens vindas do fork
func.on('message', (msg) => {
    const { id, result } = msg;
    const resolver = pending.get(id);
    if (resolver) {
        resolver(result);
        pending.delete(id);
    }
});

const useFork = (tipo, get) => {
    return new Promise((resolve) => {
        const id = Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);

        // registrar a promise
        pending.set(id, resolve);

        // mandar para o processo filho
        func.send({ id, tipo, get });

        // timeout de segurança
        setTimeout(() => {
            if (pending.has(id)) {
                resolve(undefined);
                pending.delete(id);
            }
        }, 120 * 1000); // 120s
    });
};

module.exports = {
    useFork,
};
