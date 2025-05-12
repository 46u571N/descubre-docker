// Script para añadir el año actual al footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Podrías añadir más interactividad aquí en el futuro
    // Ejemplo:
    // const codeBlocks = document.querySelectorAll('pre code');
    // codeBlocks.forEach(block => {
    //     // Añadir botón de copiar, etc.
    // });

    console.log("Página 'Descubre Docker' cargada y lista.");
});
