import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Coin.css";
import Start from "./Start";
import Select from "./Select";

const CoinList = () => {
  const [Data, setData] = useState([]);
  const [limit,setLimit]=useState(5)

  const Showmore=()=>{
    setLimit(limit+3)
  }

  const showAll=()=>{   setLimit(50)}

  const showless=()=>{setLimit(limit-5>0 ? limit-3 :5)}
 
  

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${+limit}&page=1&sparkline=false`
      )
      .then((response) => setData(response.data));
  }, [limit]);

  return (
    <>
     <Start/>
    <div className="coin-container">
      <h1 className="coinList-header">بازار معاملاتی</h1>
      {Data.map((item) => {
        return (
            <>
          <div className="single-coin" key={item.id}>
          <button className="btn-coin">معامله</button>
         
            <h5> <span>حجم بازار : </span> {item.market_cap}</h5>
            <h5 className={item.market_cap_change_24h>0 ? "green" : "red"}> <span>تغییرات 24 ساعت گذشته : </span> {item.market_cap_change_24h}</h5>
            <h5>{item.current_price}$</h5>
            <h5 className="symbol">{item.symbol}</h5>
            <h5>{item.name}</h5>
            <img src={item.image} alt={item.name} />
          
          </div>
          </>
        );
      })}

    </div>
    <div className="load"> <button className="Loade-more" onClick={Showmore}>بیشتر</button>
    <button className="Loade-all" onClick={showAll}>همه</button>
    <button className="Loade-less Loade-more" onClick={showless}>کمتر</button>
    
    </div>

       

    <Select/>
      

     
    </>
  );
};

export default CoinList;
