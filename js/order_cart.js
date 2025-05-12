let cart = [];
function addToCart(name, price) 
{
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) 
    {
        existingItem.quantity++;
    } 
    else 
    {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() 
{
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price} x ${item.quantity}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="adjustQuantity('${item.name}', -1)">-</button>
                    <button onclick="adjustQuantity('${item.name}', 1)">+</button>
                    <button onclick="removeItem('${item.name}')">×</button>
                </div>
        `;
        cartItems.appendChild(itemElement);
    });

    totalElement.textContent = total.toFixed(2);
}

function adjustQuantity(name, change) 
{
    const item = cart.find(item => item.name === name);
    if (item) 
    {
        item.quantity += change;
        if (item.quantity <= 0)
        {
            cart = cart.filter(item => item.name !== name);
        }
        updateCart();
    }
}

function removeItem(name) 
{
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function checkout()
{
    var email = document.getElementById('E-Mail').value;
    var cartItems = document.getElementById('cart-items');
    function isValidEmail(email)
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    var id = document.getElementById('customer').value;
    var address = document.getElementById('address').value;

    if(!id || !address || !email)
    {
        alert("Missing information");
    }
    else if (!isValidEmail(email))
    {
        alert("Incorrect E-Mail");
    }
    else if(cartItems.children.length <= 0)
    {
        alert("Select an order before proceeding to checkout");
    }
    else
    {
        alert('Dear '+ id + '.\n\nThank you for your order! \n\nTotal: $' + document.getElementById('total').textContent);
        cart = [];
        updateCart();
    }
}