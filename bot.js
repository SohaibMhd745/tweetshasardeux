import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
    appKey: '6ReZstRFPkbTrdw5jrBwYp65T',
    appSecret: 'MSeUDwTbNz34LTeUpdKJ48csoF9e3yTm2R36xt4CIQ1gbp8Sql',
    accessToken: '1599691376639315968-GMo53j4SmadueNLb6Nv4CQHDSCLSAK',
    accessSecret: 'dhPdlueO6VUQtB1CbsX6vDvesCtagWzOe3Rq3HZOdomIL',
});

async function postTweet(text) {
    const media1 = await client.v1.uploadMedia('./media/persons_solo/1.png');
    const media2 = await client.v1.uploadMedia('./media/persons_solo/4.png');

    await client.v2.tweetThread([
        { text: text, media: { media_ids: [media1, media2] } },
      ]);
}

postTweet('Comment ça mon Grim ?');