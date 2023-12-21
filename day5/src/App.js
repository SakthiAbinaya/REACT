
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import RenderingList from './components/RenderingList';
import './App.css';
import ButtonMUI from './components/ButtonMUI';
import GridMUI from './components/GridMUI';
import InlineStyling from './components/InlineStyling';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RenderingList/>}/>
      </Routes>
      </BrowserRouter>
      <ButtonMUI/>
      <GridMUI/>
      <InlineStyling/>
    </div>
  );
}

export default App;
