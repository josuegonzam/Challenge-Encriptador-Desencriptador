
        // Selecciona los elementos del DOM
        const inputText = document.getElementById('inputText');
        const encryptButton = document.getElementById('encryptButton');
        const decryptButton = document.getElementById('decryptButton');
        const output = document.getElementById('output');
        const copyButton = document.getElementById('copyButton');

        // Función para encriptar el texto
        function encryptText(text) {
            let encryptedText = text;
            encryptedText = encryptedText.replace(/e/g, 'enter');
            encryptedText = encryptedText.replace(/i/g, 'imes');
            encryptedText = encryptedText.replace(/a/g, 'ai');
            encryptedText = encryptedText.replace(/o/g, 'ober');
            encryptedText = encryptedText.replace(/u/g, 'ufat');
            return encryptedText;
        }

        // Función para desencriptar el texto
        function decryptText(text) {
            let decryptedText = text;
            decryptedText = decryptedText.replace(/enter/g, 'e');
            decryptedText = decryptedText.replace(/imes/g, 'i');
            decryptedText = decryptedText.replace(/ai/g, 'a');
            decryptedText = decryptedText.replace(/ober/g, 'o');
            decryptedText = decryptedText.replace(/ufat/g, 'u');
            return decryptedText;
        }

        // Evento de click para encriptar
        encryptButton.addEventListener('click', function() {
            const originalText = inputText.value;
            const encryptedText = encryptText(originalText);
            output.textContent = encryptedText;
        });

        // Evento de click para desencriptar
        decryptButton.addEventListener('click', function() {
            const encryptedText = inputText.value;
            const decryptedText = decryptText(encryptedText);
            output.textContent = decryptedText;
        });

        // Evento de click para copiar el texto al portapapeles
copyButton.addEventListener('click', function() {
    const textToCopy = output.textContent;
    
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                alert('Error al copiar el texto: ', err);
            });
    } else {
        alert('No hay texto para copiar');
    }
});
    