import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Broker from './pages/Broker';
import Home from './pages/Home';
import Class from './pages/Class';
import ChatBot from './pages/ChatBot';
import { useState } from 'react';

function App() {
  const [chatList, setChatList] = useState([
    {
      "role":"AI",
      "message":"Hello, how can I help you?"
  //   },{
  //   "role":"user",
  //   "message":"Hello, how can I help you?"
  // },{
  //   "role":"user",
  //   "message":"Hello, how can I help you?"
  // },{
  //   "role":"user",
  //   "message":"Hello, how can I help you?"
  // },{
  //   "role":"user",
  //   "message":"Hello, how can I help you?"
  // },{
  //   "role":"user",
  //   "message":"Hello, how can I help you?"
  // },{
  //   "role":"AI",
  //   "message":"Hello, how can I help you?"
  }]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/broker" element={<Broker chatList={chatList} setChatList={setChatList} />} />
          <Route path="/class" element={<Class chatList={chatList} setChatList={setChatList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
