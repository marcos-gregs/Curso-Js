let num = [4,5,8,9,2,6]
//.Maneira mais simplificada e atualizada.
for (let pos in num){
    console.log (`A posição${pos} tem o valor${num[pos]}`)
}
/*.Vetor

let num = []
console.log (num)
[]
undefined
num = [5,8,4]
(3) [5, 8, 4]
num[3] = 6
6
(4) [5, 8, 6,4 ]
num.indexOf(8)|mostra se tem o valor e aonde tem.
1
num.indexOf(3)|como o valor pedido n existe na array,ele colocou -1
-1
num.push(7)|adiciona um valor no vetor.
5
num.length |.length:mostra o tamanho da array.
5
num.sort() |.sort():organiza a array.
(5) [4, 5,6 , 7, 8,] 
*/
/*.Errado
console.log (num[0])
console.log (num[1])
console.log (num[2])
console.log (num[3])
console.log (num[4])
*/
/*.Certo
Porem tem maneiras mais rapidas
for(let pos= 0; pos<num.length;pos++){
    console.log (`A posição${pos} tem o valor${num[pos]}`)
*/