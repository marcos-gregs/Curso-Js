function carregando(){
var msg = window.document.getElementById('mensagem')
var periodo = window.document.getElementById('foto')
var data = new Date() // 'New Date - pega a data atual'
var horas= data.getHours()// pega o horario
msg.innerHTML = `Agora são ${horas}.`
if (horas >=0 && horas < 12){
    periodo.src ="img/manha.png"
    document.body.style.background = "febd5b"
    msg.innerHTML = `Agora são ${horas} da manhã.`
}else if (horas >12 && horas < 18){
    periodo.src = "img/tarde.png"
    document.body.style.background="fa9439"
    msg.innerHTML = `Agora são ${horas} da tarde.`
}else{
    periodo.src ="img/noite.png"
    document.body.style.background="8c4f57"
    msg.innerHTML = `Agora são ${horas} da noite.`
}

}