//tipo primitivos: numeros, palavras e booleanos

//TYPE NUMBERS

    const primeiroNumero = 3;

    const segundoNumero = 1;

    const soma = segundoNumero + primeiroNumero;
    console.log(soma);

    const mult = primeiroNumero * segundoNumero;
    console.log(mult);

    //ponto flutuante

    const decimal = 5.7;
    console.log(decimal + primeiroNumero);

    //NaN

    const nome = 'Pedro';
    console.log(nome * soma);

    console.log(Math.PI);

    var a = 0, b = 0;
    console.log(a/b);

    var a = 20, b = 0;
    console.log(a/b);

    //Formatando números

    var a = 2, b = 3;
    console.log(a/b);
    console.log(Math.round(a/b)); //arredonda pro inteiro mais proximo
    // Math.ceil arredonda pra cima e Math.floor arredonda pra baixo

    const valor1 = 10, valor2 = 30;
    const divisao = valor1/valor2;
    console.log(divisao.toFixed(2)); //duas casas decimais

    function ganhoPorHora(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
    
        const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //Styles: decimal, currency (moeda) e percent

        return formatado;
    }

    console.log(ganhoPorHora(1000, 100));

    //Ordenando numeros

    var lista = [10, 1, 5, 9, 8, 12, 15];
    console.log(lista.sort()); //a ordem n é a esperada

//TYPE STRINGS

    const texto1 = 'Meu nome é ';
    const texto2 = 'Josevaldo Pinto.';
    const contatenacao = texto1 + texto2;
    console.log(contatenacao);

    const citacao = 'Penisvaldo disse "Mama aqui!"';
    console.log(citacao);

    //Unicode

    const cifrao = '\u0024'
    const aMaiusculo = '\u0041'
    const tique = '\u2705'
    const hiragana = '\u3041'

    console.log(cifrao)
    console.log(aMaiusculo)
    console.log(tique)
    console.log(hiragana)
    console.log('\u03c0') //numero PI

    //Convertendo para minusculos

    const meuNome = 'PEDRO';
    const nomeMinusculo = nome.toLowerCase();
    console.log(nomeMinusculo);

    //tamanho de strings

    const tamanho = meuNome.length;
    console.log(tamanho);

//TYPE BOOLEAN

    const nome1 = 'Pedro';
    const nome2 = 'pedro';

    console.log(nome1 === nome2);

    const num1 = 2;
    const num2 = 2;

    console.log(num1 === num2);

//TYPE NULL

    let input = null;

    if (input === null) {
    console.log('não há informação');
    } else {
    console.log(input);
    }

//TYPE UNDEFINED

    let input2 = null;
    let input3;

    console.log(input2); // null
    console.log(input3); // undefined

