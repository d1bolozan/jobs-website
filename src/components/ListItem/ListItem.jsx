import "./ListItem.scss";

const ListItem = (props) => {
  const { role, level, tools, languages } = props.job;

  const categories = [role, level, ...tools, ...languages];

  return (
    <div className={["job", props.job.featured ? "job--featured" : ""].join(" ")}>
      <div className="job__info">
        <div className="job__logo">
          <img src={props.job.logo} alt={props.job.company + "logo"} />
        </div>
        <div className="job__details">
          <div className="job__title">
            <h3 className="job__company">{props.job.company}</h3>
            <div className="job__group">
              {props.job.new && <span className="job__new">NEW!</span>}
              {props.job.featured && <span className="job__featured">FEATURED</span>}
            </div>
          </div>
          <div className="job__position">{props.job.position}</div>
          <div className="job__credits">
            <span className="job__postedAt">{props.job.postedAt}</span>
            <span className="circle"></span>
            <span className="job__contract">{props.job.contract}</span>
            <span className="circle"></span>
            <span className="job__location">{props.job.location}</span>
          </div>
        </div>
      </div>
      <div className="job__categories">
        {categories.map((category, index) => {
          return (
            <div className="job__category" key={index}>
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItem;
