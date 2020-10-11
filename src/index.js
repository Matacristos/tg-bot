import dotenv from 'dotenv';
import { Telegraf } from 'telegraf'
import getCoin from './example';

dotenv.config();



const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('quote', async ({ reply }) => {
    const msg = await getCoin();
    return reply(msg)
})
bot.launch()
