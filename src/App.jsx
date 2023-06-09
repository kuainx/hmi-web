import Shop from './components/Shop';
import Pay from './components/Pay';
import Finish from './components/Finish';
import Start from './components/Start';
import Change from './components/Change';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Shop2 from './components/Shop2';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/pay' element={<Pay />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/change' element={<Change />}></Route>
        <Route path='/finish' element={<Finish />}></Route>
        <Route path='/shop2' element={<Shop2 />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
