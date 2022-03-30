import FilterItem from "../FilterItem/FilterItem";
import "./Filter.scss";

const Filter = () => {
  const items = ["Frontend", "CSS", "Javascript"];

  return (
    <div className="filter">
      <div className="filter__items">
        {items.map((item, index) => (
          <FilterItem key={index} name={item} />
        ))}
      </div>
      <div className="filter__btn">Clear</div>
    </div>
  );
};

export default Filter;
