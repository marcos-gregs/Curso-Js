//var ambiente.
let btnUm = document.getElementById('btn-um')
let btnDois = document.getElementById('btn-dois')
let btnTres = document.getElementById('btn-tres')
let texto = document.getElementById('msg')

//Funções

function click01(){
    let option= document.createElement('option')
    option.text =`Bom Dia`
    texto.appendChild(option)
}
function click02(){
    let option= document.createElement('option')
    option.text =`Boa tarte`
    texto.appendChild(option)
}
function click03(){
    let option= document.createElement('option')
    option.text =`Bom Noite`
    texto.appendChild(option)
}
