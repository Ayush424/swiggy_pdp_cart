import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { changeCategory } from "../redux/category/categoryActions";

export default function Categories(props){
  const dispatch = useDispatch();
  const category = useSelector(state=>state.category);
  return (
    <div className="categories col-4">
      <ul>
        {props.list.map((item) => (
          <li
            onClick={(e)=>dispatch(changeCategory(e.target.id))}
            className={item.id === category ? "highlighted" : ""}
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
