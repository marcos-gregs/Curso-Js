//Var de ambiente.
let texto = document.getElementById('txinfo')
//fuction
function comecar(){
var nome = window.prompt('Digite seu nome.')
var idade =window.prompt('Digite sua idade')
let item = document.createElement('option')
item.text = `Prazer ${nome} então você tem ${idade} anos`
texto.appendChild(item)
}
