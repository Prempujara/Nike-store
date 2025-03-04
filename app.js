const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 20000,
    colors: [
      {
        code: "black",
        img: "air.png",
      },
      {
        code: "darkblue",
        img: "air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 25000,
    colors: [
      {
        code: "lightgray",
        img: "jordan.png",
      },
      {
        code: "green",
        img: "jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 15999,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code: "green",
        img: "blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 19999,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code: "lightgray",
        img: "crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 12999,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code: "black",
        img: "hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Cart functionality
const addToCartButton = document.querySelector(".addToCartButton");
const cartItemsList = document.querySelector(".cartItems");
let cart = [];

// Function to update the cart display
function updateCartDisplay() {
  cartItemsList.innerHTML = ""; // Clear the current cart display

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.title} (${item.color}, Size ${item.size}) - $${item.price} x ${item.quantity}
      <button class="removeItemButton" data-index="${index}">Remove</button>
    `;
    cartItemsList.appendChild(li);
  });

  // Add event listeners to the remove buttons
  const removeButtons = document.querySelectorAll(".removeItemButton");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1); // Remove the item from the cart
      updateCartDisplay(); // Update the cart display
    });
  });
}

// Add to cart functionality
addToCartButton.addEventListener("click", () => {
  // Get the selected size
  const selectedSize = document.querySelector(".size[style*='background-color: black']");

  if (!selectedSize) {
    alert("Please select a size before adding to cart.");
    return;
  }

  // Create a cart item object
  const cartItem = {
    id: choosenProduct.id,
    title: choosenProduct.title,
    price: choosenProduct.price,
    color: choosenProduct.colors.find((color, index) =>
      currentProductImg.src.includes(color.img)
    ).code,
    size: selectedSize.textContent,
    quantity: 1, // Default quantity
  };
  const cartItems = document.querySelector(".cartItems");

  function addToCart(productName, productImage) {
    let cartItem = document.createElement("li");
    cartItem.innerHTML = `
      <img src="${productImage}" class="cartItemImage" alt="${productName}">
      <span class="cartItemDetails">${productName}</span>
      <button class="removeItemButton">Remove</button>
    `;
  
    // Remove Item on Click
    cartItem.querySelector(".removeItemButton").addEventListener("click", () => {
      cartItem.remove();
    });
  
    cartItems.appendChild(cartItem);
  }
  // Check if the item already exists in the cart
  const existingItem = cart.find(
    (item) =>
      item.id === cartItem.id &&
      item.color === cartItem.color &&
      item.size === cartItem.size
  );

  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if item exists
  } else {
    cart.push(cartItem); // Add new item to cart
  }

  // Update the cart display
  updateCartDisplay();
});

// Product slider functionality
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// Color selection functionality
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// Size selection functionality
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Payment model functionality
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});