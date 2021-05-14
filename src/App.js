import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
