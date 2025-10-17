const menuItems = [
    // Hamburguesas
    {
        id: 1,
        name: 'Hamburguesa Sencilla',
        description: 'Pan, carne, lechuga, cebolla caramelizada, tomate y queso',
        price: 19000,
        category: 'hamburguesas',
        popular: true,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 2,
        name: 'Hamburguesa Especial',
        description: 'Pan, carne, lechuga, cebolla caramelizada, tomate, queso y tocineta',
        price: 15500,
        category: 'hamburguesas',
        popular: true,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 3,
        name: 'Hamburguesa Doble Carne',
        description: 'Pan, doble carne, lechuga, cebolla caramelizada, tomate, queso y tocineta',
        price: 18500,
        category: 'hamburguesas',
        popular: false,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 4,
        name: 'Hamburguesa Urbana/Doble',
        description: 'Pan, carne artesanal, lechuga, cebolla caramelizada, tomate, queso cheddar y tocineta',
        price: 31000,
        category: 'hamburguesas',
        popular: true,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 5,
        name: 'Hamburguesa Mix',
        description: 'Pan, chuleta de pollo, carne, lechuga, cebolla caramelizada, pepino caramelizado, tomate, doble queso y tocineta',
        price: 21500,
        category: 'hamburguesas',
        popular: false,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 6,
        name: 'Hamburguesa Desmechada',
        description: 'Pan, carne y pollo desmechado, lechuga, cebolla caramelizada, tomate, queso y tocineta',
        price: 19500,
        category: 'hamburguesas',
        popular: false,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 7,
        name: 'Hamburguesa Pollo',
        description: 'Pan, chuleta de pollo, lechuga, cebolla caramelizada, tomate, queso y tocineta',
        price: 19500,
        category: 'hamburguesas',
        popular: false,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 8,
        name: 'Hamburguesa Callejera',
        description: 'Pan, carne, ensalada, tocineta, ripio de papa',
        price: 15500,
        category: 'hamburguesas',
        popular: false,
        image: '../../../public/ProductosMenu/Hamburguesa.jpg'
    },
    {
        id: 9,
        name: 'Patacón',
        description: 'Hogao, pollo, carne, huevo y guacamole',
        price: 0, // Precio no visible en la imagen
        category: 'especiales',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },

    // Perros
    {
        id: 10,
        name: 'Perrito',
        description: 'Armalo como quieras en nuestra barra',
        price: 6500,
        category: 'perros',
        popular: false,
        image: '../../../public/ProductosMenu/Perro.jpg'
    },
    {
        id: 11,
        name: 'Perro Grande',
        description: 'Pan, salchicha, queso, tocineta, adiciones de la barra',
        price: 17000,
        category: 'perros',
        popular: false,
        image: '../../../public/ProductosMenu/Perro.jpg'
    },
    {
        id: 12,
        name: 'Perro Americano',
        description: 'Pan, salchicha americana, queso derretido, tocineta, adiciones de la barra',
        price: 13000,
        category: 'perros',
        popular: true,
        image: '../../../public/ProductosMenu/Perro.jpg'
    },

    // Carnes
    {
        id: 13,
        name: 'Res',
        description: 'Papas, arepa con queso, ensalada',
        price: 26000,
        category: 'carnes',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 14,
        name: 'Cerdo',
        description: 'Papas, arepa con queso, ensalada',
        price: 24000,
        category: 'carnes',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 15,
        name: 'Chuzo de pollo Grande',
        description: 'Papas, arepa con queso',
        price: 21000,
        category: 'carnes',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 16,
        name: 'Chuzo de pollo Mediano',
        description: 'Papas, arepa con queso',
        price: 0, // Precio no visible en la imagen
        category: 'carnes',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },

    // Salchipapas
    {
        id: 17,
        name: 'Salchipapa Sencilla',
        description: 'Papas, salchicha, huevo',
        price: 9000,
        category: 'salchipapas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 18,
        name: 'Salchipapa Especial',
        description: 'Papas, salchicha, huevo, queso',
        price: 13000,
        category: 'salchipapas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 19,
        name: 'Salchipapa Tocineta',
        description: 'Papas, tocineta, huevo',
        price: 11000,
        category: 'salchipapas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 20,
        name: 'Salchipapa Mixta',
        description: 'Papas, salchicha, carne y pollo desmechado huevo, queso',
        price: 21000,
        category: 'salchipapas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 21,
        name: 'Salchipapa Familiar',
        description: 'Papas, salchicha, carne, pollo, tocineta, ripio de papa, butifarra y queso',
        price: 35000,
        category: 'salchipapas',
        popular: true,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },

    // Picada
    {
        id: 22,
        name: 'Picada',
        description: 'Papas, salchicha, carne, pollo, tocineta, butifarra, queso, tomate y lechuga',
        price: 65000,
        category: 'picada',
        popular: true,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 23,
        name: 'Picada Especial',
        description: 'Papas, salchicha, carne hamburguesa, tocineta, butifarra',
        price: 43000,
        category: 'picada',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },

    // Alitas
    {
        id: 24,
        name: 'Combo Alitas x 6',
        description: 'Miel Mostaza, BBQ, BOQ Picante, Habanero, Tamarindo, Maracuyá, Uchuva',
        price: 19000,
        category: 'alitas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 25,
        name: 'Combo Alitas x 10',
        description: 'Miel Mostaza, BBQ, BOQ Picante, Habanero, Tamarindo, Maracuyá, Uchuva',
        price: 25000,
        category: 'alitas',
        popular: true,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 26,
        name: 'Combo Alitas x 12',
        description: 'Miel Mostaza, BBQ, BOQ Picante, Habanero, Tamarindo, Maracuyá, Uchuva',
        price: 29000,
        category: 'alitas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 27,
        name: 'Combo Alitas x 15',
        description: 'Miel Mostaza, BBQ, BOQ Picante, Habanero, Tamarindo, Maracuyá, Uchuva',
        price: 39000,
        category: 'alitas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },
    {
        id: 28,
        name: 'Combo Alitas x 30',
        description: 'Miel Mostaza, BBQ, BOQ Picante, Habanero, Tamarindo, Maracuyá, Uchuva',
        price: 72000,
        category: 'alitas',
        popular: false,
        image: '../../../public/ProductosMenu/AlitasConPapas.jpg'
    },

    // Adiciones
    {
        id: 29,
        name: 'Papas',
        price: 5000,
        category: 'adiciones',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 30,
        name: 'Huevos',
        price: 3000,
        category: 'adiciones',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 31,
        name: 'Carne',
        price: 6000,
        category: 'adiciones',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 32,
        name: 'Salchicha',
        price: 2000,
        category: 'adiciones',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 33,
        name: 'Tocineta',
        price: 3000,
        category: 'adiciones',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 34,
        name: 'Queso',
        price: 3000,
        category: 'adiciones',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },

    // Jugos Naturales
    {
        id: 35,
        name: 'Agua',
        price: 6000,
        category: 'jugos',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 36,
        name: 'Leche',
        price: 8000,
        category: 'jugos',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 37,
        name: 'Limonada Cerezada',
        price: 9000,
        category: 'jugos',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },
    {
        id: 38,
        name: 'Limonada Coco',
        price: 10000,
        category: 'jugos',
        popular: false,
        image: '../../../public/ProductosMenu/productoextra.jpg'
    },

    // Cervezas
    {
        id: 39,
        name: 'Aguila',
        price: 4000,
        category: 'cervezas',
        popular: false,
        image: '../../../public/ProductosMenu/Corona.png'
    },
    {
        id: 40,
        name: 'Pilsen',
        price: 4000,
        category: 'cervezas',
        popular: false,
        image: '../../../public/ProductosMenu/Corona.png'
    },
    {
        id: 41,
        name: 'Heineken',
        price: 4000,
        category: 'cervezas',
        popular: false,
        image: '../../../public/ProductosMenu/Corona.png'
    },
    {
        id: 42,
        name: 'Coronita',
        price: 4000,
        category: 'cervezas',
        popular: false,
        image: '../../../public/ProductosMenu/Corona.png'
    },
    {
        id: 43,
        name: 'Corona',
        price: 7500,
        category: 'cervezas',
        popular: true,
        image: '../../../public/ProductosMenu/Corona.png'
    },
    {
        id: 44,
        name: '3 Cordilleras',
        price: 6500,
        category: 'cervezas',
        popular: false,
        image: '../../../public/ProductosMenu/Corona.png'
    },
    {
        id: 45,
        name: 'Club Lata',
        price: 4500,
        category: 'cervezas',
        popular: false,
        image: '../../../public/ProductosMenu/Corona.png'
    },
    {
        id: 46,
        name: 'Amper Energizante',
        price: 4000,
        category: 'cervezas',
        popular: false,
        image: '../../../public/ProductosMenu/Corona.png'
    },

    // Cocteles
    {
        id: 47,
        name: 'Smirnof',
        price: 11000,
        category: 'cocteles',
        popular: false,
        image: '../../../public/ProductosMenu/Coctel.jpg'
    },
    {
        id: 48,
        name: 'Mojito',
        price: 11000,
        category: 'cocteles',
        popular: true,
        image: '../../../public/ProductosMenu/Coctel.jpg'
    },
    {
        id: 49,
        name: 'Mikes',
        price: 9500,
        category: 'cocteles',
        popular: false,
        image: '../../../public/ProductosMenu/Coctel3.jpg'
    },
    {
        id: 50,
        name: 'Curazado',
        price: 11000,
        category: 'cocteles',
        popular: false,
        image: '../../../public/ProductosMenu/Coctel.jpg'
    },
    {
        id: 51,
        name: 'Michelada Soda',
        price: 8500,
        category: 'cocteles',
        popular: false,
        image: '../../../public/ProductosMenu/Coctel.jpg'
    },
    {
        id: 52,
        name: 'Michelada Cerveza',
        price: 10000,
        category: 'cocteles',
        popular: false,
        image: '../../../public/ProductosMenu/Coctel.jpg'
    },
    {
        id: 53,
        name: 'JP Chanel',
        price: 12000,
        category: 'cocteles',
        popular: false,
        image: '../../../public/ProductosMenu/Coctel3.jpg'
    },
    {
        id: 54,
        name: 'Corona Envenenada',
        price: 11000,
        category: 'cocteles',
        popular: false,
        image: '../../../public/ProductosMenu/Coctel.jpg'
    },
    {
        id: 55,
        name: 'Michelada Fushion',
        price: 19000,
        category: 'cocteles',
        popular: true,
        image: '../../../public/ProductosMenu/Coctel3.jpg'
    }
];



const menuGrid = document.querySelector('.menu-grid');
const categoryCardsContainer = document.getElementById('category-cards');
const orderItemsContainer = document.querySelector('.order-items');
const totalPriceElement = document.getElementById('total-price');

let order = [];
let total = 0;
let cartToggleBtn = null;

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

        const customButton = false; 
        const description = item.description ? `<p class="item-description">${item.description}</p>` : '';
        const priceDisplay = item.price > 0 ? formatPrice(item.price) : 'Consultar precio';

        itemDiv.innerHTML = `
            <div class="item-image-container">
                <img src="${item.image}" alt="${item.name}">
                ${item.popular ? '<span class="popular-tag">Popular</span>' : ''}
            </div>
            <div class="item-info">
                <h4>${item.name}</h4>
                ${description}
                <p class="item-price">${priceDisplay}</p>
                
            </div>
        `;
        menuGrid.appendChild(itemDiv);
    });
}

