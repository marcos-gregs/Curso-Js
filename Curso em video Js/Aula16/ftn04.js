//.Modo recursivo(recursividade)
function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n* fatorial(n-1)
    }
}
/*.Fatorial
Achando o numero fatorial de 5. 

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

Sempre que o fator é 1,o numero resultado do fator é o msm.Ou
seja:
1! = 1

A formula usada para descobrir o falor do fator seria:
 n! = n x(n-1)!

*/


/*.Modo Normal
function fatorial(n){
    let fat = 1 
    for(let c = n;c>1;c -- );{
    fat*=c
    }
    return fat
}
*/
