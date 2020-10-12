import dotenv from 'dotenv';
import { Telegraf } from 'telegraf'
import getCoin, { coin } from './example';

dotenv.config();



const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('bitcoin', async ({ reply }) => {
    const msg = await getCoin(coin.BITCOIN);
    return reply(msg)
})
bot.launch()
