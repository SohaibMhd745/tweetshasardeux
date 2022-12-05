import { TwitterApi } from 'twitter-api-v2';

const userClient = new TwitterApi({
    appKey: '6ReZstRFPkbTrdw5jrBwYp65T',
    appSecret: 'MSeUDwTbNz34LTeUpdKJ48csoF9e3yTm2R36xt4CIQ1gbp8Sql',
    accessToken: '1599691376639315968-GMo53j4SmadueNLb6Nv4CQHDSCLSAK',
    accessSecret: 'dhPdlueO6VUQtB1CbsX6vDvesCtagWzOe3Rq3HZOdomIL',
});

const { data: createdTweet } = await userClient.v2.tweet('Sondage', {
    poll: { duration_minutes: 120, options: ['Oui', 'Non'] },
});
console.log('Tweet', createdTweet.id, ':', createdTweet.text);