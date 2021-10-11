const { token, album_id } = require('./config.json');
const { upload } = new (require('vk-io')).VK({token});

(async () => {
    for(let i = 0; i < 9000; i += 5) {
        console.log(`\x1b[32m> \x1b[0mЗагружено фотографий: ${i}`);

        await upload.photoAlbum({source: Array(5).fill('./photo.jpg'), album_id});
        await new Promise(resolve => setTimeout(resolve, 250));
    }
})();