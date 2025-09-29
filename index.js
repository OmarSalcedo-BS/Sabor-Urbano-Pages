document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Fade in inicial más suave y que no interfiera con responsive
    body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        body.style.opacity = '1';
    }, 50);

    // Función de transición mejorada que no interfiere con responsive
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

            // Crear overlay en lugar de modificar el body
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: white;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.2s ease;
                pointer-events: none;
            `;

            document.body.appendChild(overlay);

            // Fade in del overlay
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);

            // Navegar después del fade
            setTimeout(() => {
                window.location.href = href;
            }, 150);
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

    // Limpiar cualquier overlay residual al cargar
    const existingOverlays = document.querySelectorAll('[style*="z-index: 9999"]');
    existingOverlays.forEach(overlay => {
        if (overlay.style.position === 'fixed') {
            overlay.remove();
        }
    });
});