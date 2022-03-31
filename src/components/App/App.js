import { useEffect, useState } from "react";
import Loader from "../../util/Loader/Loader";
import Filter from "../Filter/Filter";
import List from "../List/List";
import "./App.scss";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    return fetch("./data.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setIsLoading((prevState) => !prevState);
        return setJobs(jsonResponse);
      });
  };

  const filterItems = (jobs, tag) => {
    return jobs.filter((job) => {
      return (
        job.languages.indexOf(tag) !== -1 ||
        job.tools.indexOf(tag) !== -1 ||
        job.role === tag ||
        job.level === tag
      );
    });
  };

  const addItemToFilter = (value) => {
    if (filter.indexOf(value) > -1) {
      return;
    }
    setFilter((prevState) => [...prevState, value]);
    setJobs((prevState) => filterItems(prevState, value));
    if (!isFilter) {
      setIsFilter(true);
    }
  };

  const clearFilterItems = () => {
    setFilter([]);
    setIsFilter((prevState) => !prevState);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          {isFilter && <Filter items={filter} onClear={clearFilterItems} />}
        </div>
      </header>
      <main className="main">
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <List jobs={jobs} isFilter={isFilter} onAdd={addItemToFilter} />
          )}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
