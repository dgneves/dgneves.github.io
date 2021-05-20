var glossario = [
    {"id":1 
        , "termo":"W3C"
        , "definicao": "World Wide Web Consortium – escritório responsável por desenvolver normas técnicas para a Internet" 
        , "autor": "José Borges" 
        , "dataCriacao": "2015-04-01"} 
    , {"id":2 
        , "termo":"HTML" 
        , "definicao": "HyperText Markup Language – linguagem de marcação utilizada para estruturar páginas web" 
        , "autor": "Pedro Silva" 
        , "dataCriacao": "2017-05-12"} 
    , {"id":3
        , "termo": "CSS" 
        , "definicao": "Cascade Style Sheet – Folhas de estilo utilizadas para configurar a visualização de  páginas web" 
        , "autor": "Maria Machado" 
        , "dataCriacao": "2018-10-11"}
    , {"id":4
        , "termo": "JS" 
        , "definicao": "JavaScript – Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma." 
        , "autor": "Douglas de Lima" 
        , "dataCriacao": "2019-11-23"}
]; 
$(function(){
    $.each(glossario, function(idx, listelement){
        let newLi= listelement.termo;
        $("#list")
            .append($("<li>")
                .addClass("listelement")
                .attr("id", listelement.id)
                .html(newLi)
            );
    });
    $.each($(".listelement"), function(indice, idt){
        let id=idt.id;
        let seletorid="#"+id;
        let glossarioid=id-1;
        $(seletorid)
        .on("click", function(){
            $("#right").html("<h2>Definição</h2>");
            let criação= " Data de criação: " +glossario[glossarioid].dataCriacao + " - Autor do Post: " + glossario[glossarioid].autor;
            $("#right")
                .append($("<h4>")
                    .text(glossario[glossarioid].termo)
                )
                .append($("<p>")
                    .text(glossario[glossarioid].definicao)
                )
                .append($("<i>")
                    .append($("<p>")
                        .text(criação)
                    )
                );
            });
        });
});