import './App.css';
import Navbar from './Compoments/Navbar/Navbar.js';
import Navbar2 from "./Compoments/Navbar/Navbar2";
import Footer from "./Compoments/Footer/Footer.js";
import Logo from "./Compoments/Navbar/Logo.js";
import Menu from "./Compoments/Navbar/Menu.js";
import Content from "./Compoments/Content/Content.js";
import Home from "./Compoments/Content/Home.js";
import Content3 from "./Compoments/Content/Content3.js";

function App() {
  return (
    <div className="page-container">
      <div className="navbar-header">
        <Navbar />
      </div>
      <div className="content-warp">
        {/* Home-section */}
        <section className="section">
          <div className="content">
            <div className="home-content">
              <div className="home-banner">
              </div>
              <div className="welcom">
                Welcome
            </div>
              <Home />
            </div>
          </div>
          {/* <div className="home-scroll-container">
          </div> */}
        </section>
        <div>
          {/* section1 */}
          <section className="section">
            <div>
              <Content />
            </div>
          </section>
          {/* section2 */}
          <section className="section2">
            <div className="content-margin">
              <Content3 />
            </div>
          </section>
          {/* section3 */}
          <section className="section">
            <div>
              <Content />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
