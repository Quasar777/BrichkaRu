import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Autos from './pages/Autos/Autos';
import Trucks from './pages/Trucks/Trucks';
import AdPage from './pages/AdPage/AdPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage /> }>
          <Route path='autos' element={ <Autos /> } />
          <Route path='autos/:id' element={ <AdPage /> } />
          <Route path='trucks' element={ <Trucks /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
