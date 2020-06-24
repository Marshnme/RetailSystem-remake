import React from 'react';
import './dashboard.css';

const Dashboard = () => {
    return(
        <div className="parent">
            <nav>
                <div className="nav-img" >
                    <h1>IMG</h1>
                </div>
                <div className="links">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>POS Systems</li>
                        <li>Security Systems</li>
                        <li>Customer Support</li>
                        <li>CONNECT TO RSI RESCUE</li>
                    </ul>
                </div>
                {/* <div className="rescue">
                    <a href='#'>CONNECT TO RSI RESCUE</a>
                </div> */}
            </nav>
            <header>
                <div>
                    <h1>Professional Point Of Sale Services.</h1>
                </div>
            </header>
            <section className="rsi-service">
                <div className="section-banner-RSI">
                    <h1>RSI SERVICES</h1>
                </div>
            </section>
            <hr/>
            <section className="net-service">
                <div className="section-banner">
                    <h1>NETWORK SERVICES</h1>
                </div>
                <div className="pair">
                    <div>
                        <h2>Always online</h2>
                        <p>Never close your doors to internet outages again. Retail systems Inc untilizes cradle point technologies that switch over to a 4g data connection when your internet is down.</p>
                    </div>
                    <div>
                        <p>IMG</p>
                    </div>
                </div>
                <div className="pair">
                    <div>
                        <p>IMG</p>
                    </div>
                    <div>
                        <h2>Network Management</h2>
                        <p>Installation,configuration and support on your businesses network.</p>
                    </div>
                </div>
                <div className="pair"> 
                    <div>
                        <h2>Network Security</h2>
                        <p>Systems Inc employs firewalls and strict security measures to keep your data safe.</p>
                    </div>
                    <div>
                        <p>IMG</p>
                    </div>
                </div>
                
            </section>
            <hr/>
            <section className="rsi-support">
                <div className="section-banner">
                    <h1>RSI SUPPORT</h1>
                </div>
                <div className="pair">
                    <div>
                        <p>IMG</p>
                    </div>
                    <div>
                        <h2>Submit Support Tickets Online.</h2>
                        <p>Submit a support ticket and have a specialist reach out to you via email.</p>
                    </div>
                </div>
                <div className="pair">
                    <div>
                        <h2>Software Support</h2>
                        <p>Get 24/7 software support on your businesses point of sale system.</p>
                    </div>
                    <div>
                        <p>IMG</p>
                    </div>
                </div>
                <div className="pair">
                    <div>
                        <p>IMG</p>
                    </div>
                    <div>
                        <h2>Hardware Support</h2>
                        <p>24/7 hardware support and 24/7 on site hardware support in select areas.</p>
                    </div>
                </div>
                <div className="pair">
                    <div>
                        <h2>Remote Support</h2>
                        <p>With RSI-RESCUE out support team can securely remote in your system to correct any issues you are having.</p>
                    </div>
                    <div>
                        <p>IMG</p>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="POS-systems">
                <div className="section-banner">
                    <h1>POINT OF SALE SYSTEMS</h1>
                </div>
                <div className="pair">
                    <div>
                        <p>IMG</p>
                    </div>
                    <div>
                        <h2>POS Specialists</h2>
                        <p>Our team of specialists will help you get the perfect system for your businesses needs.</p>
                    </div>
                </div>
                
            </section>
            <section className="pre-footer">
                <div className="pre-footer-section">
                    <p>IMG</p>
                    <a href="#">Schedule A Demo</a>
                </div>
                <div className="pre-footer-section">
                    <p>IMG</p>
                    <a href="#">Free POS Analysis</a>
                </div>
                <div className="pre-footer-section">
                    <p>IMG</p>
                    <a href="#">Grocery POS</a>
                </div>
                <div className="pre-footer-section">
                    <p>IMG</p>   
                    <a href="#">Hospitality POS</a>
                </div>
                <div className="pre-footer-section">
                    <p>IMG</p>   
                    <a href="#">RSI Security Systems</a>
                </div>
                <div className="pre-footer-section">
                    <p>IMG</p> 
                    <a href="#">Contact Us</a>
                </div>
            </section>
            <footer>
                <div>
                    <ul>
                        <li>CONTACT US</li>
                        <li>CUSTOMER SUPPORT</li>
                        <li>POLICIES</li>
                        <li>CAREER OPPORTUNITIES</li>
                        <li>ABOUT RETAIL SYSTEMS INC.</li>
                    </ul>
                </div>
                <div>
                    <p>RETAIL SYSTEMS INC, 3920 AUGUSTA RD, WEST COLUMBIA, SC, 29170803-739-1190WEBMASTER@RETAILSYSTEMSINC.COM</p>
                </div>
                <div>
                    <p>IMG</p>
                </div>
            </footer>
        </div>
    )
}
export default Dashboard