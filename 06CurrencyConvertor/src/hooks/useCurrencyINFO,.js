// import { useEffect, useState } from "react"

// function useCurrencyInfo(Currency) {
//     const[data, setData] = useState({})
//    useEffect ( () => {
// // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`)

//         fetch(`https://open.er-api.com/v6/latest/${Currency}.json`)
      
//         .then((res) => res.json)
//         .then((res)=> setData(res[Currency]))
//         console.log(Currency);
   
//     },[Currency])
        
//     console.log(data);
//     return data    
    
// }
// export default useCurrencyInfo;

// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/{endpoint}
//https://api.exchangerate-api.com/v4/latest/inr
//https://open.er-api.com/v6/latest/USD
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json

import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
      // fetch(`api.com/v6/latest/${currency}.json`)
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;