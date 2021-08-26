//Parando o envio.
let B7Validator = {
    handleSubmit:(event)=>{
    event.preventDefault();
    //previnindo o comportamento patrão,no caso do form parando o envio.
   
let send = true;
//Pegando os campos do formulario:input 
let inputs = form.querySelectorAll('input')
//limpar os erros
B7Validator.clearErros()

for(let i=0;i<inputs.length;i++){
        let input = inputs[i]
        let check =B7Validator.checkInput(input)
        if(check !== true){
            send = false
            B7Validator.showError(input,check);
        }
     }
     if(send){
     form.submit()
     }
    },//Verifica se tem regra
        checkInput:(input) =>{
        //
        let rules = input.getAttribute('data-rules')
        if(rules !== null ){
            //Separa as regras
            rules = rules.split('|');
            //Fazendo uma repetição no input,que no caso é para verificar as regras.
            for(let k in rules){
                let rDetail = rules[k].split('=')
                switch(rDetail[0]){
                    case 'required':
                        if (input.value ==''){
                            return 'Campo Obrigario'
                        }
                        break;
                    case 'min':
                        if(input.value.length < rDetail[1]){
                            return 'campos tem que ter pelo menos '+ rDetail[1] +'caracter'
                        }

                    break;
                    case 'email':
                        if(input.value != '0'){
                            // O let 'regex' ultiza, Expressão regular que seria
                            //eu criar um padrão de texto e verificar se o patr-
                            //ão esta sendo respeitado,no caso retirei essa expressão da net.
                            let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                            //Após declarara o padrão,iremos fazer o processo de
                            //verificar se é um email.
                            if(!regex.test(input.value.toLowerCase()))// **Lembrando que ! é diferente.
                             return 'E-mail digitado não é valido';
                             
                        }

                    break;
                    }
                }
            }
            return true;
        },
        //exibindo erro.
        showError:(input,error)=>{
            input.style.borderColor =' #FF0000';
        //Criando elemento texto do erro
            let errorElement = document.createElement('div');
            errorElement.classList.add('error');
            errorElement.innerHTML= error;
            input.parentElement.insertBefore(errorElement,input.ElementSibling);
        
    },
    clearErros:()=>{
        let inputs = form.querySelectorAll('input');
        for(let i=0; i< inputs.length; i++){
            inputs[i].style= ''
        }

        let erroElements = document.querySelectorAll('.error');
        for (let i=0; i<erroElements.length; i++){
            erroElements[i].remove();
        }
    }
}

let form = document.querySelector('#b7validator')
form.addEventListener('submit',B7Validator.handleSubmit)