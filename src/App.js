import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/gethelp" element={<Gethelp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
