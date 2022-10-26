require('dotenv').config();
const axios = require("axios");

const baseURL ='https://api.twitter.com';

export async function getTweets(){
  try {
   const request = await axios.get(baseURL+'/2/tweets/search/recent', {
    params: {
      query: 'Marvel Studios',
      expansions: 'author_id',
      'tweet.fields': 'public_metrics,id',
      'user.fields': 'username'
    },
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`
    }
    });
    return Promise.resolve(request.data);
  }catch(err){
    return Promise.reject(err);
  }
}
