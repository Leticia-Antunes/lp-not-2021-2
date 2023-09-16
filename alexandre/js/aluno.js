function calcularMedia(){
    //criar referencia ao elementos da pagina
    var inNome = document.getElementById("inNome")
    var  inNota1 = document.getElementById("inNota1")
    var  inNota2 = document.getElementById("inNota2")
    var outMedia = document.getElementById("outMedia")
    var outSituacao = document.getElementById("outSituacao")

    // obter os conteúdos dos campos da pagina

    var nome = inNome.value
    var nota1 = Number (inNota1.value)
    var nota2 = Number (inNota2.value)

    //calcular a media das notas

    var media = (nota1 + nota2) /2;

    //apresenta a média (altera o conmteúdo do elemento )
    outMedia.textContent = `Média das notas ${media.toFiex(1)}`;
    
    //cria condição com o se /senão
    if(media >= 7){{
        // altera o texto e estilo cor do elemento outsituação
        outSituacao.textContent = "Parabés" + nome + "Você foi aprovado";
        outSituacao.style.color - "blue";
    }else if (media >= 4){
        outSituacao.textContent = "Atenção" +nome+ "Você está de exame";
        outSituacao.style.color - "green";
    } else {
        outSituacao.textContent = "Ops" +nome+ "Você foi reprovado";
        outSituacao.style.color - "red";

    }
    }



// cria um referencia ao element b
var btResultado = document.getElementById("btResultado");
// registrar um evento
btResultado.addEventListener("click", calcularMedia);

}