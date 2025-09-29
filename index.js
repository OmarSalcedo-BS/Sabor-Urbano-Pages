document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Fade in inicial
    setTimeout(() => {
        body.style.opacity = '1';
    }, 30);

    // Función simplificada para transiciones
    function handlePageTransition(e, href) {
        // Solo aplicar transición a enlaces internos válidos
        if (href &&
            href !== '#' &&
            !href.startsWith('http') &&
            !href.startsWith('mailto') &&
            !href.startsWith('tel') &&
            !href.startsWith('wa.me') &&
            (href.includes('.html') || href === './' || href === '../')) {

            e.preventDefault();

            body.style.opacity = '0';

            setTimeout(() => {
                window.location.href = href;
            }, 100);
        }
    }

    // Aplicar solo a enlaces de navegación específicos
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');

        if (link &&
            (link.closest('nav') || link.classList.contains('principal-btn')) &&
            !link.classList.contains('whatsapp-btn') &&
            !link.classList.contains('instagram-link') &&
            !link.hasAttribute('target')) {

            const href = link.getAttribute('href');
            handlePageTransition(e, href);
        }
    });
});