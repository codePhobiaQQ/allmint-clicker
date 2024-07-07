const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '7254701324:AAGbK_DDZBx1AiTsWZt7mBJSvpFC7aQl8Cs';
const webAppUrl = 'https://dev.allmint.io';

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Добро пожаловать в allmint-clicker', {
            reply_markup: {
                keyboard: [
                    [{text: 'Перейти к allmint-clicker', web_app: {url: webAppUrl}}]
                ]
            }
        })

        await bot.sendMessage(chatId, 'Заходи в allmint-clicker по кнопке ниже', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Перейти к allmint-clicker', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
});

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT))
