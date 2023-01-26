import React, {useState} from 'react'
import axios from 'axios'


const FetchAPI = () => {
    const [coins, setCoins] = useState([])

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        // How we handle the data
        .then((response) => {
            return response.json()
            // json is super important
            // console.log(response)
        })
        .then((response) => {
            console.log(response)
            setCoins(response)
        })
        // What happens if our call is rjected
        .catch((error) => {
            console.log("This is a catch error: ", error)
        })
        console.log("I'm doing my other task while waiting for my response")
    }

const axiosCrypto = () => {
    <>
        <h1>Fetch API</h1>
        <button onClick={fetchData}>Click Me</button>
        {
            coins.map((potato,index)=>{
                return (
                    <div className="d-flex justify-content-between align-items-center" key={index}>
                    <img src={potato.image} alt="" height="100px"/>
                    <h1>{potato.name}</h1>
                    <h3>${potato.current_price}</h3>
                    <h5>Ticker: {potato.symbol.toUpperCase()
}</h5>
                    </div>
                )
            })
        }
    </>
  
}





export default axiosCrypto