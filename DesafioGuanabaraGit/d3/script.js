//Var de ambiente.
let texto = document.getElementById('txinfo')
//fuction
function comecar(){
var num = Number(window.prompt('Digite um Numero'))
var pos = num + 1
var antes = num -1
let item = document.createElement('option')
item.text = ` ${antes}<- ${num}- > ${pos}`
texto.appendChild(item)
}