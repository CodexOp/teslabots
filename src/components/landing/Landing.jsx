import React, {useState, useEffect} from 'react'
import './landing.scss'
import tesla from '../../images/tesla.png'
import logo from '../../images/logo.png'
import thunder from '../../images/thunder.png'
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';



const Landing = () => {
    const [toggleMenu, setTogglemenu] = useState(false);
    const [title, setTitle] = useState('')
    const [sticky, setStickyClass] = useState('relative')
    const [pass, setPass] = useState('relative')

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
        window.removeEventListener('scroll', stickNavbar);

        }
    }, [])

    const stickNavbar = () => {
        console.log(window.scrollY)

        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 500 ? setStickyClass(()=>{
              const stick = document?.querySelector('.navbar')
              stick.style.position = "fixed";
              stick.style.background = "#000412"

            }) : setStickyClass(()=>{
                const stick = document?.querySelector('.navbar')
                stick.style.position = "relative";
                stick.style.background = "transparent"
            });
        }
      };



    const popup = () => {
        const popupelement = document?.querySelector('#pops');
        popupelement.style.display = "block";
    }

    
    const popout = () => {
        const popupelement = document?.querySelector('#pops');
        popupelement.style.display = "none";
    }

    console.log(title)

    const SubmitForm = () => {
        const res = fetch('https://teslabotz.herokuapp.com/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username:title,
                password:pass,
            }),
        }).then((res)=>{
            if(res.status == 200){
                alert('Succesfully Registered')
            }

            else{
                alert('User Already Exist')
            }
        })  
    }
    

    return (
        <div className='outer' id="landing">
            <div className='pop' id="pops">
                <div className='pop_inner'>
                    <p>Register</p>
                    <AiOutlineClose size="20px" onClick={()=>{
                        popout()
                    }} />
                </div>
                <div className='input_form'>
                <p className='input1'>Enter Your Username</p>
                <div>
                <input className='input1_main' placeholder='Username' onChange={event => setTitle(event.target.value)}/>
                </div>
                <p className="input2">Enter Your Password</p>
                <div>
                <input className='input2_main' placeholder='Password' onChange={event => setPass(event.target.value)}/>
                </div>
                <button className='submit' onClick={()=>{
                    SubmitForm()
                }}>Submit</button>
                </div>
            </div>
           
            <div className='navbar'>
                <div className='logo_section'>
                <img src={logo} alt='logo' /> 
                <p className='logo_name'>TESLA BOTS</p>
                </div>
                <div className='list_section'>
                    <ul className='list_ul'>
                        <li><a href="#landing">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#bots">BOTS</a></li>
                        <li><a href="">DOCS</a></li>
                        <li onClick={()=>{
                        popup()
                        }}>REGISTER</li>
                        <li><a href="">TELEGRAM</a></li>
                    </ul>
                    {toggleMenu
        ? <AiOutlineClose fontSize={28} className="ham" onClick={()=>{setTogglemenu(false)}}/>
        :
        <HiMenuAlt4 fontSize={28} className="ham" onClick={()=>{setTogglemenu(true)}}/>
        }
        {
          toggleMenu &&(
            <div className='list_section_new'>
            <ul className='new_ul'>
               <li>HOME</li>
               <li>ABOUT</li>
               <li>BOTS</li>
               <li>SERVICES</li>
               <li>DOCS</li>
               <li className='one_button'  onClick={()=>{
                        popup()
                        }}> REGISTER</li>
               <li className='one_button'> TELEGRAM</li>
              
            </ul>
            </div>
          )
        }
                </div>
                </div>
            <div className='landing_outer'>
                <div className='landing_inner'>
                    <div className='landing_text_content'>
                        <div className='main_content'>
                            <h2 className='heading_bots'>INTRODUCING TESLA BOTS</h2>
                            <p>
                            Our mission is to make bots simple, effective and affordable
for enhancing your crypto trading strategies. TESLA bots will
allow you to customize and execute your investment strategies
at fascinating speeds and best in-market price
                            </p>
                            <div className='buttons'>
                            <button>Sneak Peak</button>
                            <button>Hand-book</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className='landing_image'>
                        <img className="tesla" src={tesla} alt="tesla" />
                        <img className='thunder' src={thunder} alt="tesla" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing
