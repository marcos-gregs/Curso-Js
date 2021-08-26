//controle de interface.
let seuVotoPara = document.querySelector('.leftUm span');
let cargo = document.querySelector('.leftDois span');
let descricao = document.querySelector(".leftQuatro");
let aviso = document.querySelector(".segundaLinha");
let lateral = document.querySelector(".right");
let numeros= document.querySelector(".leftTres");
//controle de ambiente.
let etapaAtual = 0;
let voto = "";
  
//fuctions da tela e vetorial.
function comecarEtapa(){
    let etapa =etapas[etapaAtual];
    let numeroHtml ="";
    for(let i=0;i< etapa.numeros;i++){
        
        if(i===0){
            numeroHtml += '<div class="primeiroNumero"></div>';
        }else{
          numeroHtml += '<div class="primeiroNumero></div>';
  
        }
      }
    
    seuVotoPara.style.display ='none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML='';
    aviso.style.display='none';
    lateral.innerHTML='';
    numeros.innerHTML= numeroHtml;
}

 function attInterface(){
     let etapa = etapas[etapaAtual];
     let candidato = etapa.candidato.filter((item)=>{
         if(item.voto===voto){
             return true;
        }else{
            return false;
        }
 }),

//Functions das teclas.
    function clicou(n){
    let number= document.querySelector('.primeiroNumero.pisca');
    if(number !== null){
        number.innerHTML = n;
        voto= `${number}${n}`;
        number.classList.remove('pisca');//removendo o efeito
        if(number.nextElementSibling !== null ){// condição para passar o efeito descobri se ja foi feita a votação
            number.nextElementSibling.classList.add('pisca');
        }else{
            attInterface();
        }
        } 
    }


      
 
    function branco(){

    }
    function confirma(){

    }
    function corrigi(){

    }



  comecarEtapa();
 }
