import './App.css';
import Navbar from './Compoments/Navbar/Navbar.js';
import Footer from "./Compoments/Footer/Footer.js"

function App() {
  return (
    <div className="page-container">
      <div className="content-warp">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
