import dotenv from 'dotenv';
import { Telegraf } from 'telegraf'
import getCoin, { coin } from './example';

dotenv.config();


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('bitcoin', async ({ reply }) => {
    const msg = await getCoin(coin.BITCOIN);
    return reply(msg)
})

bot.command(['start', 'help'], async (ctx) => {
    const text = `Try next commands.\n\n/help — list commands\n/bitcoin — get information about bitcoins from our AI`
    ctx.replyWithMarkdown(text)
})

bot.catch((err, ctx) => {
    console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
})

bot.launch()
