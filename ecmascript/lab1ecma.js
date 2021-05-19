array=[12,5,7,4,8,9,52,4,9,8,6,4,0,-7,-5,1];

Array.prototype.min=function(){
    minimo=Math.min.apply(Infinity, this);
    return minimo;
}

Array.prototype.max=function(){
    maximo=Math.max.apply(Infinity, this);
    return maximo;
}

Array.prototype.uniq=function(){
    let i=0;
    let arr=[];
    for(value of this){
        arr[i]=value;
        i++;
    }
    for(let firs=0; firs<arr.length; firs++){
        let eq=arr[firs];
        let coun=0;
        for(let i=0; i<arr.length; i++){
            if(eq==arr[i]){
                coun+=1;
                if(coun>1)
                    arr.splice(i, 1);
            } 
        }
    }
    return arr;
}

Array.prototype.sortNum=function(){
    let arr=[];
    let minimo=Math.min.apply(Infinity, this);
    let maximo=Math.max.apply(Infinity, this);
    for(let value=minimo; value<=maximo; value++){
        for(let i=0; i<this.length;i++){
            if(value==this[i]){
                arr.push(value);
            }
        }
    }
    return arr;
}


let fibonacci=(pos)=>{
    let firs=0;
    let sec=1;
    let arr=[];
    for(let i=0;i<pos;i++){
        arr[i]=firs;
        let temporario=firs;
        firs=sec;
        sec+=temporario;
    }
    return arr;
}

let double=(arr)=>{
    let x2=(arr)=>{
        return arr*2;
    }
    return arr.map(x2);
}

let evenElements=(arr)=>{
    let par=(arr)=>{
        return arr%2==0;
    }
    return arr.filter(par);
}

let sum=(arr)=>{
    let valtotal=(num1, num2)=>{
        return num1+num2;
    }
    return arr.reduce(valtotal);
}

$(function(){

    $("#exe1")
        .append($("<p>")
            .text(`Valor mínimo: ${array.min()}`)
                )
        .append($("<p>")
            .text(`Valor máximo: ${array.max()}`)
                )
        .append($("<p>")
            .text(`Vetor com valores únicos: [${array.uniq()}]`)
                )
        .append($("<p>")
            .text(`Vetor ordenado: [${array.sortNum()}]`)
                )

    $("#exe2 button").click(function(){
        $("#exe2 p")
            .text(`Sua Sequência de Fibonacci: ${fibonacci($("#exe2 input").val())}`)
    })

    $("#exe3")
        .append($("<h3>")
            .text(`ARRAY INICIAL: [${array}]`)
        )
        .append($("<p>")
            .text(`Elementos Duplicados: ${double(array)}`)
        )
        .append($("<p>")
            .text(`Elementos Pares: ${evenElements(array)}`)
        )
        .append($("<p>")
            .text(`Valor Total dos Elementos: ${sum(array)}`)
        )
});