//Varivel de Ambiente
let texto = document.getElementById('txinfo')
let item = document.createElement('option')
//fuction
function comecar(){
    let nome = window.prompt('Digite seu nome')
    let produto = window.prompt('Digite o produto desejado')
    let valorProd = Number(parseInt(window.prompt("Digite o Valor do produto")))
    let valorPago = Number(parseInt(window.prompt('Digite o valor do pagemento feito')))
    let conta = Number(valorPago-valorProd)
    if(valorPago< valorProd){
        alert('Digite o valor necessario')        
    }else{
                      item.text = `O senhor ${nome} efetuo a compra do ${produto} por R$${valorProd}, o valor da compra foi de R$${valorPago}, e o troco de R$${conta}`
        texto.appendChild(item)
    }
    
    
}