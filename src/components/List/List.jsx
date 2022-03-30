import ListItem from "../ListItem/ListItem";
import "./List.scss";

const List = (props) => {
  return (
    <div className="jobs" style={props.isFilter && { marginTop: 140 }}>
      {props.jobs.map((job) => {
        return <ListItem key={job.id} job={job} />;
      })}
    </div>
  );
};

export default List;
