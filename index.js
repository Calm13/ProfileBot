const { 
    Telegraf, Markup 
} = require('telegraf')
require('dotenv').config()
const helpersText = require('./const')
const botName = 'Помощник'

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(
    `Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}👋! 
Меня зовут ${botName} , я помогаю моему создателю Pavel , пожалуйста напишите в чат команду /about_me и вы получите документ(CV) и также фотографии и ссылки на готовые проекты)Хорошего Дня 👍
    `) 
    )
bot.help((ctx) => ctx.reply(helpersText.command))

bot.command('about_me' , async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Нажмите на кнопку, которая даст вам информацию обо мне</b>' , Markup.inlineKeyboard(
            [
                [Markup.button.callback('Получить CV File', 'btn_1')],
                [Markup.button.callback('Пример Работы 1', 'btn_2')],
                [Markup.button.callback('Пример Работы 2', 'btn_3')],
                [Markup.button.callback('Пример Работы 3', 'btn_4')]
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

addActionBotDocument('btn_1', './document/CV_Pavel_Chipula.docx' , helpersText.text1)
addActionBotPhoto('btn_2', './img/photoAltSite.png' , helpersText.text2)
addActionBotPhoto('btn_3', './img/photoOglobinSite.png' , helpersText.text3)
addActionBotPhoto('btn_4', './img/photoStartupSite.png' , helpersText.text4)

bot.hears('Изя' , (ctx) => {
    ctx.reply(`Привет Изя ,${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}  ${ctx.message.from.bot ? "бот": "не бот"}`)
})

bot.on('message', (ctx) =>{
    ctx.deleteMessage()
    ctx.reply(`${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'} введите пожалуйста команду /help 🤗)` + `Такой команды ${ctx.message.text} еще нету 😢`)
}) 


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))