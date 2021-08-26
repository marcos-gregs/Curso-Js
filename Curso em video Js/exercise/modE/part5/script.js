function contar(){
    let expoente = document.getElementById('valorUm')
    var resultado = document.getElementsById('resposta')
    if (expoente.value.length == 0){
        alert('não é possivel')
    } else {
    var valorReal = Number(expoente.value)
    for(var c = 1; c <= 10; c ++) {
    //CreateElement é utilizado para criar elementos html via java
    //no caso <option value =>''</option>
    let tabuada = document.createElement('option')
    tabuada.text = `${valorReal} x ${c} = ${valorReal*c}`
    //adicionada o elemento filho : tabuada 
    resultado.appendChild(tabuada)
    }
    }

}