function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//ano atual
    var anoNasc =document.getElementsByName('txtano')
    var result = document.querySelector('div.res')
    if (anoNasc.value  == 0 || anoNasc.value > ano){
        alert("Algo esta errado,engraçadinho tente de novo")
    }else{
        var buttonSex = document.getElementsByName('redsex')
        var idade = Number(ano - anoNasc.value)
        var genero = ''
        var img = document.createElement('img')//criando um elemento no hmtl,via jvs
        img.setAttribute('id', 'foto')//atribuindo um id de nome foto,do elemento img
        if (buttonSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <15){
                //criança
                img.setAttribute('src', 'crianca.png')
            }else if (idade <19){
                //jovem
                img.setAttribute('src', 'jovemb.png')
            }else if(idade < 66 ){
               //adulto
                img.setAttribute('src', 'adulto.png')
            }else {
                //velho
                img.setAttribute('src','velho.png')
            }

        }else if (buttonSex[1].checked){
            genero= 'Mulher'
            if(idade >= 0 && idade <15){
                //criança
                img.setAttribute('src','menina.png')
            }else if (idade <19){
                //jovem
                img.setAttribute('src', 'jovemG.png')
            }else if(idade < 66 ){
                //adulto
                img.setAttribute('src', 'adulta.png')
            }else{
               //velho
                img.setAttribute('src', 'velha.png')
            }
        }
            result.style.textAlign = 'center'
            result.innerText =(`Detectamos um/a ${genero} de ${idade}`)
            result.appendChild(img)   
    }
  } 
