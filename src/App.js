import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Broker from './pages/Broker';
import Home from './pages/Home';
import Class from './pages/Class';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/class" element={<Class />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
