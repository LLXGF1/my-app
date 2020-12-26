import './App.css';
import Navbar from './Compoments/Navbar/Navbar.js';
import Footer from "./Compoments/Footer/Footer.js"
import Content from "./Compoments/Content/Content.js"

function App() {
  return (
    <div className="page-container">
      <div>
          <Navbar/>    
      </div>
      <div className="content-warp">
        <section className="home-section">
        <div className="content">
          <div className="home-content">
            <div className="home-banner">
            </div>
            <div className="welcom">
                Welcome
            </div>
            <Content/>
          </div>
        </div>
        </section>
        <div>
          <Content/>
        </div>
        <div>
          <Content/>
        </div>
        <div>
          <Content/>
        </div>
        <div>
          <Content/>
        </div>
        <div>
          <Content/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
