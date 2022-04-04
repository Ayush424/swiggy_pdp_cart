class Model {
  constructor() {
    this.categoryList = this.fetchCategoriesList();
    this.currentCategory = "recommended";
    this.menuList = [
      {
        id: "2121",
        displayName: "Kadhai Paneer Biryani",
        price: 249,
        currency: "INR",
        vegetarian: true,
        imgUrl:
          "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=",
        categories: ["recommended", "biryani"],
      },
    ];
  }
  
  categoryNameById(id) {
    var name;
    this.categoryList.forEach((element) => {
      if (element.id == id) {
        name = element.displayName;
      }
    });
    return name;
  }

  changeMenuList(category) {
    this.currentCategory = category;
    this.menuList = [];
    var menu = this.fetchMenuList();
    this.menuList = menu.filter((dish) => dish.categories.includes(category));
  }

  fetchCategoriesList() {
    return [
      { displayName: "Recommended", id: "recommended" },
      { displayName: "Dessert and Beverages", id: "dessert_beverage" },
      { displayName: "Biryani", id: "biryani" },
    ];
  }

  fetchMenuList() {
    return [
      {
        id: "2121",
        displayName: "Kadhai Paneer Biryani",
        price: 249,
        currency: "INR",
        vegetarian: true,
        imgUrl:
          "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=",
        categories: ["recommended", "biryani"],
      },
      {
        id: "2122",
        displayName: "Real Biryani",
        price: 349,
        currency: "INR",
        vegetarian: false,
        imgUrl:
          "https://media.istockphoto.com/photos/hyderabadi-biryani-a-popular-chicken-or-mutton-rice-preparation-picture-id466089615?k=20&m=466089615&s=612x612&w=0&h=_Z0Jlombq-VX8Pl8I9mJf_kIuvbzZ7j8ucxvRoLL8BM=",
        categories: ["biryani"],
      },
      {
        id: "2123",
        displayName: "Plain Veg Biryani",
        price: 149,
        currency: "INR",
        vegetarian: true,
        imgUrl:
          "https://media.istockphoto.com/photos/chicken-biryani-directly-above-photo-picture-id1169141170?k=20&m=1169141170&s=612x612&w=0&h=EpCF3lQF2GBRaVApNELuE5xFQfv8fyQ_wWC52hmyxeo=",
        categories: ["biryani"],
      },
    ];
  }

  fetchCartObject() {
    return {
      lineItems: [
        {
          id: "1121",
          name: "Plain Veg Biryani",
          quantity: 2,
          price: 149,
          currency: "INR",
        },
      ],
      shippingFee: 0,
      discount: 0,
      tax: 0,
      subTotal: 149,
    };
  }
}

class View {
  constructor() {
    this.cart = this.getElement(".cart");
    this.menu = this.getElement(".menu");
    this.categories = this.getElement(".categories");
  }

  bindChangeCategory(handler) {
    const categoryItems = document.querySelector(".categories");
    categoryItems.addEventListener("click",(event)=>{
      if(event.target.className=='category'||event.target.className=='category highlighted')
      {
        handler(event.target.id);
      }
    });
  }

  displayCategory(categoryList, currentCategory) {
    while (this.categories.hasChildNodes()) {
      this.categories.removeChild(this.categories.firstChild);
    }
    const categoryItemsListEl = this.createElement("ul");
    categoryList.forEach((element) => {
      const categoryItemEl = this.createElement("li", "category");
      if (element.id == currentCategory) {
        categoryItemEl.classList.add("highlighted");
      }
      categoryItemEl.id = element.id;
      categoryItemEl.innerText = element.displayName;
      categoryItemsListEl.append(categoryItemEl);
    });
    this.categories.append(categoryItemsListEl);
  }

  displayMenu(menuList, currentCategory) {
    while (this.menu.hasChildNodes()) {
      this.menu.removeChild(this.menu.firstChild);
    }
    const menuHeadingEl = this.createElement("h2");
    menuHeadingEl.textContent = `${currentCategory}`;
    const menuSubheadingEl = this.createElement("p");
    menuSubheadingEl.textContent = `${menuList.length} Items`;
    const menuListEl = this.createElement("ul");
    menuList.forEach((menuItem) => {
      const menuItemEl = this.createElement("li", "dish");
      const vegMarkEl = this.createElement("img");
      vegMarkEl.setAttribute("src", "./images/vegMark.png");
      const dishNameEl = this.createElement("p", "dish-name");
      dishNameEl.textContent = menuItem.displayName;
      const priceEl = this.createElement("p", "price");
      priceEl.textContent = `₹ ${menuItem.price}`;
      menuItemEl.append(vegMarkEl, dishNameEl, priceEl);
      menuListEl.append(menuItemEl);
    });
    this.menu.append(menuHeadingEl, menuSubheadingEl, menuListEl);
  }

  displayCart(cartDataObject) {
    const cartSubheading = this.cart.querySelector("p");
    cartSubheading.textContent = `${cartDataObject.lineItems.length} Items`;
    const cartItemsEl = this.createElement("ul");
    cartDataObject.lineItems.forEach((element) => {
      const cartItemEl = this.createElement("li");
      cartItemEl.id = element.id;
      cartItemEl.innerText = element.name;
      cartItemsEl.appendChild(cartItemEl);
    });
    const amountEl = this.createElement("div", "amount");
    const amountHeadingEl = this.createElement("h3");
    amountHeadingEl.textContent = "Subtotal";
    const priceEl = this.createElement("p");
    priceEl.textContent = `₹ ${cartDataObject.subTotal}`;
    const disclaimerEl = this.createElement("p", "disclaimer");
    disclaimerEl.textContent = "Extra charges may apply";
    const buttonEl = this.createElement("button", "check-out-button");
    buttonEl.innerText = "CHECKOUT ->";
    amountEl.append(amountHeadingEl, priceEl);
    this.cart.append(cartItemsEl, amountEl, disclaimerEl, buttonEl);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onCategoriesChanged(
      this.model.categoryList,
      this.model.menuList,
      this.model.currentCategory
    );
    this.view.displayCart(this.model.fetchCartObject());
  }

  onCategoriesChanged = (categoryList, menuList, currentCategory) => {
    this.view.displayMenu(
      menuList,
      this.model.categoryNameById(currentCategory)
    );
    this.view.displayCategory(categoryList, currentCategory);
    this.view.bindChangeCategory(this.handleCategoryChange);
  };

  handleCategoryChange = (category) => {
    this.model.changeMenuList(category);
    this.onCategoriesChanged(
      this.model.categoryList,
      this.model.menuList,
      this.model.currentCategory
    );
  };
}

const app = new Controller(new Model(), new View());
