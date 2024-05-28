let cart = [];
let totalPrice = 0;

function addToCart(product) {
    let price = 0;
    switch (product) {
        case 'Cerveja Heineken Long Neck 330ML':
            price = 6.99;
            break;
        case 'Pack de 6 Heineken Long Neck 330ML':
            price = 39.90;
            break;

            case 'Cerveja Petra Long Neck 330ML':
                price = 3.99;
                break;
                case 'Pack de 6 Petra Long Neck 330ML':
                price = 22.90;
                break;

                case 'Cerveja Budweiser Long Neck 330ML':
                price = 4.49;
                break;
                case 'Pack de 6 Budweiser Long Neck 330ML':
                price = 29.90;
                break;

                case 'Cerveja Corona Long Neck 330ML':
                price = 6.49;
                break;
                case 'Pack de 6 Corona Long Neck 330ML':
                price = 38.99;
                break;

                case 'Refrigerante Coca Cola 2L':
                price = 8.99;
                break;
                case 'Pack de 6 Coca Cola 2L':
                price = 49.90;
                break;

                case 'Refrigerante Guaraná 2L':
                price = 7.49;
                break;
                case 'Pack de 6 Guaraná 2L':
                price = 41.90;
                break;

                case 'Refrigerante Fanta Uva 2L':
                price = 7.29;
                break;
                case 'Pack de 6 Fanta Uva 2L':
                price = 40.90;
                break;

                case 'Fanta Laranja 2L':
                price = 7.99;
                break;
                case 'Pack de 6 Fanta Laranja 2L':
                price = 47.90;
                break;
    }

    cart.push({ product, price });
    totalPrice += price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - R$ ${item.price}`;
        cartItems.appendChild(li);
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}

function checkout() {
    alert('Compra finalizada! Total: R$ ' + totalPrice.toFixed(2));
    cart = [];
    totalPrice = 0;
    updateCart();
}
document.getElementById('confirm-payment').addEventListener('click', function() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Aqui você pode adicionar lógica para validar os campos do formulário e processar o pagamento
    console.log('Número do Cartão:', cardNumber);
    console.log('Data de Validade:', expiryDate);
    console.log('CVV:', cvv);

    // Simulando um pagamento bem-sucedido
    alert('Pagamento confirmado com sucesso!');
});