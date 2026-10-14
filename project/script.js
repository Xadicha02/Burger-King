let products = [
    {
        product: "Redmi Note 11 Pro",
        price: 800,
        quantity: 5,
        category: "Smartphone",
        brand: "Xiaomi",
        color: "Black",
        releaseDate: "2022-03-01",
        rating: 4.5,
        warranty: 1,
        weight: "200g",
    },
    {
        product: "Samsung Galaxy S22",
        price: 999,
        quantity: 4,
        category: "Smartphone",
        brand: "Samsung",
        color: "Blue",
        releaseDate: "2022-02-01",
        rating: 4.8,
        warranty: 1,
        weight: "170g"
    },
    {
        product: "iPhone 14 Pro",
        price: 1200,
        quantity: 6,
        category: "Smartphone",
        brand: "Apple",
        color: "Silver",
        releaseDate: "2022-09-01",
        rating: 4.9,
        warranty: 1,
        weight: "204g"
    },
    {
        product: "OnePlus 10 Pro",
        price: 950,
        quantity: 3,
        category: "Smartphone",
        brand: "OnePlus",
        color: "Green",
        releaseDate: "2022-03-01",
        rating: 4.7,
        warranty: 1,
        weight: "200g"
    },
    {
        product: "Google Pixel 6",
        price: 800,
        quantity: 5,
        category: "Smartphone",
        brand: "Google",
        color: "Black",
        releaseDate: "2021-10-01",
        rating: 4.6,
        warranty: 1,
        weight: "207g"
    },
    {
        product: "MacBook Air M1",
        price: 1200,
        quantity: 4,
        category: "Laptop",
        brand: "Apple",
        color: "Silver",
        releaseDate: "2020-11-01",
        rating: 4.8,
        warranty: 1,
        weight: "1.29kg"
    },
    {
        product: "Dell XPS 13",
        price: 1400,
        quantity: 3,
        category: "Laptop",
        brand: "Dell",
        color: "Black",
        releaseDate: "2021-01-01",
        rating: 4.7,
        warranty: 1,
        weight: "1.2kg"
    },
    {
        product: "HP Spectre x360",
        price: 1300,
        quantity: 5,
        category: "Laptop",
        brand: "HP",
        color: "Blue",
        releaseDate: "2021-06-01",
        rating: 4.6,
        warranty: 1,
        weight: "1.3kg"
    },
    {
        product: "Lenovo ThinkPad X1 Carbon",
        price: 1500,
        quantity: 2,
        category: "Laptop",
        brand: "Lenovo",
        color: "Silver",
        releaseDate: "2021-02-01",
        rating: 4.9,
        warranty: 1,
        weight: "1.1kg"
    },
    {
        product: "Asus ZenBook 14",
        price: 1100,
        quantity: 4,
        category: "Laptop",
        brand: "Asus",
        color: "Blue",
        releaseDate: "2020-12-01",
        rating: 4.7,
        warranty: 1,
        weight: "1.4kg"
    },
    {
        product: "Samsung Galaxy Tab S7",
        price: 600,
        quantity: 6,
        category: "Tablet",
        brand: "Samsung",
        color: "Black",
        releaseDate: "2020-08-05",
        rating: 4.6,
        warranty: 1,
        weight: "500g"
    },
    {
        product: "Apple iPad Pro 11",
        price: 800,
        quantity: 5,
        category: "Tablet",
        brand: "Apple",
        color: "Silver",
        releaseDate: "2021-04-01",
        rating: 4.9,
        warranty: 1,
        weight: "468g"
    },
    {
        product: "Microsoft Surface Pro 7",
        price: 900,
        quantity: 4,
        category: "Tablet",
        brand: "Microsoft",
        color: "Platinum",
        releaseDate: "2019-10-01",
        rating: 4.7,
        warranty: 1,
        weight: "775g"
    },
    {
        product: "Lenovo Tab P11 Pro",
        price: 500,
        quantity: 4,
        category: "Tablet",
        brand: "Lenovo",
        color: "Slate Grey",
        releaseDate: "2020-08-01",
        rating: 4.6,
        warranty: 1,
        weight: "485g"
    },
    {
        product: "Huawei MatePad Pro",
        price: 700,
        quantity: 3,
        category: "Tablet",
        brand: "Huawei",
        color: "Silver",
        releaseDate: "2020-10-01",
        rating: 4.8,
        warranty: 1,
        weight: "460g"
    },
    {product: "Amazon Fire HD 10",
        price: 150,
        quantity: 7,
        category: "Tablet",
        brand: "Amazon",
        color: "Black",
        releaseDate: "2021-05-01",
        rating: 4.2,
        warranty: 1,
        weight: "465g"
    },
    {
        product: "Samsung Galaxy Tab A7",
        price: 250,
        quantity: 6,
        category: "Tablet",
        brand: "Samsung",
        color: "Gold",
        releaseDate: "2020-09-01",
        rating: 4.5,
        warranty: 1,
        weight: "476g"
    },
    {
        product: "Apple iPad 9th Gen",
        price: 350,
        quantity: 6,
        category: "Tablet",
        brand: "Apple",
        color: "Space Gray",
        releaseDate: "2021-09-01",
        rating: 4.7,
        warranty: 1,
        weight: "487g"
    },
    {
        product: "Sony Xperia Z4 Tablet",
        price: 450,
        quantity: 3,
        category: "Tablet",
        brand: "Sony",
        color: "White",
        releaseDate: "2015-06-01",
        rating: 4.4,
        warranty: 1,
        weight: "393g"
    }
]



