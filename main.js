document.addEventListener("DOMContentLoaded", function() {
    fetch('https://fakestoreapi.com/products') // Lấy tất cả sản phẩm từ API
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products-container'); // Lấy container của cột thứ hai
            const productsPerGroup = 5; // Số sản phẩm tối đa mỗi nhóm
            
            for (let i = 0; i < data.length; i += productsPerGroup) {
                // Tạo một phần tử .products mới
                const productsGroup = document.createElement('div');
                productsGroup.classList.add('products');
                
                // Lấy tối đa 5 sản phẩm cho mỗi .products
                const products = data.slice(i, i + productsPerGroup);
                
                products.forEach(product => {
                    // Tạo HTML cho mỗi card sản phẩm
                    const cardHTML = `
                        <div class="card">
                            <img src="${product.image}" alt="${product.title}" class="card__img">
                            <h3 class="card__title">${product.title}</h3>
                            <p class="card__price">Price: $<span>${product.price}</span></p>
                            <button class="card__button">ADD TO CART</button>
                        </div>
                    `;
                    // Thêm card vào .products
                    productsGroup.innerHTML += cardHTML;
                });
                
                // Thêm .products mới vào container của cột thứ hai
                productsContainer.appendChild(productsGroup);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
