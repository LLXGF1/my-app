import React from 'react';
import "./Footer.css"
import IG from "../../images/instagram.png"

function Footer() {
    return (
        <div className="main-footer"> 
            <div className="container">
                <div className="row">
                    {/* colum1 */}
                    <div className="col">
                        <h5>Col 1</h5>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3 </li>
                        </ul>
                    </div>
                    {/* colum2 */}
                    <div className="col">
                        <h5>Col2</h5>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    {/* colum3 */}
                    <div className="col">
                        <h5>Col3</h5>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} <img src={IG} alt="IG logo" height="20"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

    );
}
export default Footer;