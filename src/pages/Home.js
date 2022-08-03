/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoronavirusDataFromAPI } from '../store/data';
import { setQuery } from '../store/continentQuery';

let apiCalled = false;

const Home = () => {
  const data = useSelector((state) => state.entities.data);
  const query = useSelector((state) => state.entities.continentQuery);
  const dispatch = useDispatch();

  if (apiCalled === false && data === null) {
    apiCalled = true;
    dispatch(fetchCoronavirusDataFromAPI());
  }
  if (data) {
    const listItems = [];

    Object.keys(data.global).forEach((key) => {
      if (key !== 'all' && key.toLowerCase().includes(query.toLowerCase())) {
        listItems.push(
          <div
            key={key}
            className="continentListItem"
            style={{
              backgroundImage: `url('./images/continents/${key.toLowerCase().replace(' ', '_')}.svg')`,
            }}
          >
            <Link to={`/${key}`}>
              <i className="fa-regular fa-circle-right" style={{ color: 'white' }} />
            </Link>
            <p>{key}</p>
            <p>{`${data.global[key].all}`}</p>
          </div>,
        );
      }
    });

    const handleQuery = (event) => {
      if (query !== event.target.value) dispatch(setQuery(event.target.value));
    };

    return (
      <main>
        <div className="global">
          <img
            className="globalIcon"
            src="./images/global_map.svg"
            alt="globe icon"
            width={200}
          />
          <div className="globalInfo">
            <p className="globalTitle">Global</p>
            <p className="globalCases">{`${data.global.all} cases`}</p>
          </div>
        </div>
        <div className="searchBar">
          <input name="query" value={query} onChange={handleQuery} placeholder="Search continent" />
        </div>
        <div className="continentHeading">
          <h3>Continent breakdown</h3>
        </div>
        <ul className="continentList">{listItems}</ul>
      </main>
    );
  }
  return (
    <>
      <p>Loading...</p>
    </>
  );
};

export default Home;
