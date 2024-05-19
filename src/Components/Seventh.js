import React from 'react'
import "./Seventh.css"
import right from "../assets/Vector 17.png"
import left from "../assets/Vector 16.png"

function Seventh() {

    const data = [
        { nom: "Instant payouts", tarifi: "No minimum trading days — cash out whenever you make a profi5" },
        { nom: "Easy 1-step assessment ", tarifi: "No minimum trading days — cash out whenever you make a profit" },
        {
            nom: "Smart trading ecosystem ", tarifi: "Track your targets in the dashboard and access a next- gen traderoom right from the main space "
        },
    ]
    return (
        <div className='Seventh'>
            <h1>Why SabioTrade?</h1>
            <div className="middle-cart">
                <button><img src={left} alt="..." /></button>
                {
                    data.map((item) => (
                        <div className="carts">
                            <h1>{item.nom}</h1>
                            <span>{item.tarifi}</span>
                        </div>
                    ))
                }
                <button><img src={right} alt="..." /></button>
            </div>
            <button className='btn'>Trade with Sabio</button>
        </div>
    )
}

export default Seventh