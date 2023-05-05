import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
