var handler  = async (m, { conn }) => {

let texto = `📮 *Instalación de YoshikoBot*

⬡ Dudas: Wa.me/573012482597
⬡ Tutoríal: https://youtu.be/9-v4XwMTJYE?si=veqJSgJ4bKi5kSjB

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/Diego-YL-177/YoshikoBot-MD && cd YoshikoBot-MD && yarn install && npm install 

ls

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 📮_

_Utilice "infinity" para instalar el bot mediante el hosting vortexus 📮_`

conn.reply(m.chat, texto, m, )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt-get update -y && apt-get upgrade -y')
await delay(1000 * 1)
m.reply('pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/Diego-YL-177/YoshikoBot-MD && cd YoshikoBot-MD && yarn install && npm install ')
await delay(1000 * 1)
m.reply('ls')
await delay(1000 * 1)
m.reply('npm start')
}

if (/^infinity$/i.test(m.text) ) {
conn.reply(m.chat, '✏️ *Instalación por infinityhost*\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Dashboard:\nhttps://dashboard.infinitywa.xyz\n\n• Panel:\nhttps://live.panel-infinitywa.store/', m, )
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/a1d4b49fec4d1c10084db.jpg'}, caption: ''}, {quoted: fkontak})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/d586a96bec8385b9dd66a.jpg'}, caption: ''}, {quoted: fkontak})
}
}

}
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^(instalarbot)/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))