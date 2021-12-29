const arr = [25, 15, 30, 50, 45, 20];

//selector sort

for(let posInicial = 0; posInicial < arr.length; posInicial++) {
    menor = posInicial;
    
    for(let i = posInicial; i < arr.length; i++) {
        if(arr[i] < arr[menor]) {
            menor = i;
        }
    }

    let livroMenor = arr[menor];
    let livroAtual = arr[posInicial];

    arr[menor] = livroAtual;
    arr[posInicial] = livroMenor;
}
console.log(arr);

//Usando o forEach()

const arr2 = [25, 15, 30, 50, 45, 20];

arr2.forEach((_,posInicial) => {
    menor = posInicial;
    for(let i = posInicial; i < arr2.length; i++) {
        if(arr2[i] < arr2[menor]) {
            menor = i;
        }
    }

    let livroMenor = arr2[menor];
    let livroAtual = arr2[posInicial];

    arr2[menor] = livroAtual;
    arr2[posInicial] = livroMenor;
})

console.log(arr2);

//Usando o for of

const arr3 = [25, 15, 30, 50, 45, 20];

for(let [posInicial,_] of arr3.entries()) {
    menor = posInicial;
    for(let i = posInicial; i < arr3.length; i++) {
        if(arr3[i] < arr3[menor]) {
            menor = i;
        }
    }

    let livroMenor = arr3[menor];
    let livroAtual = arr3[posInicial];

    arr3[menor] = livroAtual;
    arr3[posInicial] = livroMenor;
}

console.log(arr3);

//Usando o for in

const arr4 = [25, 15, 30, 50, 45, 20];

for(posInicial in arr4) {
    menor = posInicial;
    for(let i = posInicial; i < arr4.length; i++) {
        if(arr4[i] < arr4[menor]) {
            menor = i;
        }
    }

    let livroMenor = arr4[menor];
    let livroAtual = arr4[posInicial];

    arr4[menor] = livroAtual;
    arr4[posInicial] = livroMenor;
}

console.log(arr4);