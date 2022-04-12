import vegMark from "../images/vegMark.png";

export default function Dish({name,price,alt}) {
    return (
      <li className="dish">
        <img src={vegMark} alt={alt} />
        <p className="dish-name">{name}</p>
        <p className="price">₹ {price}</p>
      </li>
    );
  }