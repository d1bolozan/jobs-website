import FilterItem from "../FilterItem/FilterItem";
import "./Filter.scss";

const Filter = (props) => {
  const handleClearButton = () => {
    props.onClear();
  };

  return (
    <div className="filter">
      <div className="filter__items">
        {props.items.map((item) => (
          <FilterItem key={item} name={item} onDelete={props.onDelete}/>
        ))}
      </div>
      <div className="filter__btn" onClick={handleClearButton}>
        Clear
      </div>
    </div>
  );
};

export default Filter;