function filterItems(category) {
    const filteredItems = category === 'todos' ? menuItems : menuItems.filter(item => item.category === category);
    renderMenuItems(filteredItems);
}

function renderCategoryCards() {
    // Obtener categorías únicas y contador
    const categories = {};
    menuItems.forEach(item => {
        if (!categories[item.category]) categories[item.category] = { count: 0 };
        categories[item.category].count += 1;
    });

    
    categoryCardsContainer.innerHTML = '';
    Object.keys(categories).forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('data-category', cat);
        // No mostrar contador: simplificar a solo el nombre de la categoría
        card.innerHTML = `<h4>${cat}</h4>`;
        card.addEventListener('click', () => {
            // Marcar activa
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            filterItems(cat);
            // En móviles, abrir el grid y ocultar sidebar si está abierto
            const sidebar = document.getElementById('order-sidebar');
            if (sidebar && !sidebar.classList.contains('closed')) sidebar.classList.add('closed');
        });
        categoryCardsContainer.appendChild(card);
    });
}

function showPopularItems() {
    const popular = menuItems.filter(i => i.popular);
    renderMenuItems(popular);
}

function openBurgerModal() {
    const modal = document.getElementById('burger-modal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.zIndex = '999999';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        resetCustomBurger();
    }
}

function closeBurgerModal() {
    const modal = document.getElementById('burger-modal');
    if (modal) {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('closing');
        }, 300);
    }
}

