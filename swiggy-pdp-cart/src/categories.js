import React from "react";
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  handleCategoryChange(e) {
    this.props.onCategoryChange(e.target.id);
  }
  render() {
    return (
      <div className="categories col-4">
        <ul>
          {this.props.list.map((item) => (
            <li
              onClick={this.handleCategoryChange}
              className={item.id === this.props.category ? "highlighted" : ""}
              id={item.id}
              key={item.id}
            >
              {item.displayName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
