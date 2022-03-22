import React from "react";
import Menu from "./menu";
import Cart from "./cart";
import Categories from "./categories";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      category: "recommended",
    };
  }

  createMenuList(category) {
    const menu = fetchMenuList();
    const menuList = menu.filter((dish) => dish.categories.includes(category));
    return menuList;
  }

  handleChange(category) {
    this.setState({
      category: category,
    });
  }
  render() {
    const categoryList = fetchCategoriesList();
    const menuList = this.createMenuList(this.state.category);
    const menuHeading = categoryNameById(this.state.category, categoryList);
    return (
      <div className="content">
        <Categories
          category={this.state.category}
          list={categoryList}
          onCategoryChange={this.handleChange}
        />
        <Menu menuHeading={menuHeading} list={menuList} />
        <Cart />
      </div>
    );
  }
}
function categoryNameById(id, list) {
  var name;
  list.forEach((element) => {
    if (element.id === id) {
      name = element.displayName;
    }
  });
  return name;
}
function fetchCategoriesList() {
  return [
    { displayName: "Recommended", id: "recommended" },
    { displayName: "Dessert and Beverages", id: "dessert_beverage" },
    { displayName: "Biryani", id: "biryani" },
  ];
}

function fetchMenuList() {
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
