import ListItem from "../ListItem/ListItem";
import "./List.scss";

const List = (props) => {
  return (
    <div className={["jobs", props.isFilter ? "filter-active" : ""].join(" ")}>
      {props.jobs.map((job) => {
        return <ListItem key={job.id} job={job} onAdd={props.onAdd} />;
      })}
    </div>
  );
};

export default List;
