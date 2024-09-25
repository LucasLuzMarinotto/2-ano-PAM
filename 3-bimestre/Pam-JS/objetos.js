// Objetos

var aluno1 = {
    matricula: 7627364,
    nome: 'Danilo Ferreira',
    curso: 'Bootcamp Front End',
    ativo: true
}

console.log(aluno1.nome);

aluno1.dataNascimento = '03/07/1985'
console.log(aluno1.dataNascimento);

delete aluno1.dataNascimento;

// Underfined a null

var x;
var y = null;

// Arrays

var frutas = ['Banana', 'Laranja', 'Maçã'];

// Criação do objeto aluno2

var aluno2 = {
    matricula: 230364,
    nome: 'Lucas Luz Marinotto',
    curso: 'Desenvolvimento de Sistemas',
    ativo = true
}

// Apresenta as informações do aluno2

console.log(aluno2.nome);
console.log(aluno2.curso);
console.log(aluno2.matricula);


// Cria, imprime e deleta a data de nascimento do aluno2

aluno2.dataNascimento = '27/03/2008'
console.log(aluno2.dataNascimento);

delete aluno2.dataNascimento;