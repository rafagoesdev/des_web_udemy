var idade = prompt('Qual a sua idade?')

if (idade >= 0 && idade < 15){
    document.write('<h1>Criança</h1>')
}
else if (idade >= 15 && idade < 30){
   document.write('<h1>Jovem</h1>')
}
else if (idade >= 30 && idade < 60){
    document.write('<h1>Adulto</h1>')
 }
 else if (idade >= 60){
    document.write('<h1>Idoso</h1>')
 }
 else{
     document.write('Digite um número válido')
 }