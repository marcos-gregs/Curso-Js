var numeInt = window.document.getElementById('numeroInt')
var resultado = window.document.getElementById('resultado')
function clicou(){
    if (numeInt > 0 && numeInt < 10){
        resultado.innerHmtl = `O Valor é ${numeInt}`
    }else if (numeInt > 10 && numeInt <100){
            var contaUm =Number(parseInt( numeInt%10))
            var contaDois =Number(parseInt(numeInt/10))
            var contaTres = contaUm +contaDois
            resultado.innerHmtl =`O valor é ${numeInt}`

        }
    }
   
        
