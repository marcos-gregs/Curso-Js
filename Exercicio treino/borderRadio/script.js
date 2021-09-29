
function letGo(){
    let radiu = document.getElementById('radius')
    let valor = Number(radiu.value)
    let area = document.getElementById('object')
    area.style.borderRadius =`${valor}px`
    area.innerHTML=(`border-radius:${valor}px;`)
    if (area.style.borderRadius >0 ){
     area.style.border = '2px solid red'}
    return

}