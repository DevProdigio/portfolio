const text = "Aqui você vai poder conhecer mais sobre mim e sobre meu trabalho"
const typewriterText = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Velocidade da digitação
    }
}

typeWriter(); // Inicia a animação


// script.js
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about");

    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Adiciona um offset de 100px para garantir que a seção seja detectada antes de chegar ao topo
        if (rect.top <= windowHeight - 100 && rect.bottom >= 0) {
            aboutSection.classList.add("visible");
            window.removeEventListener("scroll", checkVisibility); // Remove o listener após a animação
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica a visibilidade ao carregar a página
});

document.addEventListener("DOMContentLoaded", function () {
    const titleHabilidades = document.querySelector(".title-habilidades");
    const habilidadesSection = document.querySelector(".habilidades-section");

    function checkVisibility() {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (titleHabilidades) {
            const rectTitle = titleHabilidades.getBoundingClientRect();
            if (rectTitle.top <= windowHeight - 100 && rectTitle.bottom >= 0) {
                titleHabilidades.classList.add("visible");
            }
        }

        if (habilidadesSection) {
            const rectHabilidades = habilidadesSection.getBoundingClientRect();
            if (rectHabilidades.top <= windowHeight - 100 && rectHabilidades.bottom >= 0) {
                habilidadesSection.classList.add("visible");
            }
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica a visibilidade ao carregar a página
});


