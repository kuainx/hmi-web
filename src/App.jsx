import Shop from './components/Shop';
import Pay from './components/Pay';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/pay' element={<Pay />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
