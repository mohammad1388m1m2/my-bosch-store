document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');
            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>قیمت: ${product.price.toLocaleString()} تومان</p>
                `;
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});

function searchProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const productElements = document.getElementsByClassName('product');
    Array.from(productElements).forEach(product => {
        const productName = product.getElementsByTagName('h2')[0].innerText.toLowerCase();
        product.style.display = productName.includes(searchInput) ? 'block' : 'none';
    });
}
