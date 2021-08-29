//variaveis de ambientes
let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []
//Criação de funções:
function itsNumero(n){
 if(Number(n) >=1 && Number(n) <=100){
   return true
  }else{
   return false
  }   
}

function inlista(n , l) {
 if(l.indexOf(Number(n))!= -1){
    return true
    }else{
    return false
   }  
}


function adicionar(){
    if(itsNumero(num.value) && !inlista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        list.appendChild(item)
    }else{
        window.alert('Valor invalido')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('Digite um valor')
    }else{
        let tot = valores.length
        let soma = 0
        let media =0
        /*.Fazendo analise do maior e menor
        1 as variveis 
        */
       let maior = valores[0]//como nos começamos com um numero, n existe um maior ou menor,ja que n tem com quem comparar
       let menor = valores[0]
       //Loop para ver qual é maior ou menos
       for(let pos in valores){
       //Utilizando o laço de percuso analisamo,e armazenamos os valores entre maior e menor   
       soma +=valores[pos] 
       if(valores[pos]> maior){
               maior = valores[pos]
           }
           if(valores[pos]< menor){
               menor =valores{pos}
           }
       }
        media = soma/tot
        res.innerHTML += `<p>Ao todos temos o total de ${tot} numero cadastrado. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor falor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma do  valors é  ${soma}.</p>`
        res.innerHTML += `<p>A média do  valors são ${media}.</p>`



    }
}