var botao = window.document.querySelector('input#verificar')
botao.addEventListener('click', verificar)


function verificar(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}


function verificar(){
    var data = new Date()

    var dia = data.getDate()
    var mes = data.getUTCMonth()
    mes = mes+1
    var ano = data.getFullYear()
    
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    window.document.write(fano)
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        window.alert('tudo ok')
    }
}
    
   // window.document.write("teste")
    
      
      
    
   // window.document.write("teste1")
       
    
   // window.document.write("teste2")
    
    
    //window.document.write(dia)
    //window.document.write(mes)
    //window.document.write(ano)

    //window.alert('teste')
    //window.document.write("teste")