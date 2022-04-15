import React from "react";
import categoryCSS from './categories.module.css'
export default function Categories({ categoryList, category, setCategory }) {
  function renderCategory(){
    return categoryList.map((item) => {
      const { id, displayName } = item;
      const highlightedClass = id === category ? categoryCSS.highlighted : "";
      return (
        <li
          onClick={(e) => setCategory(e.target.id)}
          className={highlightedClass}
          id={id}
          key={id}
        >
          {displayName}
        </li>
      );
    })
  }
  return (
    <div className={`${categoryCSS.categories} col-4`}>
      <ul>
        {renderCategory()}
      </ul>
    </div>
  );
}
