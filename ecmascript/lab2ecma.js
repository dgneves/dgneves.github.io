let calc=(num1,num2,op)=>{
    switch(op){
        case "+": return parseFloat(num1) + parseFloat(num2);
                        break;
        case "-": return parseFloat(num1) - parseFloat(num2);
                        break;
        case "*": return parseFloat(num1) * parseFloat(num2);
                        break;
        case "/": return parseFloat(num1) / parseFloat(num2);
                        break;
    }
}

let imposto=(sal)=>{
    let aliq, ded;
    if(sal< 1903.98){ aliq=0;ded=0;}
    else if(1903.98<=sal&&sal<2826.65){ aliq=7.5/100;ded=142.80;}
    else if(2826.65<=sal&&sal<3751.05){ aliq=15.0/100;ded=354.80;}
    else if(3751.05<=sal&&sal<=4664.68){ aliq=22.5/100;ded=636.13;}
    else if(sal>4664.68){ aliq=27.5/100;ded=869.36;}
    return sal*aliq-ded;
}

let verif_tri=(lad1, lad2, lad3)=>{
    let erro="ERRO";
    let eqi="Triângulo Equilátero";
    let esc="Triângulo Escaleno";
    let iso="Triângulo Isósceles";
    if(lad1<=0||lad2<=0||lad3<=0) 
        return erro;
    else if(lad1==lad2&&lad2==lad3&&lad3==lad1) 
        return eqi;
    else if(lad1!=lad2&&lad2!=lad3&&lad3!=lad1) 
        return esc;
    else if(lad1==lad2&&lad1+lad2>lad3||lad2==lad3&&lad2+lad3>lad1||lad3==lad1&&lad3+lad1>lad2) 
        return iso;
    else return erro;
}

let rotac=(txt, num)=>{
    const alf=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let copia=[];
    for(let i=0;i<26;i++){
        copia[i]=alf[i]
    }
    for(let j=0;j<num;j++){
        let prim=copia.shift();
        copia.push(prim);
    }
    let cop="";
    let ori="";
    for(let k=0;k<26;k++){
        cop+=copia[k];
        ori+=alf[k];
    }
    let tamanho=txt.length;
    let novotxt="";
    for(let z=0;z<tamanho;z++){
        let novapos;
        for(x=0;x<26;x++){
            if(txt[z]==alf[x]){
                novapos=x;
                break;
            }
        }
        let novo=copia[novapos];
        novotxt+=novo;
    }
    return novotxt;
}

$(function(){
    $("#exe1 button").click(function(){
        $("#exe1 p")
            .text(`Resultado: ${calc($("#n1").val(),$("#n2").val(),$("#oper").val())}`)
    })
    $("#exe2 button").click(function(){
        $("#exe2 p")
            .text(`A taxa do imposto será de ${imposto($("#exe2 input").val())} reais.`)
    })
    $("#exe3 button").click(function(){
        $("#exe3 p")
            .text(`${verif_tri($("#l1").val(),$("#l2").val(),$("#l3").val())}`)
    })       
    $("#exe4 button").click(function(){
        $("#exe4 p")
            .text(`${rotac($("#txt").val(),$("#pos").val())}`)
    })
});