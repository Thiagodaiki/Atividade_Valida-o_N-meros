// Função chamada quando o botão é clicado
function validarNumero() {
    // Pega o valor digitado no input com id "numero"
    let numero = document.getElementById('numero').value;
    // Pega o elemento <p> onde a mensagem será exibida
    let resultado = document.getElementById('resultado');
    // Verifica se o campo está vazio
    if (numero == "") {
        // Define o texto da mensagem
        resultado.textContent = "Nenhum numero encontrado, por favor insira um número";
        // Define a cor da mensagem
        resultado.style.color = "red";
    }
    else {
        // Converte o valor digitado (string) para número inteiro
        numero = parseInt(numero);
        // Verifica se o número é maior que 10
        if (numero > 10) {
            resultado.textContent = "O número é maior que 10.";
            resultado.style.color = "green";
        }
        else {
            // Se não for maior que 10, verifica se é maior que 5
            if (numero > 5) {
                resultado.textContent = "O número é maior que 5 e menor ou igual a 10.";
                resultado.style.color = "orange";
            }
            else {
                // Caso seja 5 ou menor
                resultado.textContent = "O número é 5 ou menor.";
                resultado.style.color = "blue";
            }
        }
    }
}