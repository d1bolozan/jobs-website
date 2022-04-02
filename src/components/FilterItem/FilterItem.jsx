import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const handleDeleteButton = (event) => {
    props.onDelete(props.name);
  };

  return (
    <div className="filter__item item">
      <span className="item__name">{props.name}</span>
      <span className="item__btn" onClick={handleDeleteButton}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.435 2.12132L11.3137 0L6.71751 4.59619L2.12132 0L0 2.12132L4.59619 6.71751L0 11.3137L2.12132 13.435L6.71751 8.83883L11.3137 13.435L13.435 11.3137L8.83883 6.71751L13.435 2.12132Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  );
};

export default FilterItem;
