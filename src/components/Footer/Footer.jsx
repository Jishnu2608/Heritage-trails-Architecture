import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            
            {/*left side*/}

            <div className="flexColStart f-left">
            <button onClick={() => window.scrollTo(0, 0)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0' }}>
                    <img src="./logo2.png" alt="logo" width={300}/>
            </button>
                <span className="secondaryText" style={{color: "#1f3e72"} }>
                Embark on a captivating expedition through Heritage Trails - North-East India, <br/>
                delving into the untold stories and remarkable heritage of the enchanting seven sisters.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText" style={{color: "#1f3e72"} }>Tezpur, Assam - 784001<br/>© 2023 Jishnudeep Borah. All rights reserved.</span>

                
            </div>
        </div>
    </section>
    );
}

export default Footer