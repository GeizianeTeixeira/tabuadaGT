function calcular() {
var num = document.getElementById('numero')
var res = document.getElementById('res')
var n = Number(num.value)

if(num.value.length == 0){
 window.alert('Por favor, preencha o campo abaixo!')
}

else{
    res.innerHTML=''
for(var c = 1; c <= 10; c++){
let item = document.createElement('option') //Criei uma variavel e atribuo um option dentro do select através do JS;
item.text = `${n} x ${c}  = ${n*c}` // String da tabuada aparecerá na variável "item";
res.appendChild(item)    // Iseri um elemento ("item") dentro da variável "res";
}
}
}