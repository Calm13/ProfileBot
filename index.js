const { 
    Telegraf, Markup 
} = require('telegraf')
require('dotenv').config()
const helpersText = require('./const')
const botName = 'Assistant'

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(
    `Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'stranger'}👋! 
My name is ${botName} and I help my creator Pavel in solving problems, namely with the placement of data about him, please write to the /about_me team in the chat and you will receive a document (CV), as well as photos and links to projects) Have a nice day!😊
    `) 
    )
bot.help((ctx) => ctx.reply(helpersText.command))

bot.command('about_me' , async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Натисніть на кнопку, яка дасть вам інформацію про мене</b>' , Markup.inlineKeyboard(
            [
                [Markup.button.callback('Get CV File', 'btn_1')],
                [Markup.button.callback('An example of work Kashalot', 'btn_2')],
                [Markup.button.callback('An example of work Alt Ukraine', 'btn_3')],
                [Markup.button.callback('An example of work Cikera', 'btn_4')],
                [Markup.button.callback('An example of work Ivan Oglobin', 'btn_5')],
                [Markup.button.callback('An example of work Snovio', 'btn_6')],
                [Markup.button.callback('An example of work Snovio Blog', 'btn_7')],
                [Markup.button.callback('An example of work Snovio SalesCheats', 'btn_8')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
    
})
function addActionBotDocument(name , src , text ){
    bot.action(name , async (ctx) =>{
        try {
            await ctx.answerCbQuery()
            if(src !== false){
                await ctx.replyWithDocument({
                    source: src
                })
            }
            await ctx.replyWithHTML(text , {
                disable_web_page_preview: true
            })
        }catch (e){
            console.error(e)
        }
    })
}
function addActionBotPhoto(name , src , text ){
    bot.action(name , async (ctx) =>{
        try {
            await ctx.answerCbQuery()
            if(src !== false){
                await ctx.replyWithPhoto({
                    source: src
                }) 
            }
            await ctx.replyWithHTML(text , {
                disable_web_page_preview: true
            })
        }catch (e){
            console.error(e)
        }
    })
}

addActionBotDocument('btn_1', './document/PavelChypula-CV.pdf' , helpersText.portfolio.cv)
addActionBotPhoto('btn_2', './img/kashalot.png' , helpersText.portfolio.kashalot)
addActionBotPhoto('btn_3', './img/alt.png' , helpersText.portfolio.alt)
addActionBotPhoto('btn_4', './img/cikera.png' , helpersText.portfolio.cikera)
addActionBotPhoto('btn_5', './img/ivan-oglobin.png' , helpersText.portfolio.oglobin)
addActionBotPhoto('btn_6', './img/snovio.png' , helpersText.portfolio.snovioLanding)
addActionBotPhoto('btn_7', './img/snovio-blog.png' , helpersText.portfolio.snovioBlog)
addActionBotPhoto('btn_8', './img/snovio-cheats.png' , helpersText.portfolio.snovioCheats)

bot.on('message', (ctx) =>{
    ctx.deleteMessage()
    ctx.reply(`${ctx.message.from.first_name ? ctx.message.from.first_name : 'stranger'} please enter the /helps command 🤗)` + `The ${ctx.message.text} command is not yet available 😢`)
}) 

bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))