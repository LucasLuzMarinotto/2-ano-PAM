console.log('Digite um número')

// Variáveis

var forma;

var numero;

var perimetro = 'numero de lados X comprimento dos lados';

// Qual forma é

function formaG(n){
    switch(n){
        case 3:
            forma = 'Triângulo';
            area = 'area = (base X h) /2';
            forma = './imagens./triangulo.jpeg'
            break;
        case 4:
            forma = 'Quadradilatero';
            area = 'area = base X h';
            forma = './imagens./'
            break;
        case 5:
            forma = 'Pentagono';
            area = 'area = (base X h) /2';
            break;
        case 6:
            forma = 'Hexagono';
            area = 'area = ((base X h) /2) * 6';
            break;
        case 7:
            forma = 'Heptagono';
            area = 'area = (base X h) /2';
            break;
        case 8:
            forma = 'Octogono';
            area = 'area = 8 Xbase X h /2';
            break;
        case 9:
            forma = 'Eneagono';
            area = 'area = (base X h) /2';
            break;
        case 10:
            forma = 'Decagono';
            area = 'area = (base X h) /2';
            break;
        default:
            console.log('Forma geométrica não implementada');
            break;
    }
}
function mostrarForma(){
    document.getElementById('formaNome').innerText = forma;
    document.getElementById('formaNome').innerText = area;
    document.getElementById('formaNome').innerText = perimetro;
    document.getElementById('formaNome').innerText = imagem;
}


function iniciar(){
    alert('Aperte o botão direito do mouse e clique em inspecionar, depois vá até o console e digite o comando: function formaG(). E dentro do parênteses escreva o número de lados da forma que gostaria de olhar')
    mostrarForma();
}