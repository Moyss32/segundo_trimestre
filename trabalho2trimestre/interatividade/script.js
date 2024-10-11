let indiceSlide = 1;
let slideAutomático;
let estáPausado = false;

mostrarSlides(indiceSlide);
iniciarSlideAutomático();

function mudarSlides(n) {
    mostrarSlides(indiceSlide += n);
}

function slideAtual(n) {
    mostrarSlides(indiceSlide = n);
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let pontos = document.getElementsByClassName("ponto");
    if (n > slides.length) { indiceSlide = 1; }
    if (n < 1) { indiceSlide = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" ativo", "");
    }
    slides[indiceSlide - 1].style.display = "block";
    pontos[indiceSlide - 1].className += " ativo";
}

function iniciarSlideAutomático() {
    slideAutomático = setInterval(function() {
        if (!estáPausado) {
            mudarSlides(1);
        }
    }, 7000); // 7s
}

function alternarConteudo(indice) {
    let conteudo = document.getElementsByClassName("conteudo-adicional")[indice];
    let visível = conteudo.style.display === "block";
    
    if (visível) {
        conteudo.style.display = "none";
        estáPausado = false; 
    } else {
        conteudo.style.display = "block";
        estáPausado = true; 
    }
}
// 2º carrossel de informações de jogos
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
 
    setTimeout(showSlides, 7000); // 7s
}

// sei la

const pilares = document.querySelectorAll('.pilar');

pilares.forEach(pilar => {
    pilar.addEventListener('click', () => {
        // Remove a classe expanded de todos os pilares
        pilares.forEach(p => p.classList.remove('expanded'));
        
        // Adiciona a classe expanded ao pilar clicado
        pilar.classList.add('expanded');
        
        // Esconde os outros pilares
        pilares.forEach(p => {
            if (p !== pilar) {
                p.classList.add('hidden');
            }
        });
    });
});