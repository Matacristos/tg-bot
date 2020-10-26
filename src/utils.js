import axios from 'axios';

const flaskUrl = 'http://ec2-52-71-16-63.compute-1.amazonaws.com/'

export default async () => {
    const res = await axios.get(`${flaskUrl}/`);
    return res.data
};
