/**
 * Lógica para ocultar/mostrar el menú de navegación 
 * al hacer scroll hacia abajo/arriba.
 */

// 1. Obtener el elemento de navegación (el que contiene los enlaces)
const nav = document.getElementById('main-nav');

// 2. Definir una variable para guardar la posición de scroll anterior
let lastScrollY = 0; 
// lastScrollY = window.scrollY; (usamos 0 al inicio)


// 3. Añadir un 'EventListener' al objeto window que se activa en cada scroll
window.addEventListener('scroll', () => {
    // Variable para la posición actual del scroll
    const currentScrollY = window.scrollY;

    // Condición 1: Si el scroll actual es mayor que el anterior (Scroll Hacia Abajo)
    // También se puede poner una pequeña condición para evitar el parpadeo
    // if (currentScrollY > lastScrollY && currentScrollY > 100) { 
    if (currentScrollY > lastScrollY) {
        
        // Ocultar el menú añadiendo la clase CSS
        nav.classList.add('nav-hidden');
    } 
    
    // Condición 2: Si el scroll actual es menor que el anterior (Scroll Hacia Arriba)
    else {
        // Mostrar el menú quitando la clase CSS
        nav.classList.remove('nav-hidden');
    }
    
    // 4. Actualizar la variable de la posición anterior para el siguiente evento
    lastScrollY = currentScrollY;
});