import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { NavBar } from './components/NavBar';
import { Alimentacao } from './Pages/Alimentacao';
import { Treino } from './Pages/Treino';
import { Metas } from './Pages/Metas';
import { Progresso } from './Pages/Progresso';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/alimentacao' element={<Alimentacao/>}></Route>
      <Route path='/treino' element={<Treino/>}></Route>
      <Route path='/meta' element={<Metas/>}></Route>
      <Route path='/progresso' element={<Progresso/>}></Route>
    </Routes>
    </>
  );
}

export default App;
