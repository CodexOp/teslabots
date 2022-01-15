import React from 'react';
import './why.scss';
import up from '../../images/up-arrow.png';
import headset from '../../images/headset.png';
import download from '../../images/download.png';
import wave from '../../images/wave.svg'


const Why = () => {
    return (
        <div className='whyus' id="why">
            <div className='full_width'>
                  <h2>Why We?</h2>
            </div>
            <div className='main_whyus'>
                <div className='whywe_content'>
                 
                    <p>
                    Cryptocurrency trading is extremely volatile with high
price fluctuations that vary drastically even in minutes.
The idea behind TESLA bots was conceived to allow
both beginner and advanced crypto investors
automate their trading positions. By using key
technical indicators and implementing specific trading
strategies, our goal is to enhance the effectiveness of
human cryptocurrency trading in all potential ways.
With a quick and easy manual installation, a 24*7
customer support and with access to lifetime upgrades
TESLA bots are designed to automate & enable
cryptocurrency trading on your behalf
                    </p>
                </div>
                <div className='whywe_blocks'>
                <div className='block'>
                    <div className='icon_box'>
                    <img src={up} alt="up" />
                    </div>
                    <div className='title_box'>
                    LIFETIME UPGRADE

                    </div>
                </div>

                    <div className='block'>
                    <div className='icon_box'>
                    <img src={headset} alt="up" />

                    </div>
                    <div className='title_box'>
                    24/7 CUSTOMER SUPPORT
                    </div>
                </div>
                <div className='block'>
                    <div className='icon_box'>
                    <img src={download} alt="up" />

                    </div>
                    <div className='title_box'>
                    MANUAL INSTALLATION            
                            </div>
                </div>
                </div>

            </div>

        </div>
    )
}

export default Why
