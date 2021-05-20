$(function(){
    var acervo=[];
    $("#cadastro").click(function(){
        let titulo = $("#titulo").val();
        let descricao = $("#desc").val();
        let genero = $("#gen").val();
        let autor = $("#aut").val();
        let image = $("<img>").attr('src', 'lixo.png');
        let acervo_post = $("#postAcervo").val();
        image.css('width', '1em');
        $("#acervo")
            .append($("<tr>")
                    .addClass("livro")
                .append($("<td>")
                    .attr("id", "1td")
                    .text(titulo)
                )
                .append($("<td>")
                    .attr("id", "2td")
                    .text(descricao)
                )
                .append($("<td>")
                    .attr("id", "3td")
                    .text(genero)
                )
                .append($("<td>")
                    .attr("id", "4td")
                    .text(autor)
                )
                .append($("<td>")
                    .append(image)
                )
            );
            $("#autorList")
                .append($("<option>")
        .val(autor)
    );
            titulo = $("#titulo").val("");
            descricao = $("#desc").val("");
            autor = $("#autor").val("");
        $("#acervo").on("click", "img", function(){
            $(this).parents("#acervo tr").remove();
        })
    });
    function liv (titulo, desc, genero, autor){ 
        this.titulo = titulo; 
        this.descricao = desc; 
        this.genero = genero; 
        this.autor = autor; 
    }
    $("input[type=submit]").click(function(){
        var linhaLivros=$(".livro");
        console.log(linhaLivros);
        $.each($(".livro"), function(idx, linha){
        let tituloLinha = $(linha).children("#1td").text(); 
        let descricaoLinha = $(linha).children("#2td").text(); 
        let generoLinha = $(linha).children("#3td").text(); 
        let autorLinha = $(linha).children("#4td").text(); 
        let livro = new liv(tituloLinha, descricaoLinha, generoLinha, autorLinha);
        acervo.push(livro); 
        })
        var acervoStr = JSON.stringify(acervo);
        $("input[name=acervo_post]").val(acervoStr);
    });
});