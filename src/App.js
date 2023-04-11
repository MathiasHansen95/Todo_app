import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./Components/Homepage";
    import ShowList from "./Components/ShowList";

function App() {

  return (
              <Router>
                  <Routes>
                      <Route path={"/list"} element={<ShowList/>}/>
                      <Route path={"/"} element={<Homepage/>}/>
                  </Routes>
              </Router>

  );
}

export default App;
