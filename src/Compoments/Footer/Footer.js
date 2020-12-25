import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <div className="main-footer"> 
            <div className="container">
                <div className="row">
                    {/* colum1 */}
                    <div className="col">
                        <h4>Col 1</h4>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3 </li>
                        </ul>
                    </div>
                    {/* colum2 */}
                    <div className="col">
                        <h4>Col2</h4>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    {/* colum3 */}
                    <div className="col">
                        <h4>Col3</h4>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

    );
}
export default Footer;