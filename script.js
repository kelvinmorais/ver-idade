var botao = window.document.querySelector('input#verificar')        //conecta via DOM ao input button
botao.addEventListener('click', verificar)      //analisa o evento de clique que ocorre com o button

function verificar(){   //função ao button ser pressionado
    //alert("teste")    
    var data = new Date(),       //recebe a data atual
        dia = data.getDate(),        //separa a data atual por dia, mes e ano
        mes = data.getUTCMonth(),
        ano = data.getFullYear(),
        fdia = window.document.querySelector('input#txtdia'),   //conecta via DOM ao input txtdia
        fmes = window.document.querySelector('input#txtmes'),  
        fano = window.document.querySelector('input#txtano'),
        fdian = Number(fdia.value) //convertendo o valor recebido do form para Number
        fmesn = Number(fmes.value)
        fanon = Number(fano.value)
        fsex = window.document.querySelectorAll('input.sex'),
        res = window.document.querySelector('div#res'),
        genero = '',
        img = document.createElement('img')
    img.setAttribute('id', 'foto')
    mes = mes+1

    if (fsex[0].checked){
        genero = 'Homem'
    } else if (fsex[1].checked){
        genero = 'Mulher'
    }
    
    if (fano.value.length == 0 || fano.value > ano){        //se o valor no ano
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {             
            anoidade = ano - fanon    //diferença de anos
            diasgeral = 365 * anoidade    //quantidade de dias totais para diferença de anos

            resmes = mes * 30,5     //x diferença
            resmesf = fmesn * 30,5      //y diferença
            resmesfposi = resmesf ** 2 / resmesf //para tirar negativo
            diferencames = resmesfposi - resmes     

            diastotal = diasgeral - diferencames    //dias totais de idade

            qtdanos = diastotal / 365   
            qtdmeses = qtdanos * 12

            res.style.textAlign = 'center'

            horas = diastotal * 24

            if (anoidade >= 0 && anoidade < 3 && genero == 'Homem') {  //HOME

                img.setAttribute('src','img/1-bebe-m-200.png') //add a imagem 
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img) //add imagem no html

            } else if (anoidade >= 3 && anoidade < 6 && genero == 'Homem'){

                img.setAttribute('src','img/2-crianca-m-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img) 

            } else if (anoidade >= 6 && anoidade < 11 && genero == 'Homem'){

                img.setAttribute('src','img/3-menino-m-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img) 

            } else if (anoidade >= 11 && anoidade < 16 && genero == 'Homem'){

                img.setAttribute('src','img/4-pre-adolescente-m-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img) 

            } else if (anoidade >= 16 && anoidade < 19 && genero == 'Homem'){

                img.setAttribute('src','img/5-adolescente-m-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img) 

            } else if (anoidade >= 19 && anoidade < 31 && genero == 'Homem'){

                img.setAttribute('src','img/6-adulto-m-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 31 && anoidade < 61 && genero == 'Homem'){

                img.setAttribute('src','img/7-home-experiente-m-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img) 

            } else if (anoidade >= 61 && genero == 'Homem'){

                img.setAttribute('src','img/8-idoso-m-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img) 

            } else if (anoidade >= 0 && anoidade < 3 && genero == 'Mulher') { //MULHER

                img.setAttribute('src','img/11-bebe-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 3 && anoidade < 6 && genero == 'Mulher'){

                img.setAttribute('src','img/12-crianca-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 6 && anoidade < 11 && genero == 'Mulher'){

                img.setAttribute('src','img/13-menina-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 11 && anoidade < 16 && genero == 'Mulher'){

                img.setAttribute('src','img/15-pre-adolescente-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 16 && anoidade < 19 && genero == 'Mulher'){
                
                img.setAttribute('src','img/16-adolescente-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 19 && anoidade < 31 && genero == 'Mulher'){

                img.setAttribute('src','img/17-adulta-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 31 && anoidade < 61 && genero == 'Mulher'){

                img.setAttribute('src','img/18-mulher-experiente-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>`
                res.appendChild(img)

            } else if (anoidade >= 61 && genero == 'Mulher'){

                img.setAttribute('src','img/18-idoso-f-200.png')
                res.innerHTML = `Você é um bebê com ${qtdanos.toFixed(1)} anos de idade, ao total ${qtdmeses.toFixed(0)} meses, que são ${diastotal} dias ou ${horas} horas de vida. <br>` 
                res.appendChild(img) 
            }

                    
    }
}