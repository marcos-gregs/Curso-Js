
//função vetor 
function tempoCont(){
   var comeco = window.document.querySelector('#inicio')
var final = window.document.querySelector('#fim')
var cont = window.document.querySelector('#passo')
var resultado = window.document.querySelector('#result')
//Restrições:   
if(comeco.value == 0 ||cont.value == 0 ||final.value == 0 ||final.value == comeco.value|| final.value == cont.value){
      resultado.innerHTML ='Não é possivel \u{1F914}	'
   }else{
   resultado.innerHTML = `Contando:`
   let valorUm = Number(comeco.value)
   let valorDois =Number(final.value)
   let tempo = Number(cont.value)
//Evitando que T seja 0
if(tempo == 0){
   alert('o passo será considerado 1')
   tempo = 1
}
   if(valorUm < valorDois){
//Contagem crescente:
      for(var c =valorUm; c <= valorDois; c += tempo){   
    resultado.innerHTML += ` ${c} \u{1F9D0} `
   }

   }else{
//Contagem Decrecente:
      for(var c =valorUm; c >= valorDois; c -= tempo){   
         resultado.innerHTML += ` ${c} \u{1F613} `
      }
   }
  resultado.innerHTML += `\u{1F60E}` 
} 
}     
   
