import React from "react";
export default function Categories({ categoryList, category, setCategory }) {
  return (
    <div className="categories col-4">
      <ul>
        {categoryList.map((item) => {
          const { id, displayName } = item;
          return (
            <li
              onClick={(e) => setCategory(e.target.id)}
              className={id === category ? "highlighted" : ""}
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
