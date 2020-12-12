const { VK } = require('vk-io');
const config = require('./config.json');
const vk = new VK({token: config.token});
let i = 0;

async function Main() {
    if(i > 9000) return clearInterval(); // Установлено ограничение, чтобы не испытывать проблемы с загрузкой скринов на потряжении следующего дня (загружать можно 10к фотографий в день)
    await vk.upload.photoAlbum({source: {value: './photo.jpg'}, album_id: config.album_id}); // Загружаем фотографию в альбом
    i++;
    console.log(`\x1b[32m> \x1b[0mЗагружено фотографий: ${i}`); // Выводим в консоль количество загруженных фотографий
    setTimeout(Main, 50); // Повторяем функцию через 50 миллисекунд, дабы не было Flood Control
}Main()
