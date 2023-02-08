function validaPaplpite(palpite) {
    const numero = +palpite

    if(palpiteInvalido(numero)) {
        console.log("invalido")
        elementoPalpite.innerHTML += '<div>Valor inválido</div>'
        return

    }

    if(palpiteMaiorOuMenor(numero)) {
        elementoPalpite.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoPalpite.innerHTML += `
        <div>O número secreto é menor ⬇</div>
        `
    } else {
        elementoPalpite.innerHTML += `
        <div>O número secreto é maior ⬆</div>
        `
    }

    function palpiteInvalido(numero) {
        return Number.isNaN(numero)
    }

    function palpiteMaiorOuMenor (numero) {
        return numero > maiorValor || numero < menorValor
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})