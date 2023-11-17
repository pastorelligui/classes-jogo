class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';

    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque especial';
    }

    return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
  }
}

function criarHeroi() {
  const nome = prompt('Digite o nome do herói:');
  const idade = prompt('Digite a idade do herói:');
  const tipo = prompt(
    'Digite o tipo do herói (mago, guerreiro, monge, ninja):',
  );

  const heroi = new Heroi(nome, idade, tipo);
  const resultado = heroi.atacar();

  document.getElementById('resultado').innerText = resultado;
}
