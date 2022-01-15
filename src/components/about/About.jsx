import React from 'react'
import wave from '../../images/wave.svg';
import './about.scss';
import jd from '../../images/charmender.jfif'
import tushar from '../../images/pikachu.jpg'
import sachin from '../../images/squirtle.png'
import navdeep from '../../images/balbasaur.jfif'

const About = () => {
    return (
        <div>
          <img className='wave' src={wave} alt='wave' />
          <div className='about' id="about">
            <div className='heading_about'>
                  {/* <h2>Who We Are</h2> */}
            </div>
            <p>
            You don’t need to be a technical coder or a blockchain developer for using TESLA bots!
Tesla bots are simple and easy to execute. Even those who are new to coding and advanced trading
algorithms can utilise the benefits. Tesla bots provide a state-of-the-art handbook that enables you to
install and execute your bot’s logical commands with just few clicks. Our bots implement key trading
strategies and we aim to attain the highest win rate within the existing bot industry. TESLA bots’ strategic
and key technical indicators scan for multiple pairs on network to grab the price in real time and to make
automated decisions based on the user's settings
            </p>
            </div>
            <div className='bots_svg'>

    
<div className='bots_section'>

    <div className='bots_card_outer'>



        <div className='bots_card_about'>
        <div className='icon_about '>
            <img src={jd} alt="sniper" />
        </div>
        <div className='heading_card_about'>
            <h2>JD TESLA</h2>
        </div>
        <div className='about_bot'>
            <p>He is owner of JD Tesla supremacy channel on telegram. He has worked with some projects and well known in this space, he is in the marketing team of this project.</p>
        </div>
        <div className='button_card_about'>
        <p>Founder - Tesla Bots</p> 
         </div>
        </div>





        <div className='bots_card_about'>
        <div className='icon_about'>
            <img src={sachin} alt="sniper" />
        </div>
        <div className='heading_card_about'>
            <h2>Brick Matrix</h2>
        </div>
        <div className='about_bot'>
        <p>He is a prominent block-chain developer. Have very vast experience in technologies. He is Graduated from one of the top colleges. He spent day and night working on this project so that everyone can benefit from it.</p>
        </div>

        <div className='button_card_about'>
          <p>Block-Chain Dev</p> 
        </div>
        </div>




        <div className='bots_card_about'>
        <div className='icon_about'>
            <img src={tushar} alt="sniper" />
        </div>
        <div className='heading_card_about'>
            <h2>COD3X</h2>
        </div>
        <div className='about_bot'>
        <p>He is the experince web developer, already worked with many clients, have experince of more than 4 years, Currently he is managing our website </p>
        </div>
        <div className='button_card_about'>
        <p>Web Developer</p> 
        </div>
        </div>








        <div className='bots_card_about'>
        <div className='icon_about'>
            <img src={navdeep} alt="sniper" />
        </div>
        <div className='heading_card_about'>
            <h2>NAVDEEP</h2>
        </div>
        <div className='about_bot'>
        <p>He is the brother of JD Tesla, and currently he is managing our all social media handles in our team.</p>
        </div>
  
        <div className='button_card_about'>
        <p>Founder</p> 
        </div>
        </div>



        


    </div>
</div>
</div>
        </div>
    )
}

export default About
