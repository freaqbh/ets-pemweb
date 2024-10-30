    const apiUrl = 'https://ets-pemweb-seru.vercel.app/api/products';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            
            let products = data.data; 
            if (Array.isArray(products)) {
                const productList = document.getElementById('product-list');
                let productCards = '';
                
                products.forEach(product => {
                    productCards += `
                    <div class="col-md-3">
                        <div class="card product-card">
                            <img src="${product.thumbnail}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="rating">Rating: ${product.rating} | ${'★'.repeat(Math.round(product.rating))}</p>
                                <p class="price">$ ${product.price}</p>
                                <p class="qty">Qty: ${product.status.qty}</p>
                                <a href="#" class="btn btn-primary">Beli Sekarang</a>
                            </div>
                        </div>
                    </div>
                    `;
                });
                
                productList.innerHTML = productCards;
            } else {
                console.error('Expected an array of products, but received:', products);
            }
        })
        .catch(error => console.error('Error fetching products:', error));
