import React from "react";
import Menu from "./menu";
import Cart from "./cart";
import Categories from "./categories";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList:[],
      category: "recommended",
      menu:[],
    };
  }

  componentDidMount(){
    fetchCategoriesList().then((data)=>this.setState({categoryList:data}));
    fetchMenuList().then((data)=>this.setState({menu:data}));
  }

  createMenuList(category) {
    const menuList = this.state.menu.filter((dish) => dish.categories.includes(category));
    return menuList;
  }

  handleChange=(category)=>{
    this.setState({
      category: category,
    });
  }
  render() {
    const menuList = this.createMenuList(this.state.category);
    const menuHeading = categoryNameById(this.state.category, this.state.categoryList);
    return (
      <div className="content">
        <Categories
          category={this.state.category}
          list={this.state.categoryList}
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

function fetchCategoriesList(){
  const url="http://localhost:8080/categories";
  const response = fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.log(error);
      });
      return response;
}

function fetchMenuList() {
  const url="http://localhost:8080/menu-items";
  const response = fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.log(error);
      });
      return response;
}
