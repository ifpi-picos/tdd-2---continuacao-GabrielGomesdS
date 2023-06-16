class Tarefas {
  constructor() {
    this.lista = [];
  }

  adicionar(descricao) {
    const tarefa = {
      descricao: descricao,
      concluida: false
    };
    this.lista.push(tarefa);
  }

  remover(indice) {
    if (indice >= 0 && indice < this.lista.length) {
      this.lista.splice(indice, 1);
    }
  }

  todas() {
    return this.lista;
  }

  marcarConcluida(indice) {
    if (indice >= 0 && indice < this.lista.length) {
      this.lista[indice].concluida = true;
    }
  }
}

module.exports = Tarefas;