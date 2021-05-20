$(function(){
    $("#questaon1 button").click(function(){
        let frase= $("#questaon1 p").text();
        let tam=frase.length;
        let arr="";
        let j=0;
        for(let i=tam-1; i>=0;i--){
            arr+=frase[i];
            j++;
        };
        $("#questaon1 p").text(arr);
    });
    $("#questaon2 button").click(function(){
        let tam=$("#questaon2 p").text().length;
        let htmlFRASE=$("#questaon2 p").html();
        let frase="";
        for(let i=0; i<tam;i++){
            if(vogal(htmlFRASE[i])){
                frase+="<b>"+htmlFRASE[i]+"</b>";
            } 
            else frase+=htmlFRASE[i];
        };
        $("#questaon2 p").html(frase);
        function vogal (letra){
            letra=letra.toUpperCase();
            switch(letra){
                case "A": return true;
                            break;
                case "E": return true;
                            break;
                case "I": return true;
                            break;
                case "O": return true;
                            break;
                case "U": return true;
                            break;
                default: return false;
            }
        }
    });
    $("#questaon3 button").click(function(){
        let texto= $("#questaon3 p").text();
        let tamanho= texto.length;
        let vetor=[], novoVet=[];
        let valorVetor=0, inicioDeCorte=0, novoVetIndex=0;
        for(let a=0; a<tamanho; a++){
            if(texto[a]==` `){
                if(texto[inicioDeCorte]!=` `) 
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a);
                else if (texto[inicioDeCorte]!=` `&&(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`))
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a-1);
                else if(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`)
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a-1);
                else 
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a);
                valorVetor++;
                inicioDeCorte=a;
            }
        }
        for(let a=0;a<vetor.length; a++){
            let palavra=vetor[a];
            let vetorAValor=palavra.toUpperCase();
            let ocorrencia=0;
            let nov;
            for(let b=0; b<vetor.length; b++){
                vetorBValor=vetor[b].toUpperCase();
                if(vetorAValor==vetorBValor){
                    ocorrencia++;
                    if(vetorAValor==vetorBValor&&ocorrencia!=1) vetor.splice(b, 1);
                }
            }
            nov= new objTabela(palavra, ocorrencia);
            novoVet[novoVetIndex]=nov;
            novoVetIndex++;
        }
        for(let a=0;a<novoVet.length; a++){
            $("#questaon3 table")
                .append($("<tr>")
                    .append($("<td>")
                        .text(novoVet[a].palavra)
                    )
                    .append($("<td>")
                        .text(novoVet[a].ocorrencia)
                    )
                )        
        }




        function objTabela (word, number){
            this.palavra=word;
            this.ocorrencia=number;
        }
    });
    $("#questaon4 button").click(function(){
        let texto= $("#questaon4 p").text();
        let tamanho= texto.length;
        let vetor=[], novoVet=[];
        let valorVetor=0, inicioDeCorte=0, novoVetIndex=0;
        for(let a=0; a<tamanho; a++){
            if(texto[a]==` `){
                if(texto[inicioDeCorte]!=` `) 
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a);
                else if (texto[inicioDeCorte]!=` `&&(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`))
                        vetor[valorVetor]=texto.substring(inicioDeCorte, a-1);
                else if(texto[a-1]==`,`||texto[a-1]==`.`||texto[a-1]==`:`)
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a-1);
                else 
                        vetor[valorVetor]=texto.substring(inicioDeCorte+1, a);
                valorVetor++;
                inicioDeCorte=a;
            }
        }
        for(let a=0;a<vetor.length; a++){
            let palavra=vetor[a];
            let vetorAValor=palavra.toUpperCase();
            let ocorrencia=0;
            let novo;
            for(let b=0; b<vetor.length; b++){
                vetorBValor=vetor[b].toUpperCase();
                if(vetorAValor==vetorBValor){
                    ocorrencia++;
                    if(vetorAValor==vetorBValor&&ocorrencia!=1) vetor.splice(b, 1);
                }
            }
            novo=new objTabela(palavra, ocorrencia);
            novoVet[novoVetIndex]=novo;
            novoVetIndex++;
        }
        function objTabela (word, number){
            this.palavra= word;
            this.ocorrencia= number;
        }
        let maisFrequente= 0, maisFrequenteI=0;
        let maisFrequenteF= "A(s) mais frequente(s) são(é): ";
        let maisFrequentes= [];
        for(let a=0;a<novoVet.length; a++){
            if(novoVet[a].ocorrencia>=maisFrequente){
                maisFrequente=novoVet[a].ocorrencia;
            }
        }
        for(let a=0;a<novoVet.length; a++){
            if(novoVet[a].ocorrencia>=maisFrequente){
                maisFrequentes[maisFrequenteI]=novoVet[a].palavra;
                maisFrequenteI++;
            }
        }
        if(maisFrequentes.length<=1) maisFrequenteF=maisFrequentes[0];
        else{
            for(let a=0;a<maisFrequentes.length; a++){
                maisFrequenteF+=maisFrequentes[a]+", ";
            }
            maisFrequenteF+="com "+maisFrequente;
        }
        $(".p").text(maisFrequenteF);
        maisFrequente=0; valorVetor=0; inicioDeCorte=0; novoVetIndex=0; maisFrequenteI=0;
    });
    $("#questaon5 button").click(function(){
        let texto= $("#questaon5 p").text();
        let procurar=$("#input1_5").val();
        let substituir=$("#input2_5").val();
        let newtexto= texto.split(procurar).join(substituir);
        $("#questaon5 p").text(newtexto);
    });
    $("#questaon6 button").click(function(){
        let dia= $("#questaon6 input[name=dia]").val();
        let mes= $("#questaon6 input[name=mes]").val();
        let ano= $("#questaon6 input[name=ano]").val();
        let data= new Date();
        let birthday = new Date(ano, mes-1, dia);
        let test=data.getTime()-birthday.getTime();
        let dias=parseInt(test/86400000);
        let texto="A pessoa tem "+dias+" dias de vida, aproximadamente";
        $("#questaon6").append($("<p>").text(texto));
    });
    $("#questaon7 button").click(function(){
        let dia= $("#questaon7 input[name=dia]").val();
        let mes= $("#questaon7 input[name=mes]").val();
        let ano= $("#questaon7 input[name=ano]").val();
        switch(mes){
            case "1": mes="janeiro";
                break;
            case "2": mes="fevereiro";
                break;
            case "3": mes="março";
                break;
            case "4": mes="abril";
                break;
            case "5": mes="maio";
                break;
            case "6": mes="junho";
                break;
            case "7": mes="julho";
                break;
            case "8": mes="agosto";
                break;
            case "9": mes="setembro";
                break;
            case "10": mes="outubro";
                break;
            case "11": mes="novembro";
                break;
            case "12": mes="dezembro";
                break;
        }
        let texto=dia+" de "+mes+" de "+ano;
        $("#questaon7").append($("<p>").text(texto));
    });
    $("#questaon8 button").click(function(){
        let dia= $("#questaon8 input[name=dia1]").val();
        let mes= $("#questaon8 input[name=mes1]").val();
        let ano= $("#questaon8 input[name=ano1]").val();
        let diaF= $("#questaon8 input[name=dia2]").val();
        let mesF= $("#questaon8 input[name=mes2]").val();
        let anoF= $("#questaon8 input[name=ano2]").val();
        let dataF= new Date(anoF, mesF, diaF);
        let dataI= new Date(ano, mes, dia);
        let distanciaML= dataF.getTime()-dataI.getTime();
        let distanciaS=parseInt(distanciaML/604800000);
        let texto= "Há "+distanciaS+" semanas entres essas datas";
        $("#questaon8").append($("<p>").text(texto));
    });
    $("#questaon9 input").on('input', function(){
        let password= $("#questaon9 input").val();
        let tamanho=password.length;
        for(let a=0; a<tamanho; a++){
            if(/^[a-zA-Z]+$/.test(password)) $("#questaon9 p").text("Fraca").css("color", "red");
            else if((/^[a-zA-Z]+$/.test(password))||(/^[a-zA-Z0-9]+$/.test(password))) $("#questaon9 p").text("Moderada").css("color", "orange");
            else if((/^[a-zA-Z]+$/.test(password))||(/^[a-zA-Z0-9]+$/.test(password))||(/^[a-zA-Z0-9#-&(-.=]+$/.test(password))) $("#questaon9 p").text("Forte").css("color", "green");     
        }
        console.log((/^[a-zA-Z]+$/.test(password))||(/^[0-9]+$/.test(password))||(/^[a-zA-Z0-9#-&(-.=]+$/.test(password)));
    });
})