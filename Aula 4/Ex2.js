function Aluno(nome) {
    this.nome = nome;
    this.notas = [];
}

Aluno.prototype.incluirNota = function (nota) {
    this.notas.push(nota);
};

Aluno.prototype.calcularMedia = function (callback) {
    const totalNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
    const media = totalNotas / this.notas.length;
    callback(media);
};

function verificarStatus(media) {
    if (media >= 7) {
        console.log(`Aluno APROVADO com média ${media.toFixed(2)}.`);
    } else {
        console.log(`Aluno REPROVADO com média ${media.toFixed(2)}.`);
    }
}

const aluno1 = new Aluno('João');

aluno1.incluirNota(8);
aluno1.incluirNota(7);
aluno1.incluirNota(6);

aluno1.calcularMedia(verificarStatus);
