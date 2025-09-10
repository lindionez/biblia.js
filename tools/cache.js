exports.hasCache = (imput, local) => {
    return local.some(item => item.imput === imput);
}

exports.getCache = (imput, local) => {
    const temaItem = local.find(item => item.imput === imput);
    return temaItem ? temaItem.res : null;
}

exports.setCache = (imput, res, local) => {
    local.push({
        imput: imput,
        res: res
    });

}