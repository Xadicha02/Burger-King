let cartBox = document.querySelector("#cartBox");

// 3. GETITEM - Ma'lumotlarni o'qib olish
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    if (cart.length === 0) {
        cartBox.innerHTML = "<h2>Savatchangiz bo'sh</h2>";
        return;
    }

    let html = cart.map((item, index) => {
        return `
        <div class="card">
            <h3>${item.product}</h3>
            <p>${item.price}$</p>
            <button onclick="removeItem(${index})">O'chirish</button>
        </div>`;
    }).join("");
    cartBox.innerHTML = html;
}

// 4. REMOVEITEM - Bitta mahsulotni o'chirish
function removeItem(index) {
    // Massivdan o'chirish
    cart.splice(index, 1);

    // Yangilangan massivni yana localStorage'ga yozish00
    localStorage.setItem("cart", JSON.stringify(cart));

    // Ekranni qayta chizish
    renderCart();
}

// 5. REMOVEITEM (Maxsus kalit bo'yicha) - Savatni tozalash
function clearCart() {
    // Faqat "cart" kalitiga tegishli ma'lumotni o'chirish
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
    alert("Savat tozalandi!");
}

renderCart();