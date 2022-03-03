var pdpModule = (function () {
    const categoriesItemsList = _fetchCategoriesList();
    const menuItemsList = _fetchMenuList();
    const cartItemsList = _fetchCartList();
    var highlighted = categoriesItemsList[0].id;
    return {
        init: display,
    };

    function _fetchCategoriesList() {
        return [{ "displayName": "Recommended", "id": "recommended" }, { "displayName": "Dessert and Beverages", "id": "dessert_beverage" }, { "displayName": "Biryani", "id": "biryani" }];
    }
    function _fetchMenuList() {
        return [{ "id": "2121", "displayName": "Kadhai Paneer Biryani", "price": 249, "currency": "INR", "vegetarian": true, "imgUrl": "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=", "categories": ["recommended", "biryani"] }, { "id": "2122", "displayName": "Real Biryani", "price": 349, "currency": "INR", "vegetarian": false, "imgUrl": "https://media.istockphoto.com/photos/hyderabadi-biryani-a-popular-chicken-or-mutton-rice-preparation-picture-id466089615?k=20&m=466089615&s=612x612&w=0&h=_Z0Jlombq-VX8Pl8I9mJf_kIuvbzZ7j8ucxvRoLL8BM=", "categories": ["biryani"] }, { "id": "2123", "displayName": "Plain Veg Biryani", "price": 149, "currency": "INR", "vegetarian": true, "imgUrl": "https://media.istockphoto.com/photos/chicken-biryani-directly-above-photo-picture-id1169141170?k=20&m=1169141170&s=612x612&w=0&h=EpCF3lQF2GBRaVApNELuE5xFQfv8fyQ_wWC52hmyxeo=", "categories": ["biryani"] }];
    }
    function _fetchCartList() {
        return { "lineItems": [{ "id": "1121", "name": "Plain Veg Biryani", "quantity": 2, "price": 149, "currency": "INR" }], "shippingFee": 0, "discount": 0, "tax": 0, "subTotal": 149 };
    }

    function _displayCategories() {
        const categoriesContainer = document.querySelector(".categories");
        const categoriesItems = document.createElement("ul");
        categoriesItemsList.forEach(element => {
            const categoriesItem = document.createElement("li");
            if(element.id==highlighted){
                categoriesItem.classList.add("highlighted");
            }
            categoriesItem.id = element.id;
            categoriesItem.innerText = element.displayName;
            categoriesItems.appendChild(categoriesItem);
        });
        categoriesContainer.appendChild(categoriesItems);
    }

    function _displayMenu() {
        const menuContainer = document.querySelector(".menu");
        const menuItemCount = menuContainer.querySelector("p");
        menuItemCount.textContent = `${menuItemsList.length} Items`;
        const menuItems = document.createElement("ul");
        menuItemsList.forEach(element => {
            const menuItem = document.createElement("li");
            menuItem.classList.add("dish");
            //img in li 
            const vegMark = document.createElement("img");
            vegMark.setAttribute("src", "./images/vegMark.png");
            //dishname in li
            const dishName = document.createElement("p");
            dishName.classList.add("dish-name");
            dishName.textContent = `${element.displayName}`;
            //price in li
            const price = document.createElement("p");
            price.classList.add("price");
            price.textContent = `₹ ${element.price}`;
            menuItem.append(vegMark);
            menuItem.append(dishName);
            menuItem.append(price);
            menuItems.append(menuItem);
        });
        menuContainer.append(menuItems);
    }

    function _displayCart() {
        const cartContainer = document.querySelector(".cart");
        const itemCount = cartContainer.querySelector("p");
        itemCount.textContent = cartItemsList.lineItems.length == 1 ? `${cartItemsList.lineItems.length} ITEM` : `${cartItemsList.lineItems.length} ITEMS`;
        const cartItems = document.createElement("ul");
        cartItemsList.lineItems.forEach(element => {
            const cartItem = document.createElement("li");
            cartItem.id = element.id;
            cartItem.innerText = element.name;
            cartItems.appendChild(cartItem);
        });
        const amount = document.createElement("div");
        amount.classList.add("amount");
        const h3 = document.createElement("h3");
        h3.textContent = "Subtotal";
        const price = document.createElement("p");
        price.textContent = `₹ ${cartItemsList.subTotal}`;
        const disclaimer = document.createElement("p");
        disclaimer.className = "disclaimer";
        disclaimer.textContent = "Extra charges may apply";
        const button = document.createElement("button");
        button.className = "check-out-button";
        button.innerText = "CHECKOUT ->";
        cartContainer.appendChild(cartItems);
        amount.append(h3);
        amount.appendChild(price);
        cartContainer.appendChild(amount);
        cartContainer.append(disclaimer);
        cartContainer.append(button);
    }
    function display() {
        _displayCategories();
        _displayMenu();
        _displayCart();
    }
})();
pdpModule.init();