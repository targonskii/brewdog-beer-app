import './App.css';
import { Routes, Route } from 'react-router-dom';

import Aboutpage from './pages/Aboutpage';
import Beerpage from './pages/Beerpage';
import Homepage from './pages/Homepage';
import Notfoundpage from './pages/Notfoundpage';
import Brewdogapp from './pages/Brewdogapp';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout /> } >
          <Route index element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/app' element={<Brewdogapp />} />
          <Route path='/beer/:id' element={<Beerpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;