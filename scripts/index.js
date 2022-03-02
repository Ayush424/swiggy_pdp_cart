var pdpModule = (function () {
    const categoriesListItems = _fetchCategoriesList();
    const menuListItems = _fetchMenuList();
    const cartListItems = _fetchCartList();

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
        const categoriesDiv = document.querySelector(".categories");
        const categoriesUl = document.createElement("ul");
        categoriesListItems.forEach(element => {
            const categoriesLi = document.createElement("li");
            if (element.displayName == 'Recommended') {
                categoriesLi.classList.add("highlighted");
            }
            categoriesLi.id = element.id;
            categoriesLi.innerText = element.displayName;
            categoriesUl.appendChild(categoriesLi);
        });
        categoriesDiv.appendChild(categoriesUl);
    }

    function _displayMenu() {
        const menuDiv = document.querySelector(".menu");
        const menuItemCount = menuDiv.querySelector("p");
        menuItemCount.textContent = `${menuListItems.length} Items`;
        const menuUl = document.createElement("ul");
        menuListItems.forEach(element => {
            const menuLi = document.createElement("li");
            menuLi.classList.add("dish");
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
            menuLi.append(vegMark);
            menuLi.append(dishName);
            menuLi.append(price);
            menuUl.append(menuLi);
        });
        menuDiv.append(menuUl);
    }

    function _displayCart() {
        const cartDiv = document.querySelector(".cart");
        const itemCount = cartDiv.querySelector("p");
        itemCount.textContent = cartListItems.lineItems.length == 1 ? `${cartListItems.lineItems.length} ITEM` : `${cartListItems.lineItems.length} ITEMS`;
        const cartUl = document.createElement("ul");
        cartListItems.lineItems.forEach(element => {
            const cartLi = document.createElement("li");
            cartLi.id = element.id;
            cartLi.innerText = element.name;
            cartUl.appendChild(cartLi);
        });
        const amount = document.createElement("div");
        amount.classList.add("amount");
        const h3 = document.createElement("h3");
        h3.textContent = "Subtotal";
        const price = document.createElement("p");
        price.textContent = `₹ ${cartListItems.subTotal}`;
        const disclaimer = document.createElement("p");
        disclaimer.className = "disclaimer";
        disclaimer.textContent = "Extra charges may apply";
        const button = document.createElement("button");
        button.className = "check-out-button";
        button.innerText = "CHECKOUT ->";
        cartDiv.appendChild(cartUl);
        amount.append(h3);
        amount.appendChild(price);
        cartDiv.appendChild(amount);
        cartDiv.append(disclaimer);
        cartDiv.append(button);
    }
    function display() {
        _displayCategories();
        _displayMenu();
        _displayCart();
    }
})();
pdpModule.init();