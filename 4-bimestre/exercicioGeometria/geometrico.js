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

function calcularGeometria(base ,h, apotema){

    // Calcular Perímetro

    if(numero == 10){
        perimetro = numero * base;
    }else if(numero == 9){
        perimetro = numero * base;
    }else if(numero == 8){
        perimetro = numero * base;
    }else if(numero == 7){
        perimetro = numero * base;
    }else if(numero == 6){
        perimetro = numero * base;
    }else if(numero == 5){
        perimetro = numero * base;
    }else if(numero == 4){
        if(tipo <= 1){
            perimetro = numero * base;
        }else{
            perimetro = (2 * base) + (2 * h);
        }
    }else if(numero == 3){
        perimetro = numero * base;
    }else(
        console.log('Não foi possível calcular o perímetro')
    )

    //Calcular Área

    if(numero == 10){
        area = numero * base;
    }else if(numero == 9){
        area = numero * base;
    }else if(numero == 8){
        area = numero * base;
    }else if(numero == 7){
        area = numero * base;
    }else if(numero == 6){
        area = numero * base;
    }else if(numero == 5){
        area = perimetro * apotema;
    }else if(numero == 4){
        if(tipo <= 1){
            area = base * base;
        }else{
            area = base * h;
        }
    }else if(numero == 3){
        area = (base * h) /2;
    }else(
        console.log('Não foi possível calcular a área')
    )

}