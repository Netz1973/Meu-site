document.getElementById('mensagemBtn').addEventListener('click', function() {
    const mensagemDiv = document.getElementById('mensagem');
    
    if (mensagemDiv.style.display === 'none' || mensagemDiv.style.display === '') {
        mensagemDiv.textContent = 'Seja bem-vindo à minha página! Lembre-se: "O sucesso é a soma de pequenos esforços repetidos dia após dia." - Robert Collier';
        mensagemDiv.style.display = 'block';
    } else {
        mensagemDiv.style.display = 'none';
    }
});