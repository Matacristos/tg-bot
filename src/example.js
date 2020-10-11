import axios from 'axios';

const url = "https://api.coinranking.com/v1/public/coin"

const getBitcoin = async () => {
    const res = await axios.get(`${url}/1`);
    const { data } = res.data
    const { name, symbol, price } = data?.coin
    return `Current price of ${name}(${symbol}): ${price}`
};

export default getBitcoin;