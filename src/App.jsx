import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer'; // Footer 컴포넌트 가져오기
import LoginBox from './components/LoginBox';
import Find from './pages/find';
import Join from './pages/join';
import Passwd from './pages/passwd';


function App() {
  const [state, setState] = useState(false);
  return (
    <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LoginBox />} />
            <Route path="/join" element={<Join />} />
            <Route path='/find' element={<Find type="id"/>} />
            <Route path='passwd' element={<Find type="Passwd" />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}
export default App;