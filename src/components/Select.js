import React, { useState, useEffect } from "react";
import "../styles/Select.css";
import axios from "axios";

const Select = () => {
  const [select, setSelect] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((response) => setSelect(response.data));
  }, []);

  return (
    <div className="select-container">
      <select>
        {select.map((item) => (
            
        
          <option key={item.id}>{item.name} </option>
         
          
          
        ))}
      </select>

     
      <i class="fi fi-rs-arrow-right"></i>
      
     

      <select>
        {select.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
