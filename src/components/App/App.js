import { useEffect, useState } from "react";
import Loader from "../../util/Loader/Loader";
import Filter from "../Filter/Filter";
import List from "../List/List";
import data from "../../data/data.json";
import "./App.scss";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setJobs(data.filter(filterCallback));
    setIsLoading(false);
  }, [filters]);

  const filterCallback = ({ role, level, languages, tools }) => {
    if (filters.length === 0) return true;

    const temp = [role, level];

    if (languages) temp.push(...languages);
    if (tools) temp.push(...tools);

    return filters.every((tag) => temp.includes(tag));
  };

  const clearFilterItems = () => {
    setFilters([]);
  };

  const deleteItemFromFilter = (remove) => {
    setFilters(filters.filter((item) => item !== remove));
  };

  const addItemToFilter = (item) => {
    setIsLoading(!isLoading);
    if (filters.includes(item)) return;
    setFilters([...filters, item]);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          {filters.length > 0 && (
            <Filter
              items={filters}
              onClear={clearFilterItems}
              onDelete={deleteItemFromFilter}
            />
          )}
        </div>
      </header>
      <main className="main">
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <List
              isFilter={filters.length > 0}
              jobs={jobs}
              onAdd={addItemToFilter}
            />
          )}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
