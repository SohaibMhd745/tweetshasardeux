import { TwitterApi } from 'twitter-api-v2';
import { persons_s } from './lists/persons/persons_s.js';
import { actions_s } from './lists/actions/actions_s.js';

const client = new TwitterApi({
    appKey: '6ReZstRFPkbTrdw5jrBwYp65T',
    appSecret: 'MSeUDwTbNz34LTeUpdKJ48csoF9e3yTm2R36xt4CIQ1gbp8Sql',
    accessToken: '1599691376639315968-GMo53j4SmadueNLb6Nv4CQHDSCLSAK',
    accessSecret: 'dhPdlueO6VUQtB1CbsX6vDvesCtagWzOe3Rq3HZOdomIL',
});

async function prepareTweet() {
    const person = persons_s[Math.floor(Math.random() * persons_s.length)];
    const action = actions_s[Math.floor(Math.random() * actions_s.length)];
    postTweet(
        action.str1 + ' ' + person.str + ' ' + action.str2,
        ['persons/1', 'persons/4']
    );
}

async function postTweet(text, mediasArray) {
    if (mediasArray) {
        await client.v2.tweetThread([
            {
                text: text,
                media: {
                    media_ids: [
                        await client.v1.uploadMedia('./media/' + mediasArray[0] + '.png'),
                        await client.v1.uploadMedia('./media/' + mediasArray[1] + '.png')
                    ]
                }
            }
        ]);
    } else {
        await client.v1.tweet(text);
    }
}

setInterval(prepareTweet, 1000 * 60 * 30);