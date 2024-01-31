import About from 'components/about/about';
import Home from 'components/home/home';
import NavBar from 'components/navbar/navbar';
import Upload from 'components/upload/upload';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="app-body">
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/upload" Component={Upload} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
