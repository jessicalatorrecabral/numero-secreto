const elementoPalpite = document.getElementById("palpite")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener("result",onSpeak)

function onSpeak(e) {
    palpite = e.results[0][0].transcript

    mostraPalpite(palpite)
    validaPaplpite(palpite)
}

function mostraPalpite(palpite) {
    elementoPalpite.innerHTML = `
    <div>Você disse</div>
    <span class="box">${palpite}</span>
    `
}

recognition.addEventListener("end", () => recognition.start())
