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
        const categoriesItemEl = createDomNode({type:"li",textContent:element.displayName,id:element.id});
        if (element.id == category) {
            categoriesItemEl.classList.add("highlighted");
        }
        categoriesItemEl.addEventListener('click', event => {
            _changeCategory(event.target);
        });
        categoriesItemListEl.append(categoriesItemEl);
    }
    
    function _displayCategories(category) {
        const categoriesContainer = document.querySelector(".categories");
        const categoriesItemListEl = createDomNode({type:"ul"});
        categoriesItemsList.forEach(element => _createCategoryItem(element,category,categoriesItemListEl));
        categoriesContainer.append(categoriesItemListEl);
    }

    function _createMenuItem(category, index) {
        const menuItem = getItem(itemsByCategoryMap, category, index);
        const menuItemEl = createDomNode({type:"li",classList:["dish"]});
        const vegMarkEl = createDomNode({type:"img"});
        vegMarkEl.setAttribute("src", "./images/vegMark.png");
        const dishNameEl = createDomNode({type:"p",classList:["dish-name"],textContent:menuItem.displayName});
        const priceEl = createDomNode({type:"p",classList:["price"],textContent:`₹ ${menuItem.price}`});
        menuItemEl.append(vegMarkEl, dishNameEl, priceEl);
        return menuItemEl;
    }

    function _createMenuList(category) {
        const menuListEl = createDomNode({type:"ul"});
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
        const menuheadingEl = createDomNode({type:"h2",textContent:menuHeading});
        const menuSubheadingEl = createDomNode({type:"p",textContent:`${menuLength} Items`});
        menuContainer.append(menuheadingEl, menuSubheadingEl, menuList);
    }

    function _createCartList(element,cartItemsEl){
        const cartItemEl = createDomNode({type:"li",textContent:element.name,id:element.id});
        cartItemsEl.append(cartItemEl);
    }
    
    function _displayCart() {
        const cartLength = cartItemsList.lineItems.length;
        const cartContainer = document.querySelector(".cart");
        const cartHeading = createDomNode({type:"h2",textContent:"Cart"});
        const cartSubheading = createDomNode({type:"p",textContent:`${cartLength} ITEMS`});
        const cartItemsEl = createDomNode({type:"ul"});
        cartItemsList.lineItems.forEach(element => _createCartList(element,cartItemsEl));
        const amountEl = createDomNode({type:"div",classList:["amount"]});
        const amountHeadingEl = createDomNode({type:"h3",textContent: "Subtotal"});
        const priceEl = createDomNode({type:"p",textContent: `₹ ${cartItemsList.subTotal}`});
        const disclaimerEl = createDomNode({type:"p",classList:["disclaimer"],textContent: "Extra charges may apply"});
        const buttonEl = createDomNode({type:"button",classList:["check-out-button"],textContent: "CHECKOUT ->"});
        amountEl.append(amountHeadingEl, priceEl);
        cartContainer.append(cartHeading,cartSubheading,cartItemsEl, amountEl, disclaimerEl, buttonEl);
    }

    return {
        init: display
    };

})();

const createDomNode = ({type, classList, textContent,id}) => {
    const node = document.createElement(type);
    if(classList){
        node.classList.add(classList);
    }
    if(textContent){
        node.textContent=textContent;
    }
    if(id){
        node.id=id;
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