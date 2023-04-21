import './App.css';
import SkinCancer from './components/SkinCancer';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
        <h1>Skin Cancer Classification</h1>
        <Routes>
            <Route path="/" exact element={<SkinCancer />} />
            <Route path="/out" exact element={<Result />} />
        </Routes>
    </div>
  );
}

export default App;
