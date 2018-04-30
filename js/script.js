/* let responses = confirm("Deseja Excluir?")

console.log(responses)
*/

const a=10
const b=33

function somar(a, b ){

    resultado = `o resultado de ${a} mais ${b} é igual a, ${a + b}`

    return resultado

}

// alert(somar(3, 2))

document.querySelector("#calcular").addEventListener("click", function(){
    let x = document.querySelector("#valorA").value
    let y = document.querySelector("#valorB").value
    if(x.length > 0 && y.length > 0){
    alert(somar(parseInt(x),parseInt(y)))
    }else {
        alert("Digite os numeros")
    }
})