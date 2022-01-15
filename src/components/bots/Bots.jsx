import React from 'react';
import './bots.scss';
import sniper from '../../images/target.png'
import sniper2 from '../../images/traffic.png'
import presale from '../../images/fast-delivery.png'
import message from '../../images/message.png'
import vector1 from '../../images/Vector1.svg'
import vector2 from '../../images/Vector.svg'

const Bots = () => {
    return (
        <div className='bots_svg'>

    
        <div className='bots_section' id="bots">
            <img className='vector1' src={vector1} alt="vector"/>
            <img className='vector2' src={vector2} alt="vector"/>

            <div className='bots_heading'>
                OUR BOTS
            </div>
            <div className='bots_center'>
            <div className='bots_card_outer'>



                <div className='bots_card'>
                <div className='icon'>
                    <img src={sniper} alt="sniper" />
                </div>
                <div className='heading_card'>
                    <h2>SNIPING BOT</h2>
                </div>
                <div className='about_bot'>
                    <p>This bot is used to snipe tokens so that you buy them as early as possible. </p>
                </div>
                <div className='feature_card'>
                    <ul>
                        <li>► Simple buy order</li>
                        <li>► Simple sell order </li>
                        <li>► Approve tokens </li>
                        <li>► Live profit & loss</li>
                        <li>► Multiple Buy</li> 

                        </ul>
                        <ul>
                        <li>► Hot-keys for selling (25/50/100%) </li>
                        <li>► Bypassing anti-bot </li>
                        <li>► Honeypot scanner</li>
                        <li>► Fair launch Sniper</li>
                        </ul>
                        <br ></br>
                        <ul>
                        <li>Special Feaures ►</li>
                    <li>
                    ► COPY TRADING</li>
                    </ul>
                    <div className='price'>
                        <br></br>
                        <h2 className="regular_price">$500</h2>
                        <h2 className="sale_price">$400</h2>
                    </div>
                </div>
                <div className='button_card'>
                    <button className='main_button_bot'>Contact Us</button>
                </div>
                </div>



                <div className='bots_card'>
                <div className='icon'>
                    <img src={presale} alt="sniper" />
                </div>
                <div className='heading_card'>
                    <h2>Presale Sniping Bot</h2>
                </div>
                <div className='about_bot'>
                    <p>This bot is used to snipe presales with multiple wallets.</p>
                </div>
                <div className='feature_card'>
                    <ul>
                        <li>► Pinksale/DxSale presale snipe</li>
                        <li>► Claim tokens</li>
                        <li>► Approve & Sell</li>
                        <li>► Keep trying for sell</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>Special Features ► </li>
                        <li>► Multiple wallet</li>
                        <li>► multiple presale sniping at the same time</li>
            
                    </ul>
                    <div className='price'>
                        <br></br>
                        <h2 className="regular_price">$500</h2>
                        <h2 className="sale_price">$400</h2>
                    </div>
                </div>
                <div className='button_card'>
                    <button className='main_button_bot'>Contact Us</button>
                </div>
                </div>



                <div className='bots_card'>
                <div className='icon'>
                    <img src={sniper2} alt="sniper" />
                </div>
                <div className='heading_card'>
                    <h2>Tesla Bots Combo</h2>
                </div>
                <div className='about_bot'>
                    <p>This bot Includes all features of:</p>
                </div>
                <div className='feature_card'>
                    <ul>
                        <li>► Sniping bot </li>
                        <li>► Presale bot</li>
                        
                    </ul>
                    <div className='price'>
                        <br></br>
                        <h2 className="regular_price">$900</h2>
                        <h2 className="sale_price">$700</h2>
                    </div>
                
                </div>
                <div className='button_card'>
                    <button className='main_button_bot'>Contact Us</button>
                </div>
                </div>






                <div className='bots_card'>
                <div className='icon'>
                    <img src={message} alt="sniper" />
                </div>
                <div className='heading_card'>
                    <h2>Telegram DM Bot</h2>
                </div>
                <div className='about_bot'>
                    <p>This Bot Is Used For marketing purpose On Telegram
                       </p>
                </div>
                <div className='feature_card'>
                    <ul>
                        <li>► Scrap All Members From Group</li>
                        <li>► Message Scrapped Members One By One</li>
                        <li>► Anti-Ban</li>
                        <li>► Thousands Of Messages Every Day</li>
                    </ul>
                    <div className='price'>
                        <br></br>
                        <h2 className="regular_price">$500</h2>
                        <h2 className="sale_price">$400</h2>
                    </div>
                </div>
                <div className='button_card'>
                    <button className='main_button_bot'>Contact Us</button>
                </div>
                </div>



                

            </div>

            </div>
        </div>
        </div>
    )
}

export default Bots
