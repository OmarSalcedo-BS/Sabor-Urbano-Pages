document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
        (async () => {
            try {
                let mod = null;
                try {
                    mod = await import('/src/utils/alerta.js');
                } catch (err) {
                    try {
                        mod = await import('./src/utils/alerta.js');
                    } catch (err2) {
                        mod = null;
                    }
                }

                if (mod && typeof mod.alertaGeneral === 'function') {
                   
                    mod.alertaGeneral({ timer: 1000 });
                } else if (typeof window !== 'undefined' && typeof window.alertaGeneral === 'function') {
        
                    window.alertaGeneral({ timer:1000 });
                }
            } catch (e) {
             
                console.warn('No se pudo cargar alertaGeneral:', e);
            } finally {
               
                setTimeout(() => {
                    body.style.opacity = '1';
                }, 100);
            }
        })();
        
});