function resetCustomBurger() {
    customBurgerIngredients = [];
    const nameInput = document.getElementById('custom-burger-name');
    if (nameInput) nameInput.value = '';

    const checkboxes = document.querySelectorAll('#burger-modal input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    const radios = document.querySelectorAll('#burger-modal input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    updateBurgerPreview();
    updateCustomPrice();
}

function toggleIngredient(ingredient) {
    const index = customBurgerIngredients.indexOf(ingredient);
    if (index > -1) {
        customBurgerIngredients.splice(index, 1);
    } else {
        if (['beef', 'chicken'].includes(ingredient)) {
            customBurgerIngredients = customBurgerIngredients.filter(ing => !['beef', 'chicken'].includes(ing));
        }
        customBurgerIngredients.push(ingredient);
    }
    updateBurgerPreview();
    updateCustomPrice();
}

function updateBurgerPreview() {
    const preview = document.getElementById('burger-preview');
    if (!preview) return;

    const ingredientEmojis = {
        beef: '🥩',
        chicken: '🍗',
        cheddar: '🧀',
        lettuce: '🥬',
        tomato: '🍅',
        onion: '🧅',
        bbq: '🍯'
    };

    let previewHTML = '<div class="bun-top">🍞</div>';
    customBurgerIngredients.forEach(ingredient => {
        previewHTML += `<div class="ingredient-layer">${ingredientEmojis[ingredient]}</div>`;
    });
    previewHTML += '<div class="bun-bottom">🍞</div>';

    preview.innerHTML = previewHTML;
}

function updateCustomPrice() {
    let totalPrice = BASE_PRICE;
    customBurgerIngredients.forEach(ingredient => {
        totalPrice += ingredientPrices[ingredient] || 0;
    });
    const totalElement = document.getElementById('custom-total');
    if (totalElement) {
        totalElement.textContent = formatPrice(totalPrice);
    }
}

function addCustomBurger() {
    if (customBurgerIngredients.length === 0) {
        alert('Selecciona al menos un ingrediente');
        return;
    }

    const nameInput = document.getElementById('custom-burger-name');
    const burgerName = nameInput ? nameInput.value.trim() || 'Mi Hamburguesa Personalizada' : 'Mi Hamburguesa Personalizada';

    let totalPrice = BASE_PRICE;
    customBurgerIngredients.forEach(ingredient => {
        totalPrice += ingredientPrices[ingredient] || 0;
    });

    const customBurger = {
        id: Date.now(),
        name: burgerName,
        price: totalPrice,
        category: 'hamburguesas',
        custom: true,
        ingredients: [...customBurgerIngredients]
    };

    order.push(customBurger);
    updateOrderSummary();
    closeBurgerModal();
    showAddedNotification(burgerName);
}

// Legacy: si existen botones de filtro (v. antigua), añadir manejadores pero de forma segura
const legacyFilterBtns = document.querySelectorAll('.filter-btn');
if (legacyFilterBtns && legacyFilterBtns.length) {
    legacyFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            legacyFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterItems(btn.getAttribute('data-category'));
        });
    });
}

