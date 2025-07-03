function mensagemDeBoasVindas(nome) {
    if (typeof nome !== 'string' || nome.trim() === '') {
        throw new Error('erro ao exibir mensagem');
    }

    return `Olá, ${nome}! Seja bem-vindo(a).`;
}


module.exports = mensagemDeBoasVindas