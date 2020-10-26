import axios from 'axios';

const url = "https://api.coinranking.com/v1/public/coin"

export const coin = {
    BITCOIN: 1,
}


export default async (coin = coin.BITCOIN) => {
    const res = await axios.get(`${url}/${coin}`);
    const { data } = res.data
    const { name, symbol, price } = data?.coin
    return `Current price of ${name}(${symbol}): ${price}`
};

