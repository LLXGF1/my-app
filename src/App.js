import './App.css';
import Navbar from './Compoments/Navbar/Navbar.js';
import Navbar2 from "./Compoments/Navbar/Navbar2";
import Footer from "./Compoments/Footer/Footer.js";
import Logo from "./Compoments/Navbar/Logo.js";
import Menu from "./Compoments/Navbar/Menu.js";
import Content from "./Compoments/Content/Content.js";
import Content1 from "./Compoments/Content/Content1.js";
import Content2 from "./Compoments/Content/Content2.js";
import Content3 from "./Compoments/Content/Content3.js";

function App() {
  return (
    <div className="page-container">
      <div className="navbar-header">
        <Navbar />
      </div>
      <div className="content-warp">
        {/* Home-section */}
        <section className="section1">
          <div className="content">
            <div className="home-content">
              <div className="home-banner">
              </div>
              <div className="welcom">
                Welcome
            </div>
              <Content1 />
            </div>
          </div>
          {/* <div className="home-scroll-container">
          </div> */}
        </section>
        <div>
          {/* section1 */}
          <section className="section2">
            <div>
              <Content2 />
            </div>
          </section>
          {/* section2 */}
          <section className="section3">
            <div className="section3-blog">
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
