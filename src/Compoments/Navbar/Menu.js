import React from 'react';

function Menu() {
    return (
        <div className="menu-open" open>
            <div className="menu-container">
                <button aria-label="close" className="menu-closeButton">
                    <i className="menu-icon">
                        X
                    </i>
                </button>
                <div className="menu-inner">
                    {/* col1 */}
                    <div className="menu-message">
                        <a className="menu-button">
                            Col1
                        </a>
                        <div className="menu-discription">
                            discription1
                        </div>
                    </div>
                    {/* col2 */}
                    <div className="menu-message">
                        <a className="menu-button">
                            Col2
                        </a>
                        <div className="menu-discription">
                            discription2
                        </div>
                    </div>
                    {/* col3 */}
                    <div className="menu-message">
                        <a className="menu-button">
                            Col3
                        </a>
                        <div className="menu-discription">
                            discription3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;