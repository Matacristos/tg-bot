import axios from 'axios';

const flaskUrl = 'http://localhost:5000'
export const getGraphUrl = `${flaskUrl}/getGraph`

export default async () => {
    const res = await axios.get(`${flaskUrl}/`);
    return res.data
};