// Remove old filter button logic if not present
if (!document.querySelectorAll('.filter-btn').length && categoryCardsContainer) {
    renderCategoryCards();
}

menuGrid.addEventListener('click', (e) => {
    // Si se hace clic en el botón de personalizar
    // removed custom burger click handling

    // Si se hace clic en cualquier otra parte del item (excepto el botón personalizar)
    const itemCard = e.target.closest('.menu-item');
    if (itemCard && !e.target.classList.contains('customize-btn')) {
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
    const notification = document.createElement('div');
    notification.className = 'added-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${itemName} agregado al pedido</span>
    `;

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

        const customInfo = item.custom ?
            `<small class="custom-info">Personalizada: ${item.ingredients.join(', ')}</small>` : '';

        orderItemDiv.innerHTML = `
            <div class="item-details">
                <span class="item-name">${item.name}</span>
                ${customInfo}
            </div>
            <span class="item-price">${formatPrice(item.price)}</span>
            <button class="remove-item-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
        `;
        orderItemsContainer.appendChild(orderItemDiv);
        total += item.price;
    });

    totalPriceElement.textContent = formatPrice(total);
    updateSendButton();
    updateCartCount();
}

function updateCartCount() {
    const count = order.length;
    const cartCountEls = document.querySelectorAll('.cart-count');
    cartCountEls.forEach(el => el.textContent = count);
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

function generateWhatsAppMessage() {
    if (order.length === 0) {
        alert('Por favor, agrega al menos un producto a tu pedido.');
        return;
    }

    let message = '🍔 *PEDIDO SABOR URBANO* 🍔\n\n';
    message += '📋 *Detalles del pedido:*\n\n';

    const groupedOrder = {};
    order.forEach(item => {
        const key = item.custom ? `${item.name} (${item.ingredients.join(', ')})` : item.name;
        if (groupedOrder[key]) {
            groupedOrder[key].quantity += 1;
            groupedOrder[key].totalPrice += item.price;
        } else {
            groupedOrder[key] = {
                quantity: 1,
                price: item.price,
                totalPrice: item.price
            };
        }
    });

    Object.keys(groupedOrder).forEach(itemName => {
        const it = groupedOrder[itemName];
        message += `• ${it.quantity}x ${itemName}\n`;
        message += `  ${formatPrice(it.price)} c/u = ${formatPrice(it.totalPrice)}\n\n`;
    });

    message += `💰 *TOTAL: ${formatPrice(total)}*\n\n`;
    message += '📍 *Dirección de entrega:* _Por favor proporcionar_\n';
    message += '📞 *Teléfono de contacto:* _Por favor proporcionar_\n\n';
    message += '¡Gracias por elegir Sabor Urbano! 🙌';

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '573245022369';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

function sendOrder() {
    generateWhatsAppMessage();
}

document.addEventListener('DOMContentLoaded', () => {
    // Render de categorías y contenido inicial
    if (categoryCardsContainer) renderCategoryCards();
    // Mostrar items populares por defecto
    showPopularItems();

    // Elementos del sidebar y botón del carrito (aseguramos que existan después del DOM)
    const sidebar = document.getElementById('order-sidebar');
    cartToggleBtn = document.getElementById('cart-toggle');

    // Forzar que el sidebar esté cerrado al cargar la página
    if (sidebar && !sidebar.classList.contains('closed')) {
        sidebar.classList.add('closed');
    }
    // Asegurar que el botón del carrito sea visible al inicio
    if (cartToggleBtn) cartToggleBtn.style.display = '';

    // Helpers to open/close sidebar with backdrop and cart-toggle visibility
    function openSidebar() {
        if (!sidebar) return;
        sidebar.classList.remove('closed');
        // hide cart toggle while sidebar is open
        if (cartToggleBtn) cartToggleBtn.style.display = 'none';
        // create backdrop
        let backdrop = document.getElementById('order-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'order-backdrop';
            Object.assign(backdrop.style, {
                position: 'fixed',
                inset: '0',
                background: 'transparent',
                zIndex: '998'
            });
            backdrop.addEventListener('click', () => {
                closeSidebar();
            });
            document.body.appendChild(backdrop);
        }
    }

    function closeSidebar() {
        if (!sidebar) return;
        sidebar.classList.add('closed');
        // show cart toggle again
        if (cartToggleBtn) cartToggleBtn.style.display = '';
        const backdrop = document.getElementById('order-backdrop');
        if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    }

    if (cartToggleBtn && sidebar) {
        cartToggleBtn.addEventListener('click', () => {
            if (sidebar.classList.contains('closed')) openSidebar();
            else closeSidebar();
        });
    }

    // Inicializar contador del carrito
    updateCartCount();

    // En pantallas pequeñas, cerrar el sidebar por defecto
    if (sidebar && window.innerWidth <= 820) {
        sidebar.classList.add('closed');
    }

    const sendOrderBtn = document.getElementById('send-order-btn');
    if (sendOrderBtn) {
        sendOrderBtn.addEventListener('click', sendOrder);
    }

    // Asegurar que si existe un modal antiguo, esté oculto
    const modal = document.getElementById('burger-modal');
    if (modal) modal.style.display = 'none';
});
