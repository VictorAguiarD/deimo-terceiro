function calcularDecimoTerceiro() {
    const salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um salário válido.");
        return;
    }

    const primeiraParcela = salario / 2;
    const segundaParcela = primeiraParcela - (salario * 0.08); // Segunda parcela subtrai o INSS
    const totalDecimo = primeiraParcela + segundaParcela;

    document.getElementById("primeira-parcela").textContent = primeiraParcela.toFixed(2);
    document.getElementById("segunda-parcela").textContent = segundaParcela.toFixed(2);
    document.getElementById("total-decimo").textContent = totalDecimo.toFixed(2);

    document.getElementById("result-container").style.display = "block";
}
