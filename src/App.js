import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes, Route, useLocation,
  useNavigate,
} from 'react-router-dom';
import Header from './components/Header';
import Continent from './pages/Continent';
import Home from './pages/Home';
import { setHistory } from './store/history';

let navigatedByCode = false;

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const route = useSelector((state) => state.route);

  useEffect(() => {
    if (navigatedByCode === true) {
      navigatedByCode = false;
    } else {
      dispatch(setHistory(location.pathname));
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== route) {
      navigatedByCode = true;
      navigate(route);
    }
  }, [route]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/:continent" element={<Continent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