const newProduct = {
    product: "Nothing Phone 2",
    price: 700,
    quantity: 5,
    category: "Smartphone",
    brand: "Nothing",
    color: "White",
    releaseDate: "2023-07-01",
    rating: 4.5,
    warranty: 1,
    weight: "190g"
};



let box = document.querySelector(".box")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let sortUp = document.querySelector(".sortUp")
let sortDown = document.querySelector(".sortDown")
let sortOrg = document.querySelector(".sortOrg")


let minVal = document.querySelector(".minVal")
let maxVal = document.querySelector(".maxVal")
let btn4 = document.querySelector(".btn4")

btn4.onclick = () => {
    let min = Number(minVal.value)
    let max = Number(maxVal.value)

    let n1 = products.filter(e => e.price >= min && e.price <= max)

    write(n1)
}

function write(data) {
    let n = data.map((e) => {
        let index = products.indexOf(e);

        return `
            <div class="card">

                <button class="likeBtn" onclick="likeProduct(${index})">
                    ♡
                </button>

                <div class="product-image-box">
                    <img src="${getImage(e.product)}" alt="${e.product}">
                </div>

                <h1>${e.product}</h1>

                <p>${e.color}</p>

                <h1 class="price">${e.price}$</h1>

                <p>${e.category}</p>

                <button class="addCart" onclick="addToCart(${index})">
                    Savatchaga qo'shish
                </button>

            </div>
        `;
    }).join("");

    box.innerHTML = n;
}

write(products);


btn1.onclick = () => {
    let n1 = products.filter(e => e.category == "Smartphone")
    write(n1)
}
btn2.onclick = () => {
    let n1 = products.filter(e => e.category == "Tablet")
    write(n1)
}
btn3.onclick = () => {
    let n1 = products.filter(e => e.category == "Laptop")
    write(n1)
}

sortUp.onclick = () => {
    let n1 = [...products].sort((a, b) => a.price - b.price)
    write(n1)
}
sortDown.onclick = () => {
    let n1 = [...products].sort((a, b) => b.price - a.price)
    write(n1)
}
sortOrg.onclick = () => {
    write(products)
}



const navAll = document.querySelector(".navAll");
const productCount = document.querySelector(".productCount");

const openLogin = document.querySelector(".openLogin");
const loginModal = document.querySelector("#loginModal");
const closeModal = document.querySelector(".closeModal");

const btnLogin = document.querySelector(".btnLogin");
const inpEmail = document.querySelector(".inpEmail");
const inpPass = document.querySelector(".inpPass");
const message = document.querySelector(".message");
const show = document.querySelector(".show");

function updateProductCount(data) {
  productCount.textContent = `${data.length} ta mahsulot topildi`;
}

const oldWrite = write;

write = function (data) {
  oldWrite(data);
  updateProductCount(data);
};

write(products);

navAll.onclick = () => {
  write(products);
};

openLogin.onclick = () => {
  loginModal.classList.add("open");
  inpEmail.focus();
};

closeModal.onclick = () => {
  loginModal.classList.remove("open");
};

loginModal.onclick = (event) => {
  if (event.target === loginModal) {
    loginModal.classList.remove("open");
  }
};

function submitLogin() {
  const email = inpEmail.value.trim();
  const password = inpPass.value.trim();

  if (!email || !password) {
    message.textContent = "Fullfill email and password.";
    message.className = "message error";
    return;
  }

  const isValidEmail = email.length >= 14 && email.endsWith("@gmail.com");
  const isValidPassword = password.length >= 8;

  if (isValidEmail && isValidPassword) {
    message.textContent = "Login successful!";
    message.className = "message ok";

    setTimeout(() => {
      loginModal.classList.remove("open");
    }, 800);
  } else {
    message.textContent =
      "please enter your email, password should contain 8 symbols.";
    message.className = "message error";
  }
}

btnLogin.onclick = submitLogin;

inpEmail.onkeydown = (event) => {
  if (event.key === "Enter") {
    inpPass.focus();
  }
};

inpPass.onkeydown = (event) => {
  if (event.key === "Enter") {
    submitLogin();
  }
};

