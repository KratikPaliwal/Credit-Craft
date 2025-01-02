document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Find the product in our products data
    let product = null;
    for (const category in products) {
        const found = products[category].find(p => p.id === parseInt(productId));
        if (found) {
            product = found;
            break;
        }
    }

    if (!product) {
        window.location.href = '/premade.html';
        return;
    }

    // Update the page with product details
    document.getElementById('productImage').src = product.image;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('originalPrice').textContent = `₹${product.originalPrice}`;
    document.getElementById('finalPrice').textContent = `₹${product.price}`;

    // Handle preview button click
    document.getElementById('previewBtn').addEventListener('click', () => {
        const cardName = document.getElementById('cardName').value;
        if (!cardName) {
            alert('Please enter your name for the card');
            return;
        }
    
        // Add preview functionality here
         
        previewCard(product, cardName);
    });

    // Handle buy button click
    document.getElementById('buyNowBtn').addEventListener('click', () => {
        const cardName = document.getElementById('cardName').value;
        if (!cardName) {
            alert('Please enter your name for the card');
            return;
        }
        // Add purchase functionality here
        processOrder(product, cardName);
    });

    // Get saved data from localStorage
    const bankName = localStorage.getItem('bankName');
    const userName = localStorage.getItem('userName');

    // Update all elements with class 'bank-name'
    const bankElements = document.querySelectorAll('.bank-name');
    bankElements.forEach(element => {
        element.textContent = bankName || 'Bank Name'; // Fallback if no bank name
    });

    // Update all elements with class 'user-name'
    const userElements = document.querySelectorAll('.user-name');
    userElements.forEach(element => {
        element.textContent = userName || 'User Name'; // Fallback if no user name
    });
});

function previewCard(product, cardName) {
    // Add your preview logic here
    console.log('Previewing card:', { product, cardName });
}

function processOrder(product, cardName) {
    // Add your purchase logic here
    console.log('Processing order:', { product, cardName });
} 