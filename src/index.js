import axios from 'axios';
import dotenv from 'dotenv';
import { Telegraf } from 'telegraf'
const Markup = require('telegraf/markup')
const Extra = require('telegraf/extra')
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
    const response = await axios(getGraphUrl, {
        responseType: 'stream',
    })
    ctx.replyWithPhoto({ source: response.data })
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

// Hardcoded jokes

bot.hears('soy angel', (ctx) => ctx.replyWithPhoto('https://cdn.memegenerator.es/imagenes/memes/full/31/71/31710992.jpg'))

bot.hears('hola', (ctx) => {
    ctx.reply('<b>Hola</b>. <i>Quién eres?</i>',
        Extra.HTML()
            .markup(Markup.inlineKeyboard([
                Markup.callbackButton('David', 'David'),
                Markup.callbackButton('German', 'German'),
                Markup.callbackButton('Paolo', 'Paolo'),
                Markup.callbackButton('Navega', 'Navega')
            ])))
})
bot.action('David', (ctx) => {
    ctx.editMessageText('<b>Hola David, lo siento pero esto no es Tinder 🍆</b>',
        Extra.HTML())
})
bot.action('German', (ctx) => {
    ctx.editMessageText('Hola Germán... Te recomiendo este enlace <b>https://1.ooskar.com/ </b>',
        Extra.HTML())
})
bot.action('Paolo', (ctx) => {
    ctx.editMessageText('<b>Hola Paolo, en qué local de copas te gustaría invertir hoy? 🙏</b>',
        Extra.HTML())
})
bot.action('Navega', (ctx) => {
    ctx.editMessageText('<b>Hola Navega, estoy aquí para servirte 😊</b>',
        Extra.HTML())
})

bot.launch()
