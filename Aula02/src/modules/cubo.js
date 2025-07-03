function calcularVolumeCubo(aresta) {
    if (typeof aresta !== 'number' || isNaN(aresta) || aresta <= 0) {
        return "valor inválido para a aresta";
    }
    return Math.pow(aresta, 3);
}

module.exports = calcularVolumeCubo;
