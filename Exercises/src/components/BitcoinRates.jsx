import { useState, useEffect } from "react";

function BitcoinRates() {
    const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);

    useEffect(()=> {
        console.log('Fetching Bitcoin Data');
        let ignore = false;

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then(response => response.json())
        .then(json => {
            console.log('Response:', json);
            if (!ignore) {
                setBitcoinPrice(json.bitcoin[currency.toLowerCase()]);
            }
        });

        return () => {
            ignore = true;
            console.log('Cleanup efect');
        };
    }, [currency]);

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div>
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <div>
                <strong>Current Price: </strong> 
                {bitcoinPrice} {currency}
            </div>
        </div>
    );
}

export default BitcoinRates