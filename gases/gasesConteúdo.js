$(function(){
    $("body").append("<header><p>Algumas imagens podem ser lentas para carregar, caso não carreguem recarregue a página.</p></header>").append("<footer><p>Algumas fórmulas feitas com <a href='https://www.codecogs.com/'>CodeCogs</a>. Todos os direitos são dos proprietários.</p></footer>");
    $("#questao-1 button").on("click", function(){
        let enunciado="";
        enunciado+="    <span style='font-weight:bold'>1. Encheu-se um cilindro com 4,0 litros de hidrogênio (H<sub>2</sub>) a uma pressão de 596 mmHg (milimetros de mercúrio, medida de pressão), a uma temperatura de 7° C. Qual seria o volume do hidrogênio a uma pressão de apenas 40 mmHg e a temperatura de -45°C, supondo a expansão livre do gás?</span>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='1' id='1_1' value=' 5.6 L'> 5.6 L";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='1' id='1_2' value='16.7 L'> 16.7 L";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='1' id='1_3' value='48.5 L' > 48.5 L &#128504;";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='1' id='1_4' value='167 L'> 167 L";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='1' id='1_5' value='40 L'> 40 L";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <button name='btn1'> Verificar </button>";
        enunciado+="    </div>";

        let resposta= "V<sub>i</sub>= 4.0 L<br>";
        resposta+= "P<sub>i</sub>= 596 mmHg<br>";
        resposta+= "T<sub>i</sub>= 7 °C -> Convertendo para Kelvin = 280 K<br>";
        resposta+= "V= ?<br>";
        resposta+= "P= 40 mmHg<br>";
        resposta+= "T= -45 °C -> Convertendo para Kelvin = 228 K<br>";
        resposta+= "Utilizando a equação geral do gás ideal:<br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?\\frac{P_{i}\\times&space;V_{i}}{T_{i}}=\\frac{P\\times&space;V}{T}' title='Equação Geral dos Gases' /><br>";
        resposta+= "podemos definir: <br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?\\frac{596\\times&space;4}{280}=\\frac{40\\times&space;V}{228}' /> <br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?V=\\frac{228\\times&space;(596\\times&space;4)}{280\\times&space;40}=48.5L'/> <br>";

        if($("#questao-1 input:checked").val()=="48.5 L"){
            let acerto="";
            acerto= "<span style='font-weight:bold'>Correto!</span><br><br>"+resposta;
            $("#questao-1 div[class=enunciado]").html(enunciado);
            $("#questao-1 div[class=enunciado]").append($("<p>").html(acerto));

        }
        else{
            $("#questao-1 div[class=enunciado]").html(enunciado);
            $("#questao-1 div[class=enunciado]").append($("<p>").html(resposta));
        }

    });

    $("#questao-2 button").on("click", function(){
        let enunciado="";
        enunciado+="    <span style='font-weight:bold'>2. (Cesgran-RJ) Uma quantidade de matéria igual a 5 mol de um gás ideal a uma temperatura de 27°C ocupa um volume de 16,4 litros. A pressão atm, exercida por essa quantidade de gás, é:<br>Dado: <i>R</i> = 0,082 atm &#215; L/mol &#215; K.</span>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='2' id='2_1' value='0.675'> 0.675";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='2' id='2_2' value='0.75'> 0.75";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='2' id='2_3' value='6.75' > 6.75";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='2' id='2_4' value='7.5'> 7.5 &#128504;";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='2' id='2_5' value='75'> 75";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <button name='btn1'> Verificar </button>";
        enunciado+="    </div>";

        let resposta= "n= 5 mol<br>";
        resposta+= "T= 27 °C -> Convertendo para Kelvin = 300 K<br>";
        resposta+= "V= 16.4 L <br>";
        resposta+= "P= ?<br>";
        resposta+= "R= 0.082 atm&#215;L/mol&#215;K<br>";
        resposta+= "Utilizando a Equação de Clapeyron:<br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?P\\times&space;V=n\\times&space;R\\times&space;T' title='Equação de Clapeyron'/><br>";
        resposta+= "podemos definir: <br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?P\\times&space;16.4=5\\times&space;0.082\\times&space;300'/> <br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/gif.latex?P=\\frac{5\\times&space;0.082\\times&space;300}{16.4}=7.5atm'/> <br>";

        if($("#questao-2 input:checked").val()=="7.5"){
            let acerto="";
            acerto= "<span style='font-weight:bold'>Correto!</span><br><br>"+resposta;
            $("#questao-2 div[class=enunciado]").html(enunciado);
            $("#questao-2 div[class=enunciado]").append($("<p>").html(acerto));

        }
        else{
            $("#questao-2 div[class=enunciado]").html(enunciado);
            $("#questao-2 div[class=enunciado]").append($("<p>").html(resposta));
        }

    });
    
    $("#questao-3 button").on("click", function(){
        let enunciado="";
        enunciado+="    <span style='font-weight:bold'>3. (UMP-SP modificada) Uma mistura de 1,5 mol de gás carbônico (CO<sub>2</sub>), 8g de metano (CH<sub>4</sub>, massa molar= 16 g &#8226; mol<sup>-1</sup>) e 44,8 L de monóxido de carbono (CO) está contido em um cilindro de mergulho de 30 litros nas CNTP.<br>É correto afirmar que:<br>Dado: volume molar nas CNTP= 22,4 L/mol.</span>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='3' id='3_1' value='a'> a pressão parcial do monóxido de carbono é o dobro da pressão do metano.";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='3' id='3_2' value='b'> a pressão parcial do metano é o triplo da do gás carbônico.";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='3' id='3_3' value='c' > a pressão parcial do gás carbônico é de 1/4 da pressão parcial do monóxido de carbono.";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='3' id='3_4' value='d'> a pressão parcial do monóxido de carbono é o quádruplo da pressão parcial do metano. &#128504;";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <input type='radio' name='3' id='3_5' value='e'> a pressão total é igual a 4 atm.";
        enunciado+="    </div>";
        enunciado+="    <div>";
        enunciado+="        <button name='btn1'> Verificar </button>";
        enunciado+="    </div>";

        let resposta="Dados: <br>1.5 mol CO<sub>2</sub><br>8 g CH<sub>4</sub> -> Sendo 16 g/mol, é igual à 0.5 mol de CH<sub>4</sub><br>44,8 L de CO<br>Volume molar nas CNTP= 22,4 L/mol<br>Portanto:<br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?Volume_{CO_{2}}=1.5\\times22,4=33,6'/><br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?Volume_{CH_{4}}=0.5\\times22,4=11,2'/><br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?Volume_{CO}=44,8'/><br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?Volume_{total}=33,6+11,2+44,8=89,6'/><br>";
        resposta+= "Então, por sabermos que:<br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?\\frac{V_{parcial}}{V_{total}}=\\frac{n_{parcial}}{n_{total}}=\\frac{P_{parcial}}{P_{total}}'/><br>";
        resposta+= "pela lei de Dalton, lei de Amagat e Fração Molar, teremos: <br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?V_{parcial}CO_{2}=\\frac{33,6}{89,6}=0.375=P_{parcial}CO_{2}'/><br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?V_{parcial}CH_{4}=\\frac{11,2}{89,6}=0.125=P_{parcial}CH_{4}'/><br>";
        resposta+= "<img class='formula' src='https://latex.codecogs.com/png.latex?V_{parcial}CO=\\frac{44,8}{89,6}=0.5=P_{parcial}CO'/><br>";
        resposta+= "Agora vamos as afirmações: <br>";
        resposta+= "&#34;a pressão parcial do monóxido de carbono é o dobro da pressão do metano.&#34; -> <img src='https://latex.codecogs.com/png.latex?2\\times0.125=0.25\\neq0.5'/><br>";
        resposta+= "&#34;a pressão parcial do metano é o triplo da do gás carbônico.&#34; -> <img src='https://latex.codecogs.com/png.latex?3\\times0.375=1,125\\neq0.125'/><br>";
        resposta+= "&#34;a pressão parcial do gás carbônico é de 1/4 da pressão parcial do monóxido de carbono.&#34; -> <img src='https://latex.codecogs.com/png.latex?\\frac{1}{4}\\times0.5=0,125\\neq0.375'/><br>";
        resposta+= "&#34;a pressão parcial do monóxido de carbono é o quádruplo da pressão parcial do metano.&#34; -> <img src='https://latex.codecogs.com/png.latex?4\\times0.125=0.5=0.5'/> -> Portanto, resposta correta.<br>";
        resposta+= "&#34;a pressão total é igual a 4 atm.&#34; -> <img src='https://latex.codecogs.com/png.latex?P_{total}=0.375+0.125+0.5=1\\neq4'/><br>";
        
        if($("#questao-3 input:checked").val()=="d"){
            let acerto="";
            acerto= "<span style='font-weight:bold'>Correto!</span><br><br>"+resposta;
            $("#questao-3 div[class=enunciado]").html(enunciado);
            $("#questao-3 div[class=enunciado]").append($("<p>").html(acerto));

        }
        else{
            $("#questao-3 div[class=enunciado]").html(enunciado);
            $("#questao-3 div[class=enunciado]").append($("<p>").html(resposta));
        }
    });
});
