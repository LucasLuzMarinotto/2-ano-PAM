console.log('Digite um número')

// Variáveis

var apotema = Number;

var tipo = Number;

var numero = Number;

var h = Number;

var perimetro = Number;

var area = Number;

var base = Number;

// Qual forma é

function formaG(n, t){
    switch(n){
        case 3:
            console.log('Triângulo');
            break;
        case 4:
            if(t <= 1){
                console.log('Quadrado');
            }else{
                console.log('retângulo');
            }
            break;
        case 5:
            console.log('Pentágono');
            break;
        case 6:
            console.log('Hexágono');
            break;
        case 7:
            console.log('Heptágono');
            break;
        case 8:
            console.log('Octógono');
            break;
        case 9:
            console.log('Eneágono');
            break;
        case 10:
            console.log('Decágono');
            break;
        default:
            console.log('Forma geométrica não implementada');
            break;
    }
    numero = n;
    tipo = t;
}

// Calcular perimetro e área

function calcularGeometria(base , h, apotema){

    // Calcular Perímetro

    if(numero == 10){
        
    }else if(numero == 9){

    }else if(numero == 8){
        
    }else if(numero == 7){

    }else if(numero == 6){
        area = 6 * (base * h /2);
    }else if(numero == 5){
        area = perimetro * apotema;
    }else if(numero == 4){
        if(tipo <= 1){
            area = base * base;
        }else{
            area = base * h;
        }
    }else if(numero == 3){
        area = (base * h) / 2;
    }

    //Calcular Área

}