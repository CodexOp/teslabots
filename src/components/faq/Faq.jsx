import React from 'react';
import './faq.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";


const Faq = () => {
    return (
        <div className='faq_outer' id="faq">
            <h2>Frequently Asked Questions</h2>
            <p>Question That Brands Avoid !</p>
            <div className='faq_inner'>
            <div stlye={{}}>
      <Accordion style={{ width: "100%",  background:'rgba(255,255,255,0.1)' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon 
          style={{
              fontSize:"30px",
              color:'#fff'
          }}
          />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 400,
              fontSize:'18px'
            }}
          >
              What does this “Sniper Bot” do and how does it work?
              </Typography>
        </AccordionSummary>
        <AccordionDetails 
        style={{
            background: '#061726',
            marginTop:'10px'
                  }}
        >
          <Typography>The bot allows you to buy any newly added token from PancakwSwap (all BSC network) and Uniswap in amazing speeds ( up to zero seconds from the time of the liquidity transaction show up in the mempool). It is called “frontrunning” which can make you a big amount of profit. The bot works by: Connecting to the blockchain network, scanning for all mempool / pending transactions, finding and matching the liquidity add transaction of the token you are trying to snipe and then placing the buy order in the same block (Pro/Plus version)</Typography>
        </AccordionDetails>
      </Accordion>







      <Accordion style={{ width: "100%",  background:'rgba(255,255,255,0.1)',  }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon 
          style={{
              fontSize:"30px",
              color:'#fff'
          }}
          />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 400,
              fontSize:'18px'
            }}
          >
              Why are you selling such a profitable tool? Why not use it yourself?
              </Typography>
        </AccordionSummary>
        <AccordionDetails 
        style={{
            background: '#061726',
            marginTop:'10px'
                  }}
        >
          <Typography>This is a question I get a lot. I am a coder and developing and upgrading this bot takes a lot of time. Thanks to my clients who always report me any changes in the smartchain and antibot systems I can keep my bots up to date. Also thanks to my clients I`m getting good snipe opportunities without many hours of researching. If I spend my time researching hundreds of telegram groups, twitters and sites I will not have time to develop the bot. That`s why I`m selling it and that way we all can profit from this market.</Typography>
        </AccordionDetails>
      </Accordion>











      <Accordion style={{ width: "100%",  background:'rgba(255,255,255,0.1)' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon 
          style={{
              fontSize:"30px",
              color:'#fff'
          }}
          />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 400,
              fontSize:'18px'
            }}
          >
             Is this tool safe to use? Is it legal?
              </Typography>
        </AccordionSummary>
        <AccordionDetails 
        style={{
            background: '#061726',
            marginTop:'10px'
                  }}
        >
          <Typography>The code is fully open / raw. It means that you can check it with different text viewers like even NotePad. You will be able to see all the functions, where your wallet info is used and when it is used. That is the only way to gain trust from my clients. The tool is also fully legal to use – you are simply the first or one of the first to invest in a new token.</Typography>
        </AccordionDetails>
      </Accordion>










      <Accordion style={{ width: "100%",  background:'rgba(255,255,255,0.1)' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon 
          style={{
              fontSize:"30px",
              color:'#fff'
          }}
          />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 400,
              fontSize:'18px'
            }}
          >
              How does it compete with other sniper bots out there? How many other bots are there already?
              </Typography>
        </AccordionSummary>
        <AccordionDetails 
        style={{
            background: '#061726',
            marginTop:'10px'
                  }}
        >
          <Typography>Pancake Sniper Basic is a first sniper bot on BSC. It was developed back in February 2021. In May 2021 I developed Pancake Sniper Plus which is a Front Running Bot with advanced antibot avoiding systems. Right now there are many different snipers on the market. But still there are no other public Front Runners. How do I know that? On every big launch I only see frontrun transactions from my clients and maybe 1-2 transactions from other (private) front running bots. If you ever saw big transactions on launch before anyone could start buying they were in 90% made by Pancake Sniper Plus.
Did you buy other bot(s) and you`re still being frontrunned by others? It`s because your bot is not a front runner – it uses totally different technique for sniping. You can message me on TG and I`ll desribe you how my bot works.</Typography>
        </AccordionDetails>
      </Accordion>









      <Accordion style={{ width: "100%",  background:'rgba(255,255,255,0.1)' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon 
          style={{
              fontSize:"30px",
              color:'#fff'
          }}
          />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 400,
              fontSize:'18px'
            }}
          >
 Does the bot only buy or also sell the tokens?              </Typography>
        </AccordionSummary>
        <AccordionDetails 
        style={{
            background: '#061726',
            marginTop:'10px'
                  }}
        >
          <Typography>The bot only buys the tokens based on the input / amount you configure it to. It does not sell them. Selling will have to be done manually via PancakeSwap or Uniswap after around 5-10 minutes for the best profit. That`s one of the secrets why it is still the only WORKING front running bot on the market. For more details msg me on TG.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
            </div>
        </div>
    )
}

export default Faq
