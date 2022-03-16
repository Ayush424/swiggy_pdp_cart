var pdpModule = (function () {
    const categoriesItemsList = fetchCategoriesList();
    const menuItemsList = fetchMenuList();
    const cartItemsList = fetchCartList();
    const itemsByCategoryMap = createItemsByCategoryMap(menuItemsList);
  
    function display() {
        _displayCategories("recommended");
        _displayMenu("recommended");
        _displayCart();
    }

    function _changeCategory(target) {
        const categories = document.querySelector(".categories");
        const menu = document.querySelector(".menu");
        categories.innerHTML = "";
        menu.innerHTML = "";
        _displayCategories(`${target.id}`);
        _displayMenu(`${target.id}`);
    }
  
    function _createCategoryItem(element,category,categoriesItemListEl){
        const categoriesItemEl = createDomNode("li",undefined,element.displayName);
        if (element.id == category) {
            categoriesItemEl.classList.add("highlighted");
        }
        categoriesItemEl.id = element.id;
        categoriesItemListEl.append(categoriesItemEl);
    }
    
    function _displayCategories(category) {
        const categoriesContainer = document.querySelector(".categories");
        const categoriesItemListEl = createDomNode("ul");
        categoriesItemsList.forEach(element => _createCategoryItem(element,category,categoriesItemListEl));
        categoriesContainer.append(categoriesItemListEl);
    }

    function _createMenuItem(category, index) {
        const menuItem = getItem(itemsByCategoryMap, category, index);
        const menuItemEl = createDomNode("li",["dish"]);
        const vegMarkEl = createDomNode("img");
        vegMarkEl.setAttribute("src", "./images/vegMark.png");
        const dishNameEl = createDomNode("p",["dish-name"],menuItem.displayName);
        const priceEl = createDomNode("p",["price"],`₹ ${menuItem.price}`);
        menuItemEl.append(vegMarkEl, dishNameEl, priceEl);
        return menuItemEl;
    }

    function _createMenuList(category) {
        const menuListEl = document.createElement("ul");
        if (itemsByCategoryMap.get(category)) {
            for (let i = 0; i < getItemListByCategory(itemsByCategoryMap, category).length; i++) {
                menuListEl.append(_createMenuItem(category, i));
            }
        }
        return menuListEl;
    }

    function _displayMenu(category) {
        const menuLength = getItemListByCategory(itemsByCategoryMap, category) ? getItemListByCategory(itemsByCategoryMap, category).length : 0;
        const menuHeading = categoryNameById(categoriesItemsList, category);
        const menuList = _createMenuList(category);
        const menuContainer = document.querySelector(".menu");
        const menuheadingEl = createDomNode("h2",undefined,menuHeading);
        const menuSubheadingEl = createDomNode("p",undefined,`${menuLength} Items`);
        menuContainer.append(menuheadingEl, menuSubheadingEl, menuList);
    }

    function _createCartList(element,cartItemsEl){
        const cartItemEl = createDomNode("li", undefined, element.name)
        cartItemEl.id = element.id;
        cartItemsEl.append(cartItemEl);
    }
    
    function _displayCart() {
        const cartLength = cartItemsList.lineItems.length;
        const cartContainer = document.querySelector(".cart");
        const cartHeading = createDomNode("h2",undefined,"Cart");
        const cartSubheading = createDomNode("p",undefined,`${cartLength} ITEMS`);
        const cartItemsEl = createDomNode("ul");
        cartItemsList.lineItems.forEach(element => _createCartList(element,cartItemsEl));
        const amountEl = createDomNode("div",["amount"]);
        const amountHeadingEl = createDomNode("h3", undefined, "Subtotal");
        const priceEl = createDomNode("p", undefined, `₹ ${cartItemsList.subTotal}`)
        const disclaimerEl = createDomNode("p", ["disclaimer"], "Extra charges may apply")
        const buttonEl = createDomNode("button", ["check-out-button"], "CHECKOUT ->")
        amountEl.append(amountHeadingEl, priceEl);
        cartContainer.append(cartHeading,cartSubheading,cartItemsEl, amountEl, disclaimerEl, buttonEl);
    }

    return {
        init: display
    };

})();

const createDomNode = (type, classList, textContent) => {
    const node = document.createElement(type);
    if(classList){
        node.classList.add(classList);
    }
    if(textContent){
        node.textContent=textContent;
    }
    return node;
}

function addElementsToCategoryMap(itemsByCategoryMap,category,element){
    if (!itemsByCategoryMap.has(category)) {
        itemsByCategoryMap.set(category, []);
    }
    itemsByCategoryMap.get(category).push(element);
}

function createItemsByCategoryMap(list) {
    const itemsByCategoryMap = new Map()
    list.forEach(element => {
        element.categories.forEach(category => addElementsToCategoryMap(itemsByCategoryMap,category,element));
    });
    return itemsByCategoryMap;
}

function categoryNameById(list, id) {
    var name;
    list.forEach((element) => {
        if (element.id == id) {
            name = element.displayName;
        }
    });
    return name;
}

function getItem(map, category, index) {
    return map.get(category)[index];
}

function getItemListByCategory(map, category) {
    return map.get(category);
}

function fetchCategoriesList() {
    return [{ "displayName": "Recommended", "id": "recommended" }, { "displayName": "Dessert and Beverages", "id": "dessert_beverage" }, { "displayName": "Biryani", "id": "biryani" }];
}

function fetchMenuList() {
    return [{ "id": "2121", "displayName": "Kadhai Paneer Biryani", "price": 249, "currency": "INR", "vegetarian": true, "imgUrl": "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=", "categories": ["recommended", "biryani"] }, { "id": "2122", "displayName": "Real Biryani", "price": 349, "currency": "INR", "vegetarian": false, "imgUrl": "https://media.istockphoto.com/photos/hyderabadi-biryani-a-popular-chicken-or-mutton-rice-preparation-picture-id466089615?k=20&m=466089615&s=612x612&w=0&h=_Z0Jlombq-VX8Pl8I9mJf_kIuvbzZ7j8ucxvRoLL8BM=", "categories": ["biryani"] }, { "id": "2123", "displayName": "Plain Veg Biryani", "price": 149, "currency": "INR", "vegetarian": true, "imgUrl": "https://media.istockphoto.com/photos/chicken-biryani-directly-above-photo-picture-id1169141170?k=20&m=1169141170&s=612x612&w=0&h=EpCF3lQF2GBRaVApNELuE5xFQfv8fyQ_wWC52hmyxeo=", "categories": ["biryani"] }];
}

function fetchCartList() {
    return { "lineItems": [{ "id": "1121", "name": "Plain Veg Biryani", "quantity": 2, "price": 149, "currency": "INR" }], "shippingFee": 0, "discount": 0, "tax": 0, "subTotal": 149 };
}

function getItem(map, category, index) {
    return map.get(category)[index];
}

function getItemListByCategory(map, category) {
    return map.get(category);
}

function categoryNameById(list,id) {
    var name;
    list.forEach((element) => {
        if (element.id == id) {
            name = element.displayName;
        }
    });
    return name;
}

function createItemsByCategoryMap(list) {
    const _itemsByCategoryMap = new Map();
    list.forEach(element => {
        element.categories.forEach(category => {
            if (!_itemsByCategoryMap.has(category)) {
                _itemsByCategoryMap.set(category, []);
            }
            _itemsByCategoryMap.get(category).push(element);
        });
    });
    return _itemsByCategoryMap;
}

pdpModule.init();