import { useState, useEffect } from "react";

export function useBitcoinPrice(currency) {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
    console.log("Fetching Bitcoin Data");
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setBitcoinPrice(json.bitcoin[currency.toLowerCase()]);
        }
      });

    return () => {
      ignore = true;
      console.log("Cleanup effect");
    };
  }, [currency]);

  return bitcoinPrice;
}
