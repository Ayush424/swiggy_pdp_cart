import React from "react";
import CategoryCSS from './categories.module.css'
export default function Categories({ categoryList, category, setCategory }) {
  return (
    <div className={CategoryCSS.categories + ' col-4'}>
      <ul>
        {categoryList.map((item) => {
          const { id, displayName } = item;
          return (
            <li
              onClick={(e) => setCategory(e.target.id)}
              className={id === category ? CategoryCSS.highlighted : ""}
              id={id}
              key={id}
            >
              {displayName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
