var pdpModule = (function () {
    const categoriesItemsList = _fetchCategoriesList();
    const menuItemsList = _fetchMenuList();
    const cartItemsList = _fetchCartList();
    const itemsByCategoryMap = new Map();
    _addItemsByCategory();
    _displayCategories("recommended");
    _createMenu("recommended");
    _displayCart();
    return {
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

    function _categoryNameById(id) {
        var name;
        categoriesItemsList.forEach((element) => {
            if (element.id == id) {
                name = element.displayName;
            }
        });
        return name;
    }
    function _addItemsByCategory() {
        menuItemsList.forEach(element => {
            element.categories.forEach(category => {
                if (!itemsByCategoryMap.has(category)) {
                    itemsByCategoryMap.set(category, []);
                }
                itemsByCategoryMap.get(category).push(element);
            });
        });
    }
    function _changeCategory(target) {
        const categories = document.querySelector(".categories");
        const menu = document.querySelector(".menu");
        categories.innerHTML = "";
        menu.innerHTML = "";
        _displayCategories(`${target.id}`);
        _createMenu(`${target.id}`);
    }
    function _displayCategories(category) {
        const categoriesContainer = document.querySelector(".categories");
        const categoriesItems = document.createElement("ul");
        categoriesItemsList.forEach(element => {
            const categoriesItem = document.createElement("li");
            categoriesItem.addEventListener('click', event => {
                _changeCategory(event.target);
            });
            if (element.id == category) {
                categoriesItem.classList.add("highlighted");
            }
            categoriesItem.id = element.id;
            categoriesItem.innerText = element.displayName;
            categoriesItems.appendChild(categoriesItem);
        });
        categoriesContainer.appendChild(categoriesItems);
    }
    function _createMenuItem(category, index) {
        const menuItem = document.createElement("li");
        menuItem.classList.add("dish");
        const vegMark = document.createElement("img");
        vegMark.setAttribute("src", "./images/vegMark.png");
        const dishName = document.createElement("p");
        dishName.classList.add("dish-name");
        dishName.textContent = itemsByCategoryMap.get(category)[index].displayName;
        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `₹ ${itemsByCategoryMap.get(category)[index].price}`;
        menuItem.append(vegMark);
        menuItem.append(dishName);
        menuItem.append(price);
        return menuItem;
    }
    function _createMenuList(category) {
        const menuList = document.createElement("ul");
        if(itemsByCategoryMap.get(category)){
            for (i = 0; i < itemsByCategoryMap.get(category).length; i++) {
                menuList.append(_createMenuItem(category, i));
            }
        }
        return menuList;
    }
    function _createMenu(category) {
        const menuContainer = document.querySelector(".menu");
        const menuheading = document.createElement("h2");
        const menuSubheading = document.createElement("p");
        menuheading.textContent = `${_categoryNameById(category)}`;
        menuSubheading.textContent = itemsByCategoryMap.get(category)?`${itemsByCategoryMap.get(category).length} ITEMS`:"0 ITEMS";
        menuContainer.append(menuheading);
        menuContainer.append(menuSubheading);
        menuContainer.append(_createMenuList(category));
    }
    function _displayCart() {
        const cartContainer = document.querySelector(".cart");
        const cartSubheadingt = cartContainer.querySelector("p");
        cartSubheadingt.textContent = `${cartItemsList.lineItems.length} ITEMS`;
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
})();