show.onclick = () => {
  const passwordIsHidden = inpPass.type === "password";

  inpPass.type = passwordIsHidden ? "text" : "password";
  show.textContent = passwordIsHidden ? "Hide" : "Show";
};

function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = products[index];

    if (!product) {
        alert("Mahsulot topilmadi!");
        return;
    }

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Mahsulot savatchaga qo'shildi!");
}






function getImage(product) {
    let images = {
        "Redmi Note 11 Pro": "https://mini-io-api.texnomart.uz/catalog/product/1051/105151/183608/bf76efa6-2e19-4865-9be9-160430372a75.jpg",
        "Samsung Galaxy S22": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJKsVM95xRFolJahMyB6LVLbxHM8ZSHpzW_5cyrJNDw&s=10",
        "iPhone 14 Pro": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6lzh6SvL3nU8WJ9RyUpAdO_tp20cT0JuJ99C8GQeA&s=10",
        "OnePlus 10 Pro": "https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/mar/0317/EU-IN_Black.png",
        "Google Pixel 6": "https://i5.walmartimages.com/seo/Google-Pixel-6-128GB-GB7N6-Factory-Unlocked-8GB-RAM-Smartphone-Sorta-Seafoam_04252aa4-00b0-4844-b803-3eaeb0fc7fc3.be79d2ebfaa3a0278b612c0bb2de2056.jpeg",
        "MacBook Air M1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8NYt0-CEbq0EQxlO-6U8-kIVobsNRXJHWfw7RCC8ssKu-7L3lrS0NrY&s=10",
        "Dell XPS 13": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWZ9UiR5hdn9g2jvtuQQcp5wqE-0_IFR5sUvdvmJl4w&s=10",
        "HP Spectre x360": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPApBPdOY9awZ-FlRWMZNN5PeuKKvTOy7fk7bpQkDeA&s=10",
        "Lenovo ThinkPad X1 Carbon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ6LtfcBX8A7vizgyodxzxzoOxzRXPj8x3-2hZFHtJQ&s=10",
        "Asus ZenBook 14": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45aCaKD62vyh6lzuy_svxx53lLGgrST4lNuwdZu5yAA&s=10",
        "Samsung Galaxy Tab S7": "https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20Galaxy%20Tab%20S7%2B.png",
        "Apple iPad Pro 11": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVlRvvgDbrIB-8EOAbMjOhO_FYqRu3fC351Syen8BtA&s=10",
        "Microsoft Surface Pro 7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Tq05oOrHi-RDJftFqvm1ZMgwUnQsq-6E8VYp33YWvQ&s=10",
        "Lenovo Tab P11 Pro": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Tq05oOrHi-RDJftFqvm1ZMgwUnQsq-6E8VYp33YWvQ&s=10",
        "Huawei MatePad Pro": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY1VCAN8bDPyQqZcA8PYiC-_6AiqOcnuFoZ-Xz7WQz8g&s=10",
        "Amazon Fire HD 10": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5q7Rl5Qfcf0oNVSYtXtYb5t31hGb2zJvfIYfAqlYPQ&s",
        "Samsung Galaxy Tab A7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNxMc0RuuI1fDHaq2CFOYxY171OOvHYCUb83c35g_XA&s=10",
        "Apple iPad 9th Gen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmUw6j8F7OpDsoejFFCcpqs0d-J3hnjxjPRAJeTuOeQ&s=10",
        "Sony Xperia Z4 Tablet": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Kr1HeJtjlFdhlmyd_sI3-6uIIP3uiRUmf2EQCc8aLA&s=10"
    };

    return images[product];
}


function likeProduct(index) {
    const buttons = document.querySelectorAll(".likeBtn");
    const button = buttons[index];

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
        button.textContent = "♥";
    } else {
        button.textContent = "♡";
    }
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let sliderTimer;


/* SHOW SLIDE */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}


/* NEXT */

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
    restartAutoplay();
}


/* PREVIOUS */

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
    restartAutoplay();
}


/* BUTTONS */

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


/* DOTS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

        restartAutoplay();

    });

});


/* AUTOPLAY */

function startAutoplay() {

    sliderTimer = setInterval(() => {

        currentSlide++;

        showSlide(currentSlide);

    }, 5000);

}


function restartAutoplay() {

    clearInterval(sliderTimer);

    startAutoplay();

}


/* SWIPE FOR MOBILE */

let touchStartX = 0;
let touchEndX = 0;

const slider = document.querySelector(".slider-wrapper");

slider.addEventListener("touchstart", e => {

    touchStartX = e.changedTouches[0].screenX;

});


slider.addEventListener("touchend", e => {

    touchEndX = e.changedTouches[0].screenX;

    const difference = touchStartX - touchEndX;

    if (difference > 50) {
        nextSlide();
    }

    if (difference < -50) {
        prevSlide();
    }

});


/* START */

showSlide(currentSlide);
startAutoplay();    