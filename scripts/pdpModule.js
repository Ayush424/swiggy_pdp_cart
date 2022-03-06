var pdpModule = (function () {
    const categoriesItemsList = fetchCategoriesList();
    const menuItemsList = fetchMenuList();
    const cartItemsList = fetchCartList();
    const itemsByCategoryMap = _addItemsByCategory();
    return {
        init: display,
    };

    function display() {
        _displayCategories("recommended");
        _createMenu("recommended");
        _displayCart();
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
        const _itemsByCategoryMap = new Map();
        menuItemsList.forEach(element => {
            element.categories.forEach(category => {
                if (!_itemsByCategoryMap.has(category)) {
                    _itemsByCategoryMap.set(category, []);
                }
                _itemsByCategoryMap.get(category).push(element);
            });
        });
        return _itemsByCategoryMap;
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
        const categoriesItemsEl = document.createElement("ul");
        categoriesItemsList.forEach(element => {
            const categoriesItemEl = document.createElement("li");
            categoriesItemEl.addEventListener('click', event => {
                _changeCategory(event.target);
            });
            if (element.id == category) {
                categoriesItemEl.classList.add("highlighted");
            }
            categoriesItemEl.id = element.id;
            categoriesItemEl.innerText = element.displayName;
            categoriesItemsEl.append(categoriesItemEl);
        });
        categoriesContainer.append(categoriesItemsEl);
    }

    function _getItem(category, index) {
        return itemsByCategoryMap.get(category)[index];
    }

    function _getItemListByCategory(category) {
        return itemsByCategoryMap.get(category);
    }

    function _createMenuItem(category, index) {
        const menuItem = _getItem(category, index);
        const menuItemEl = document.createElement("li");
        menuItemEl.classList.add("dish");
        const vegMarkEl = document.createElement("img");
        vegMarkEl.setAttribute("src", "./images/vegMark.png");
        const dishNameEl = document.createElement("p");
        dishNameEl.classList.add("dish-name");
        dishNameEl.textContent = menuItem.displayName;
        const priceEl = document.createElement("p");
        priceEl.classList.add("price");
        priceEl.textContent = `₹ ${menuItem.price}`;
        menuItemEl.append(vegMarkEl, dishNameEl, priceEl);
        return menuItemEl;
    }

    function _createMenuList(category) {
        const menuListEl = document.createElement("ul");
        if (itemsByCategoryMap.get(category)) {
            for (i = 0; i < _getItemListByCategory(category).length; i++) {
                menuListEl.append(_createMenuItem(category, i));
            }
        }
        return menuListEl;
    }

    function _createMenu(category) {
        const menuLength = _getItemListByCategory(category) ? _getItemListByCategory(category).length : 0;
        const menuHeading = _categoryNameById(category);
        const menuList = _createMenuList(category);
        const menuContainer = document.querySelector(".menu");
        const menuheadingEl = document.createElement("h2");
        const menuSubheadingEl = document.createElement("p");
        menuheadingEl.textContent = `${menuHeading}`;
        menuSubheadingEl.textContent = `${menuLength} ITEMS`;
        menuContainer.append(menuheadingEl, menuSubheadingEl, menuList);
    }

    function _displayCart() {
        const cartLength = cartItemsList.lineItems.length;
        const cartContainer = document.querySelector(".cart");
        const cartSubheadingt = cartContainer.querySelector("p");
        cartSubheadingt.textContent = `${cartLength} ITEMS`;
        const cartItemsEl = document.createElement("ul");
        cartItemsList.lineItems.forEach(element => {
            const cartItemEl = document.createElement("li");
            cartItemEl.id = element.id;
            cartItemEl.innerText = element.name;
            cartItemsEl.append(cartItemEl);
        });
        const amountEl = document.createElement("div");
        amountEl.classList.add("amount");
        const amountHeadingEl = document.createElement("h3");
        amountHeadingEl.textContent = "Subtotal";
        const priceEl = document.createElement("p");
        priceEl.textContent = `₹ ${cartItemsList.subTotal}`;
        const disclaimerEl = document.createElement("p");
        disclaimerEl.className = "disclaimer";
        disclaimerEl.textContent = "Extra charges may apply";
        const buttonEl = document.createElement("button");
        buttonEl.className = "check-out-button";
        buttonEl.innerText = "CHECKOUT ->";
        amountEl.append(amountHeadingEl, priceEl);
        cartContainer.append(cartItemsEl, amountEl, disclaimerEl, buttonEl);

    }

})();

function fetchCategoriesList() {
    return [{ "displayName": "Recommended", "id": "recommended" }, { "displayName": "Dessert and Beverages", "id": "dessert_beverage" }, { "displayName": "Biryani", "id": "biryani" }];
}

function fetchMenuList() {
    return [{ "id": "2121", "displayName": "Kadhai Paneer Biryani", "price": 249, "currency": "INR", "vegetarian": true, "imgUrl": "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=", "categories": ["recommended", "biryani"] }, { "id": "2122", "displayName": "Real Biryani", "price": 349, "currency": "INR", "vegetarian": false, "imgUrl": "https://media.istockphoto.com/photos/hyderabadi-biryani-a-popular-chicken-or-mutton-rice-preparation-picture-id466089615?k=20&m=466089615&s=612x612&w=0&h=_Z0Jlombq-VX8Pl8I9mJf_kIuvbzZ7j8ucxvRoLL8BM=", "categories": ["biryani"] }, { "id": "2123", "displayName": "Plain Veg Biryani", "price": 149, "currency": "INR", "vegetarian": true, "imgUrl": "https://media.istockphoto.com/photos/chicken-biryani-directly-above-photo-picture-id1169141170?k=20&m=1169141170&s=612x612&w=0&h=EpCF3lQF2GBRaVApNELuE5xFQfv8fyQ_wWC52hmyxeo=", "categories": ["biryani"] }];
}

function fetchCartList() {
    return { "lineItems": [{ "id": "1121", "name": "Plain Veg Biryani", "quantity": 2, "price": 149, "currency": "INR" }], "shippingFee": 0, "discount": 0, "tax": 0, "subTotal": 149 };
}

pdpModule.init();