const car1 = prompt ("Insira o primeiro veículo:")
const veloc1 = parseFloat (prompt ("Insira a velocidade do primeiro veículo:"))
const car2 = prompt ("Insira o segundo veículo:")
const veloc2 = parseFloat (prompt ("Insira a velocidade do segundo veículo:"))

if (veloc1 > veloc2) {
    alert (car1 + " é mais rápido do que o " + car2 )} 
else if (veloc2 > veloc1){
    alert (car2+ " é mais rápido do que o " + car1)}
else {
    alert (car1 + " e " + car2 + " possuem velocidades iguais.")}