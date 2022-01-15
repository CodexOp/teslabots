import React from 'react';
import './footer.scss';
import tesla from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='footer_outer'>
            <div className="footer_inner">
                <div className='left_section'>
                    <div className='left_section_heading'>
                        <img src={tesla} alt='tesla' />
                        <h2>Tesla Bots</h2>
                    </div>
                    <p>Our mission is to make bots simple, effective and affordable for enhancing your crypto trading strategies, We Make Most Effective And Affordable Bots To Make Your Crypto Journey Smooth, Introducing You Tesla Bots At Best Market Price</p>
                <button className='chat_button'>Chat With Us</button>
                </div>
                <div className='right_section'>
                    <div className='heading_footer'>
                        <h2>Sections</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Our Bots</li>
                            <li>Why We</li>
                            <li>Documentation</li>
                            <li>Telegram</li>
                        </ul>
                    </div>

                    <div className='heading_footer'>
                        <h2>Important Links</h2>
                        <ul>
                            <li>Discord</li>
                            <li>Telegram</li>
                            <li>Documentation</li>
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
