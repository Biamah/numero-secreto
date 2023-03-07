const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// mudando o padrão do reconhecimento para pt br
recognition.lang = 'pt-Br';

// começando o reconhecimento de voz
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    const chute = e.results[0][0].transcript;
    
    exibeChuteNaTela(chute);

    verificaChute(chute);
}

function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());