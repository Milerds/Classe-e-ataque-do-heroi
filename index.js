class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        let ataque;

        switch (this.classe) {
            case 'monge':
                ataque = 'Artes Marciais';
                break;
            case 'mago':
                ataque = 'Magia';
                break;
            case 'guerreiro':
                ataque = 'Espada';
                break;
            case 'ninja':
                ataque = 'Shuriken';
                break;
            default:
                ataque = 'Ataque não identificado';
        }

        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Damian', 41, 'guerreiro');
const heroi2 = new Heroi('Gelong', 33, 'monge');
const heroi3 = new Heroi('Lyor', 110, 'mago');
const heroi4 = new Heroi('Genji', 35, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
