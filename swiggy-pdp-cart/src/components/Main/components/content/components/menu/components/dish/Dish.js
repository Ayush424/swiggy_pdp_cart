import vegMark from "./images/vegMark.png";
import dishCSS from "./dish.module.css"
export default function Dish({name,price,alt}) {
    return (
      <li className={dishCSS.dish}>
        <img src={vegMark} alt={alt} />
        <p className={dishCSS.dishName}>{name}</p>
        <p className={dishCSS.price}>₹ {price}</p>
      </li>
    );
  }