function calcularVolumeCubo(aresta) {
    if (typeof aresta !== 'number' || isNaN(aresta)) {
         return "valor inválido para a aresta do cubo";
    }
    return Math.pow(aresta, 3);
}
module.exports = calcularVolumeCubo;