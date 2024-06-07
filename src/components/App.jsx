import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Postcard from './Postcard/Postcard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invitation/:key" element={<Postcard />} />
      </Routes>
    </Router>
  );
}

export default App;
