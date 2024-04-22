import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './pages/Courses';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Detail from './pages/Detail';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/top" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:id" element={<Detail />} />
          <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;