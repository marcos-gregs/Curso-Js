function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('digite o numero certo')
    
    }else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c =1; c <=10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)    

        } 
        /*let n = Number(num.value)
     let c = 1 
     tab.innerHTML = ''
     while (c <=10 ){
     let item = document.createElement('option')
         item.text = `${n} x ${c} = ${c*n}`
         tab.appendChild(item)
         c++ 
    }*/
    }
}