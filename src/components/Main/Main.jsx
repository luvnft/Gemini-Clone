import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>🅰️I</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
                <div className="greet">
                <p><span>Hello, ATEAM.</span></p>
                <p>How can I help you "Rise Up" today and earn more Telegram 🅰️TL memecoins?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>How do I download a TonKeeper Wallet to buy Telegram TON 🅰️TL mememcoins</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>How do I download a Talisman Wallet to buy 🅰️DTC on Kusuma blockchain</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>How do I stake Telegram TON 🅰️TL mememcoins to earn 25% APR</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>How do I stake an Kusuma NFT 🅰️DTC to earn 25% APR and borrow against the 🅰️DTC digital asset</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            }


            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className='bottom-info'>
                  🅰️I may display inaccurate info, including about people, so double-check its responses. Your privacy and 🅰️I Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main