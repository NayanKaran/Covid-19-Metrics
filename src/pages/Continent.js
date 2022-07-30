import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoronavirusDataFromAPI } from '../store/data';

let apiCalled = false;

const Continent = () => {
  const data = useSelector((state) => (state.entities.data));
  const { continent } = useParams();
  const continentCap = continent[0].toUpperCase() + continent.substring(1);
  const dispatch = useDispatch();
  if (apiCalled === false && data === null) {
    apiCalled = true;
    dispatch(fetchCoronavirusDataFromAPI());
  }

  if (data) {
    const listItems = [];
    Object.keys(data.global[continentCap]).forEach((key) => {
      if (key !== 'all') {
        listItems.push(
          <div key={key} className="countryListItem">
            <p className="countryName">{key}</p>
            <p className="countryCases">{`${data.global[continentCap][key]} cases`}</p>
          </div>,
        );
      }
    });
    return (
      <main>
        <div className="continent">
          <img
            className="continentIcon"
            src={`./images/continents/${continent.toLowerCase().replace(' ', '_')}.svg`}
            alt={`${continent} icon`}
            width={200}
          />
          <div className="continentInfo">
            <p className="continentName">{continentCap}</p>
            <p className="continentCases">{data.global.all}</p>
          </div>
        </div>
        <h3 className="countryHeading">Countries breakdown</h3>
        <ul className="countryList">
          {listItems}
        </ul>
      </main>
    );
  }
  return (
    <>
      <p>Loading...</p>
    </>
  );
};

export default Continent;
