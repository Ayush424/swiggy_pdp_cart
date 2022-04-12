import vegMark from "../../../../../images/vegMark.png";
import DishCSS from "./dish.module.css"
export default function Dish({name,price,alt}) {
    return (
      <li className={DishCSS.dish}>
        <img src={vegMark} alt={alt} />
        <p className={DishCSS.dishName}>{name}</p>
        <p className={DishCSS.price}>₹ {price}</p>
      </li>
    );
  }