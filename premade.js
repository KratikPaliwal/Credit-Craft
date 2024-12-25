function createCard(product) {
    // Get stored name and bank from localStorage
    const userName = localStorage.getItem('userName') || 'Your Name';
    const bankName = localStorage.getItem('bankName') || 'BANK';

    return `
        <div>
            <div class="premade-details">
                <img src="bacside.png" alt="" height="40px" class="sensor-img">
                <div class="overlay-text">${bankName}</div>
            </div>
            <a href="product.html?id=${product.id}">
                <img src="${product.image}" alt="" class="premade-images">
            </a>
            <div class="user-name">${userName}</div>
            <div class="card-name">${product.name}</div>
            <div class="card-price">
                <div class="over-price">₹${product.originalPrice}</div>
                <div>₹${product.price}</div>
            </div>
            <div class="buy-button">
                <button onclick="window.location.href='product.html?id=${product.id}'" class="newpage1">Buy</button>
            </div>
        </div>
    `;
}

function renderProductSection(category, products) {
    const container = document.querySelector(`#${category}-section .premade-design`);
    if (container) {
        container.innerHTML = products.map(product => createCard(product)).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Render all product sections
    Object.keys(products).forEach(category => {
        renderProductSection(category, products[category]);
    });
});
