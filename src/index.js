import dotenv from 'dotenv';
import { Telegraf } from 'telegraf'
import getCoin, { coin } from './example';
import connect, { getGraphUrl } from './utils'

dotenv.config();


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('bitcoin', async ({ reply }) => {
    const msg = await getCoin(coin.BITCOIN);
    return reply(msg)
})

bot.command('connect', async ({ reply }) => {
    const msg = await connect();
    return reply(msg)
})

bot.command('getGraph', async (ctx) => {
    ctx.replyWithPhoto(getGraphUrl)
})

bot.command(['start', 'help'], async (ctx) => {
    const text = `Try next commands.\n
    /help — list commands\n
    /bitcoin — get information about bitcoins from our AI\n
    /getGraph — get historical information about bitcoin\n
    /connect - connect with Flask api`
    ctx.replyWithMarkdown(text)
})

bot.catch((err, ctx) => {
    console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
})

bot.launch()
