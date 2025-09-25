const menuItems = [{
    id: 1,
    name: 'Hamburguesa Clásica',
    price: 25000,
    category: 'hamburguesas',
    popular: true,
    image: 'https://via.placeholder.com/400x300.png?text=Burger+1'
},
{
    id: 2,
    name: 'Alitas BBQ (8 pz)',
    price: 32000,
    category: 'alitas',
    popular: true,
    image: 'https://via.placeholder.com/400x300.png?text=Alitas+BBQ'
},
{
    id: 3,
    name: 'Papas a la francesa',
    price: 8000,
    category: 'papas',
    popular: false,
    image: 'https://via.placeholder.com/400x300.png?text=Papas+Fritas'
},
{
    id: 4,
    name: 'Mojito de Lulo',
    price: 18000,
    category: 'cocteles',
    popular: false,
    image: 'https://via.placeholder.com/400x300.png?text=Mojito+Lulo'
},
{
    id: 5,
    name: 'Cerveza Club Colombia',
    price: 7000,
    category: 'cervezas',
    popular: false,
    image: 'https://via.placeholder.com/400x300.png?text=Cerveza'
},
{
    id: 6,
    name: 'Jugo de Maracuyá',
    price: 6000,
    category: 'jugos',
    popular: false,
    image: 'https://via.placeholder.com/400x300.png?text=Jugo'
},
{
    id: 7,
    name: 'Mojito de mango',
    price: 6000,
    category: 'cocteles',
    popular: true,
    image: '../img/LogoPrincipal.jpg'
}
];

const menuGrid = document.querySelector('.menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const orderItemsContainer = document.querySelector('.order-items');
const totalPriceElement = document.getElementById('total-price');
const orderBox = document.querySelector('.order-box');

let order = [];
let total = 0;

function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}

function renderMenuItems(items) {
    menuGrid.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.setAttribute('data-id', item.id);

        itemDiv.innerHTML = `
            <div class="item-image-container">
                <img src="${item.image}" alt="${item.name}">
                ${item.popular ? '<span class="popular-tag">Popular</span>' : ''}
            </div>
            <div class="item-info">
                <h4>${item.name}</h4>
                <p class="item-price">${formatPrice(item.price)}</p>
            </div>
        `;
        menuGrid.appendChild(itemDiv);
    });
}

function filterItems(category) {
    const filteredItems = category === 'todos' ? menuItems : menuItems.filter(item => item.category === category);
    renderMenuItems(filteredItems);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterItems(btn.getAttribute('data-category'));
    });
});

menuGrid.addEventListener('click', (e) => {
    const itemCard = e.target.closest('.menu-item');
    if (itemCard) {
        const itemId = parseInt(itemCard.getAttribute('data-id'));
        const itemToAdd = menuItems.find(item => item.id === itemId);

        if (itemToAdd) {
            order.push(itemToAdd);
            updateOrderSummary();
            showAddedNotification(itemToAdd.name);
        }
    }
});

function showAddedNotification(itemName) {
    // Crear notificación temporal
    const notification = document.createElement('div');
    notification.className = 'added-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${itemName} agregado al pedido</span>
    `;

    // Agregar estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remover después de 2 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

function updateOrderSummary() {
    orderItemsContainer.innerHTML = '';
    total = 0;

    if (order.length === 0) {
        orderItemsContainer.innerHTML = '<p class="empty-order">Tu pedido está vacío</p>';
        totalPriceElement.textContent = formatPrice(0);
        updateSendButton();
        return;
    }

    order.forEach((item, index) => {
        const orderItemDiv = document.createElement('div');
        orderItemDiv.classList.add('order-item');
        orderItemDiv.setAttribute('data-index', index);
        orderItemDiv.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">${formatPrice(item.price)}</span>
            <button class="remove-item-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
        `;
        orderItemsContainer.appendChild(orderItemDiv);
        total += item.price;
    });

    totalPriceElement.textContent = formatPrice(total);
    updateSendButton();
}

function updateSendButton() {
    const sendOrderBtn = document.getElementById('send-order-btn');
    if (sendOrderBtn) {
        if (order.length === 0) {
            sendOrderBtn.disabled = true;
            sendOrderBtn.style.opacity = '0.5';
            sendOrderBtn.style.cursor = 'not-allowed';
        } else {
            sendOrderBtn.disabled = false;
            sendOrderBtn.style.opacity = '1';
            sendOrderBtn.style.cursor = 'pointer';
        }
    }
}

orderItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item-btn') || e.target.closest('.remove-item-btn')) {
        const btn = e.target.closest('.remove-item-btn');
        const itemIndex = parseInt(btn.getAttribute('data-index'));

        order.splice(itemIndex, 1);
        updateOrderSummary();
    }
});

// Función para generar el mensaje de WhatsApp
function generateWhatsAppMessage() {
    if (order.length === 0) {
        alert('Por favor, agrega al menos un producto a tu pedido.');
        return;
    }

    let message = '🍔 *PEDIDO SABOR URBANO* 🍔\n\n';
    message += '📋 *Detalles del pedido:*\n';

    // Agrupar items por nombre para mostrar cantidades
    const groupedOrder = {};
    order.forEach(item => {
        if (groupedOrder[item.name]) {
            groupedOrder[item.name].quantity += 1;
            groupedOrder[item.name].totalPrice += item.price;
        } else {
            groupedOrder[item.name] = {
                quantity: 1,
                price: item.price,
                totalPrice: item.price
            };
        }
    });

    // Generar lista de productos
    Object.keys(groupedOrder).forEach(itemName => {
        const item = groupedOrder[itemName];
        message += `• ${item.quantity}x ${itemName}\n`;
        message += `  ${formatPrice(item.price)} c/u = ${formatPrice(item.totalPrice)}\n\n`;
    });

    message += `💰 *TOTAL: ${formatPrice(total)}*\n\n`;
    message += '📍 *Dirección de entrega:* _Por favor proporcionar_\n';
    message += '📞 *Teléfono de contacto:* _Por favor proporcionar_\n\n';
    message += '¡Gracias por elegir Sabor Urbano! 🙌';

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Usar el número de WhatsApp que ya está en el HTML
    const phoneNumber = '573187332952';

    // Generar URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
}

// Función para enviar pedido
function sendOrder() {
    generateWhatsAppMessage();
}

// Event listener para el botón de enviar pedido
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems(menuItems);

    // Agregar event listener al botón de enviar pedido si existe
    const sendOrderBtn = document.getElementById('send-order-btn');
    if (sendOrderBtn) {
        sendOrderBtn.addEventListener('click', sendOrder);
    }
});