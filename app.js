const vk = new (require('vk-io')).VK({token: require('./config.json').token});
let i = 0;

async function go() {
    if(i >= 9000) return clearInterval(); // Установлено ограничение, чтобы не испытывать проблемы с загрузкой скринов на потряжении следующего дня (загружать можно 10к фотографий в день)
    await vk.upload.photoAlbum({source: ['./photo.jpg', './photo.jpg', './photo.jpg', './photo.jpg', './photo.jpg'], values: {value: './photo.jpg', filename: 'photo', contentType: 'image'}, album_id: config.album_id});i+=5; // Загружаем фотографию в альбом
    console.log(`\x1b[32m> \x1b[0mЗагружено фотографий: ${i}`); // Выводим в консоль количество загруженных фотографий
    setTimeout(go, 250); // Повторяем функцию через 250 миллисекунд, дабы не было Flood Control
}go();
